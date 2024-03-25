const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      require: true,
    },
    user_email: {
      type: String,
      require: true,
    },
    user_pic: {
      type: String,
      default:
        "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png",
    },
    previous_order: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Order",
      },
    ],
    subscription: {
      type: Boolean,
      default: false,
    },
    subscriptionStartDate: {
      type: Date,
    },
    subscriptionEndDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("User", userSchema);

module.exports = Users;
