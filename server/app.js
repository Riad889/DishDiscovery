const express=require('express');
const app=express();
const router=require('./routes/food');
const cors=require('cors');
const router2 = require('./routes/sortedFood');
const userAuthRouter=require('./routes/userAuthRoute');
const orderRoutes=require('./routes/orders_route');
const paymentgatewayRoute=require('./routes/payment-gateway');



// by using cors frontend will be access to backend

app.use(cors());
require("dotenv").config();
app.get('/',(req,res)=>{
    res.send('Hi');
})
// acknowledge the app to use json

app.use(express.json());

// acknowledge the app use router

app.use(router);
app.use(router2);
app.use(userAuthRouter);
app.use(orderRoutes);
app.use(paymentgatewayRoute);



// database connection

require('../server/DB_Connection/connection');

const Port=process.env.PORT;

app.listen(Port,()=>{
    console.log(`Listening to ${Port}`);
})