const { BreakFast, Launch, Snack, Dinner } = require("../models/food-schema");

const HighToLowB = async (req, res) => {
  try {
    const response = await BreakFast.find().sort({ food_price: -1 });
    return res.status(200).json({ data: response });
  } catch (error) {
    console.log(error.message);
  }
};
const LowToHighB = async (req, res) => {
  try {
    const response = await BreakFast.find().sort({ food_price: 1 });
    return res.status(200).json({ data: response });
  } catch (error) {
    console.log(error.message);
  }
};
const HighToLowL = async (req, res) => {
  try {
    const response = await Launch.find().sort({ food_price: -1 });
    return res.status(200).json({ data: response });
  } catch (error) {
    console.log(error.message);
  }
};
const LowToHighL = async (req, res) => {
  try {
    const response = await Launch.find().sort({ food_price: 1 });
    return res.status(200).json({ data: response });
  } catch (error) {
    console.log(error.message);
  }
};
const HighToLowS = async (req, res) => {
  try {
    const response = await Snack.find().sort({ food_price: -1 });
    return res.status(200).json({ data: response });
  } catch (error) {
    console.log(error.message);
  }
};
const LowToHighS = async (req, res) => {
  try {
    const response = await Snack.find().sort({ food_price: 1 });
    return res.status(200).json({ data: response });
  } catch (error) {
    console.log(error.message);
  }
};

const HighToLowD = async (req, res) => {
  try {
    const response = await Dinner.find().sort({ food_price: -1 });
    return res.status(200).json({ data: response });
  } catch (error) {
    console.log(error.message);
  }
};
const LowToHighD = async (req, res) => {
  try {
    const response = await Dinner.find().sort({ food_price: 1 });
    return res.status(200).json({ data: response });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  HighToLowB,
  LowToHighB,
  HighToLowL,
  LowToHighL,
  HighToLowS,
  LowToHighS,
  HighToLowD,
  LowToHighD,
};
