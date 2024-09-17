const express = require('express')
const app = express()
PORT = process.env.PORT || 3000;
const  Order = require("./models/order")
const dbConn = require("./config/connectToDb");
require("dotenv").config();
app.use(express.json());

const orderRoute = require("./routes/orderrouter")

const connectToDb = require('./config/connectToDb');
connectToDb();

app.get("/", (req,res) =>
{
    console.log("The page is loaded")
    res.send(" Your api is connected")
})

app.use("/order", orderRoute)

// app.get("/orders", async (req,res) =>
// {
//     const orders = await Order.find();
//     console.log("showing all the data from dtabase")
//     res.json({orders : orders})
// })


// app.post("/orders", async(req,res) =>
// {
//     const{productno,productname,quantity,orderdate,price } = req.body;
//     const orders = await Order.create({

//          productno : productno,
//          productname : productname,
//          quantity: quantity,
//          orderdate : orderdate,
//          price : price
//     })

//     console.log("Added data into the dtabase")
//     res.json({orders : orders})
// })
app.listen(PORT, () =>
{
    console.log("server connected")
})