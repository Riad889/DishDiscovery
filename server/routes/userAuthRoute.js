const express=require('express');
const {addUser,getUserInfo }= require('../controllers/user-auth');
const router=express.Router();

router.post('/adduser',addUser);
router.get('/getUser',getUserInfo)


module.exports=router;