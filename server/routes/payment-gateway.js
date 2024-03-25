const express = require("express");
const {
  paymentController,
  trans_success_Controller,
} = require("../controllers/payment-gateway-contoller");

const {
  SubscriptionController,
  Trans_Subcription_Success_Controller,
} = require("../controllers/subscriptionController");

const router = express.Router();

router.post("/order", paymentController);
router.post("/TransectionSuccess", trans_success_Controller);
router.post("/subscription", SubscriptionController);
router.post("/SubscriptionSuccess", Trans_Subcription_Success_Controller);

module.exports = router;
