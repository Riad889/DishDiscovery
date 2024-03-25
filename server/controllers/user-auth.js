const Users = require('../models/users_Schema');

const addUser = async (req, res) => {
    const { user_name, user_email, user_pic } = req.body;
    console.log(user_name)
    if (!user_name || !user_email) {
        return res.sendStatus(400);
    }

    else {


        const result = await Users.findOne({ user_email: user_email });
        if (result) {
            return res.status(200).json({ message: "User Login Successfull"});
        }
        else {
            try {
                const data = await Users.create({
                    user_name: user_name,
                    user_email: user_email,
                    user_pic: user_pic,
                })
                if (data) {
                    return res.status(200).json({ message: "user is created successfully" });
                }
            } catch (error) {
                console.log(error.message);
            }
        }

    }
}
const getUserInfo=async(req,res)=>{
        const {user_email}=req.query;
        try {
            const result=await Users.findOne({user_email:user_email});
            // console.log("userInfo : ",result);
            return res.status(201).json({data:result});
        } catch (error) {
            console.log(error);
        }
}

module.exports = {addUser,getUserInfo};