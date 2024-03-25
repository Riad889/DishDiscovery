const express = require("express");
const {
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
  getDinnerOne
} = require("../controllers/food-controllers");
const router = express.Router();

//add food to breakfast

router.post("/addBreakFast", addBreakFast);

// add food to Launch

router.post("/addLaunch", addLaunch);

//add food to evening Snacks

router.post("/addSnack", addSnack);

// add food to dinner

router.post("/addDinner", addDinner);

//get breakfast

router.get("/breakfast", getBreakFast);

//get Launch

router.get("/launch", getLaunch);

// get evening snack

router.get("/snack", getSnack);

// get dinner

router.get("/dinner", getDinner);

//delete food data

router.delete('/breakfast/:id',deleteBreakfast);
router.delete("/launch/:id", deleteLaunch);
router.delete("/snacks/:id", deleteSnack);
router.delete("/dinner/:id", deleteDinner);

//update food data

router.put('/breakfast/update/:id',updateBreakfast);
router.put("/launch/update/:id", updateLaunch);
router.put("/snacks/update/:id", updateSnack);
router.put("/dinner/update/:id", updateDinner);

//get single collection data

router.get('/breakfast/single/:id',getBreakFastOne);
router.get("/launch/single/:id", getLaunchOne);
router.get("/snacks/single/:id", getSnackOne);
router.get("/dinner/single/:id", getDinnerOne);
module.exports = router;
