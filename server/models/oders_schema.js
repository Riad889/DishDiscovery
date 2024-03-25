const mongoose = require('mongoose');

// Define a schema for the individual item
const itemSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});

// Define a schema for the overall order
const orderSchema = new mongoose.Schema({
    items: [itemSchema], // Array of items
    totalPrice: {
        type: Number
    }, // Total price of all items in the order
    location: {
        type: String,
        required:true
    },// Location information
    user_name:{
        type:String,
        required:true
    },
    user_email:{
        type:String,
        required:true
    },
    user_transection_id:{
        type:Number,
        required:true
    },
    status: {
        type: String,
        default: 'Pending',
    }
},{ timestamps: true });

// Create a model from the order schema
const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;