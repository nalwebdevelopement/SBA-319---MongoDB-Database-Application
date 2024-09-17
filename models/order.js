const { Decimal128 } = require("bson")
const mongoose = require("mongoose")

const orderschema = new mongoose.Schema({

    productno : String,
    productname : String,
    quantity: Number,
    orderdate : Date,
    price : Decimal128
})

const Order = mongoose.model("order",orderschema)

module.exports = Order