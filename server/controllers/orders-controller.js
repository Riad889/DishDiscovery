const Orders = require("../models/oders_schema");
const Users = require("../models/users_Schema");

const addorders = async (req, res) => {
  const orderData = req.body;
  if (orderData) {
    try {
      const newOrder = await Orders.create(orderData);
      return res
        .status(202)
        .json({ message: "Order is created successfully", data: newOrder });
    } catch (error) {
      console.log(error);
    }
  }
};
const getAllOrders = async (req, res) => {
  const { user_email } = req.query;

  if (user_email) {
    try {
      const orderData = await Orders.find({ user_email: user_email }).sort({
        createdAt: -1,
      });

      return res.status(200).json({ data: orderData });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = { addorders, getAllOrders };
