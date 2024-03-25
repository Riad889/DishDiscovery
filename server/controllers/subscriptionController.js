const SSLCommerzPayment = require("sslcommerz-lts");
const Users = require("../models/users_Schema");
let userSubscriptionData;
const SubscriptionController = async (req, res) => {
  const { user_email, subscriptionPrice, subscriptionStart, subscriptionEnd } =
    req.body;
  userSubscriptionData = req.body;
//   console.log(userSubscriptionData);
  const store_id = process.env.sslCommerz_store_id;
  const store_passwd = process.env.sslCommerz_store_password;
  const is_live = false; //true for live, false for sandbox
  const tran_id = Math.floor(100000 + Math.random() * 900000);
  const data = {
    total_amount: subscriptionPrice,
    currency: "BDT",
    tran_id: tran_id, // use unique tran_id for each api call
    success_url: "https://dish-discovery-backend-red.vercel.app/SubscriptionSuccess",
    fail_url: "http://localhost:3030/fail",
    cancel_url: "http://localhost:3030/cancel",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Food",
    product_category: "Food",
    product_profile: "general",
    cus_name: "user_name",
    cus_email: user_email,
    cus_add1: "location",
    cus_add2: "location",
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
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {
    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;
    // console.log("SendBoxUrl : ", GatewayPageURL);
    res.send({ url: GatewayPageURL });
  });
};

const Trans_Subcription_Success_Controller = async (req, res) => {
  try {
    // console.log("userSubscriptionData : ", userSubscriptionData);
    const existingUser = await Users.findOne({
      user_email: userSubscriptionData.user_email,
    });
    if (existingUser) {
      const result = await Users.updateOne(
        { user_email: userSubscriptionData.user_email }, // Filter
        {
          $set: {
            subscription: true,
            subscriptionStartDate: userSubscriptionData.subscriptionStart,
            subscriptionEndDate: userSubscriptionData.subscriptionEnd,
          },
        } // Update fields
      );
      res.redirect("https://dish-discovery-react-app.netlify.app/userinfo");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  SubscriptionController,
  Trans_Subcription_Success_Controller,
};
