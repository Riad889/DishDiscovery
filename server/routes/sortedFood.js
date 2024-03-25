const express = require("express");
const router2 = express.Router();
const {
  HighToLowB,
  LowToHighB,
  HighToLowL,
  LowToHighL,
  HighToLowS,
  LowToHighS,
  HighToLowD,
  LowToHighD,
} = require("../controllers/get-sorted-food");

router2.get("/breakfast/highTolow", HighToLowB);
router2.get("/breakfast/lowTohigh", LowToHighB);

router2.get("/launch/highTolow", HighToLowL);
router2.get("/launch/lowTohigh", LowToHighL);

router2.get("/snacks/highTolow", HighToLowS);
router2.get("/snacks/lowTohigh", LowToHighS);

router2.get("/dinner/highTolow", HighToLowD);
router2.get("/dinner/lowTohigh", LowToHighD);

module.exports = router2;
