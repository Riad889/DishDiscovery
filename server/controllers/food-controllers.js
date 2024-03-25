const { BreakFast, Launch, Snack, Dinner } = require("../models/food-schema");

const addBreakFast = async (req, res) => {
  const {
    food_name,
    food_code,
    food_price,
    food_popularity,
    food_catagory,
    food_image_url,
    food_description,
  } = req.body;

  if (
    !food_name ||
    !food_code ||
    !food_price ||
    !food_catagory ||
    !food_image_url ||
    !food_description
  ) {
    return res.status(402).json({ message: "please fill up the all field" });
  }

  const existing_food_code = await BreakFast.find({ food_code: food_code });
  if (!existing_food_code)
    return res.status(403).json({ message: "food code already exists" });

  try {
    const food = await BreakFast.create({
      food_name,
      food_code,
      food_price,
      food_popularity,
      food_catagory,
      food_image_url,
      food_description,
    });

    return res
      .status(200)
      .json({ message: "Breakfast Food create successfully ", food });
  } catch (error) {
    const e = error.message.substring(0, 7);

    if (e.match("E11000")) {
      //console.log(e);
      return res
        .status(403)
        .json({ message: "Food code already exists use a new one" });
    }
  }
};
const addLaunch = async (req, res) => {
  const {
    food_name,
    food_code,
    food_price,
    food_popularity,
    food_catagory,
    food_image_url,
    food_description,
  } = req.body;

  if (
    !food_name ||
    !food_code ||
    !food_price ||
    !food_catagory ||
    !food_image_url ||
    !food_description
  ) {
    return res.status(402).json({ message: "please fill up the all field" });
  }
  const food = await Launch.create({
    food_name,
    food_code,
    food_price,
    food_popularity,
    food_catagory,
    food_image_url,
    food_description,
  });

  return res
    .status(200)
    .json({ message: "Launch Food create successfully ", food });
};

const addSnack = async (req, res) => {
  const {
    food_name,
    food_code,
    food_price,
    food_popularity,
    food_catagory,
    food_image_url,
    food_description,
  } = req.body;

  if (
    !food_name ||
    !food_code ||
    !food_price ||
    !food_catagory ||
    !food_image_url ||
    !food_description
  ) {
    return res.status(402).json({ message: "please fill up the all field" });
  }
  const food = await Snack.create({
    food_name,
    food_code,
    food_price,
    food_popularity,
    food_catagory,
    food_image_url,
    food_description,
  });

  return res
    .status(200)
    .json({ message: "Snack Food create successfully ", food });
};

const addDinner = async (req, res) => {
  const {
    food_name,
    food_code,
    food_price,
    food_popularity,
    food_catagory,
    food_image_url,
    food_description,
  } = req.body;

  if (
    !food_name ||
    !food_code ||
    !food_price ||
    !food_catagory ||
    !food_image_url ||
    !food_description
  ) {
    return res.status(402).json({ message: "please fill up the all field" });
  }
  const food = await Dinner.create({
    food_name,
    food_code,
    food_price,
    food_popularity,
    food_catagory,
    food_image_url,
    food_description,
  });

  return res
    .status(200)
    .json({ message: "Dinner Food create successfully ", food });
};

//get breakfast food

const getBreakFast = async (req, res) => {
  try {
    const result = await BreakFast.find();
    if (result) return res.status(200).json({ data: result });
    else return res.status(404).json({ message: "No food item in breakfast" });
  } catch (error) {
    console.log(error);
  }
};
const getLaunch = async (req, res) => {
  try {
    const result = await Launch.find();
    if (result) return res.status(200).json({ data: result });
    else return res.status(404).json({ message: "No food item in Launch" });
  } catch (error) {
    console.log(error);
  }
};

const getSnack = async (req, res) => {
  try {
    const result = await Snack.find();
    if (result) return res.status(200).json({ data: result });
    else return res.status(404).json({ message: "No food item in Snack" });
  } catch (error) {
    console.log(error);
  }
};

const getDinner = async (req, res) => {
  try {
    const result = await Dinner.find();
    if (result) return res.status(200).json({ data: result });
    else return res.status(404).json({ message: "No food item in Dinner" });
  } catch (error) {
    console.log(error);
  }
};

// delete data part

const deleteBreakfast = async (req, res, next) => {
  const id = req.params.id;
  try {
    const breakfast = await BreakFast.findByIdAndRemove(id);
    if (breakfast) {
      res.status(200).json({ message: "Food item is deleted successfully" });
    } else {
      res.status.json({ message: "Food item is unable to delete" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const deleteLaunch = async (req, res, next) => {
  const id = req.params.id;
  try {
    const launch = await Launch.findByIdAndRemove(id);
    if (launch) {
      res.status(200).json({ message: "Food item is deleted successfully" });
    } else {
      res.status.json({ message: "Food item is unable to delete" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const deleteSnack = async (req, res, next) => {
  const id = req.params.id;
  try {
    const snack = await Snack.findByIdAndRemove(id);
    if (snack) {
      res.status(200).json({ message: "Food item is deleted successfully" });
    } else {
      res.status.json({ message: "Food item is unable to delete" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const deleteDinner = async (req, res, next) => {
  const id = req.params.id;
  try {
    const dinner = await Dinner.findByIdAndRemove(id);
    if (dinner) {
      res.status(200).json({ message: "Food item is deleted successfully" });
    } else {
      res.status.json({ message: "Food item is unable to delete" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

// update of food data;

const updateBreakfast = async (req, res) => {
  const id = req.params.id;
  const {
    food_name,
    food_code,
    food_price,
    food_image_url,
    food_description,
    food_popularity,
  } = req.body;
  try {
    const response = await BreakFast.findByIdAndUpdate(id, {
      food_name,
      food_code,
      food_price,
      food_image_url,
      food_description,
      food_popularity,
    });
    if (response) {
      return res.status(200).json({ message: "Food data update successfully" });
    }
  } catch (error) {
    const e = error.message.substring(0, 7);

    if (e.match("E11000")) {
      //console.log(e);
      return res
        .status(403)
        .json({ message: "Food code already exists use a new one" });
    }
  }
};

const updateLaunch = async (req, res) => {
  const id = req.params.id;
  const {
    food_name,
    food_code,
    food_price,
    food_image_url,
    food_description,
    food_popularity,
  } = req.body;
  try {
    const response = await Launch.findByIdAndUpdate(id, {
      food_name,
      food_code,
      food_price,
      food_image_url,
      food_description,
      food_popularity,
    });
    if (response) {
      return res.status(200).json({ message: "Food data update successfully" });
    }
  } catch (error) {
    const e = error.message.substring(0, 7);

    if (e.match("E11000")) {
      //console.log(e);
      return res
        .status(403)
        .json({ message: "Food code already exists use a new one" });
    }
  }
};

const updateSnack = async (req, res) => {
  const id = req.params.id;
  const {
    food_name,
    food_code,
    food_price,
    food_image_url,
    food_description,
    food_popularity,
  } = req.body;
  try {
    const response = await Snack.findByIdAndUpdate(id, {
      food_name,
      food_code,
      food_price,
      food_image_url,
      food_description,
      food_popularity,
    });
    if (response) {
      return res.status(200).json({ message: "Food data update successfully" });
    }
  } catch (error) {
    const e = error.message.substring(0, 7);

    if (e.match("E11000")) {
      //console.log(e);
      return res
        .status(403)
        .json({ message: "Food code already exists use a new one" });
    }
  }
};
const updateDinner = async (req, res) => {
  const id = req.params.id;
  const {
    food_name,
    food_code,
    food_price,
    food_image_url,
    food_description,
    food_popularity,
  } = req.body;
  try {
    const response = await Dinner.findByIdAndUpdate(id, {
      food_name,
      food_code,
      food_price,
      food_image_url,
      food_description,
      food_popularity,
    });
    if (response) {
      return res.status(200).json({ message: "Food data update successfully" });
    }
  } catch (error) {
    const e = error.message.substring(0, 7);

    if (e.match("E11000")) {
      //console.log(e);
      return res
        .status(403)
        .json({ message: "Food code already exists use a new one" });
    }
  }
};

const getBreakFastOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await BreakFast.findById(id);
    if (data) {
      return res.status(201).json({ data: data });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const getLaunchOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Launch.findById(id);

    if (data) {
      return res.status(201).json({ data: data });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const getSnackOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Snack.findById(id);
    if (data) {
      return res.status(201).json({ data: data });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const getDinnerOne = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Dinner.findById(id);
    if (data) {
      return res.status(201).json({ data: data });
    }
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  addBreakFast,
  addLaunch,
  addSnack,
  addDinner,
  getBreakFast,
  getLaunch,
  getSnack,
  getDinner,
  deleteBreakfast,
  deleteDinner,
  deleteLaunch,
  deleteSnack,
  updateBreakfast,
  updateLaunch,
  updateSnack,
  updateDinner,
  getBreakFastOne,
  getLaunchOne,
  getSnackOne,
  getDinnerOne,
};
