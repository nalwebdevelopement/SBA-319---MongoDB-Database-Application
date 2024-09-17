const express = require('express')
const router = express.Router();

// const connectToDb = require('../config/connectToDb');
// connectToDb();
const  Order = require("../models/order")

router.get("/", async (req,res) =>
    {
        const orders = await Order.find();
        console.log("showing all the data from dtabase")
        res.json({orders : orders})
    })

router.get("/:id" ,async( req,res) =>{
        const orderid = req.params.id
        const thisorderid = await Order.findById(orderid)
        res.json({orders: thisorderid});
    })
    
router.post("/", async(req,res) =>
    {
        const{productno,productname,quantity,orderdate,price } = req.body;
        const orders = await Order.create({
    
             productno : productno,
             productname : productname,
             quantity: quantity,
             orderdate : orderdate,
             price : price
        })  
    
        console.log("Added data into the dtabase")
        res.json({orders : orders})
    })

router.put("/:id", async (req, res) => {

    const orderid = req.params.id
    const{productno,productname,quantity,orderdate,price } = req.body;
        const orders = await Order.findByIdAndUpdate(orderid,{
            productno : productno,
            productname : productname,
            quantity: quantity,
            orderdate : orderdate,
            price : price
    
           
        })
    
        const updatedOrder = await Order.findById(orderid)
        res.json({orders: updatedOrder})
        console.log("Successfully updated")
        res.json({orders : orders})
      });
    
    
router.delete("/:id", async (req, res) => {
        const bikeId = req.params.bikeid
        await Order.deleteOne({
          id: bikeId
        })
        res.json({success: "Its Deleted"})
      });

module.exports = router