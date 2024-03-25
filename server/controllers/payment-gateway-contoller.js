const OrderSchema = require("../models/oders_schema");

const SSLCommerzPayment = require("sslcommerz-lts");
const Users = require("../models/users_Schema");
let orderData;
const paymentController = async (req, res) => {
  const { totalPrice, location, user_name, user_email } = req.body;
  orderData = req.body;

  const store_id = process.env.sslCommerz_store_id;

  const store_passwd = process.env.sslCommerz_store_password;
  const is_live = false; //true for live, false for sandbox
  const tran_id = Math.floor(100000 + Math.random() * 900000);
  const data = {
    total_amount: totalPrice,
    currency: "BDT",
    tran_id: tran_id, // use unique tran_id for each api call
    success_url: "http://localhost:8000/TransectionSuccess",
    fail_url: "http://localhost:3030/fail",
    cancel_url: "http://localhost:3030/cancel",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Food",
    product_category: "Food",
    product_profile: "general",
    cus_name: user_name,
    cus_email: user_email,
    cus_add1: location,
    cus_add2: location,
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };

  orderData.user_transection_id = tran_id;
  //   console.log(orderData);

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    // console.log("SendBoxUrl : ", GatewayPageURL);
    res.send({ url: GatewayPageURL });
  });
};

const trans_success_Controller = async (req, res) => {
    //console.log(orderData)
  try {

    const result = await OrderSchema.create({
        items:orderData.items,
        totalPrice:orderData.totalPrice,
        location:orderData.location,
        user_name:orderData.user_name,
        user_email:orderData.user_email,
        user_transection_id:orderData.user_transection_id

    });
    const existingUser=await Users.findOne({user_email:orderData.user_email});
    if(existingUser){
        //console.log(existingUser);
        existingUser.previous_order.push(result._id);
        try {
            await existingUser.save();
            // console.log("Order ID added to previous orders:", result._id);
            res.redirect('https://dish-discovery-react-app.netlify.app/thankyou');
        } catch (error) {
            // console.error("Error updating user:", error);
        }
    }
   
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { paymentController, trans_success_Controller };
