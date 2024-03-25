const express=require('express');

//import the controller;

const {addorders,getAllOrders}=require('../controllers/orders-controller');
const router=express.Router();
router.post('/addorders',addorders);
router.get('/getallorders',getAllOrders)


module.exports=router;