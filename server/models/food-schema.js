const mongoose=require('mongoose');

// creating schema for food;

const foodSchema= new mongoose.Schema({
    food_name:{
        type:String,
        
    },
    food_code:{
        type:String,
        unique:true
    },
    food_price:{
        type:Number
    },
    food_popularity:{
        type:Boolean
    },
    food_catagory:{
        type:String,
    },
    food_image_url:{
        type:String
    },
    food_description:{
        type:String
    },
    food_upload_date:{
        type:Date,
        default:Date.now
    }

})

const BreakFast=mongoose.model('breakfast',foodSchema);
const Launch=mongoose.model('launch',foodSchema);
const Snack=mongoose.model('snack',foodSchema);
const Dinner=mongoose.model('dinner',foodSchema);

module.exports={BreakFast,Launch,Snack,Dinner};