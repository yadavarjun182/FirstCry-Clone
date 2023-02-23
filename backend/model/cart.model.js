const mongoose = require ("mongoose")

const cartSchema = mongoose.Schema({
    title:String,
    img:String,
    price:Number,
    quantity:Number,
    user:String
})

const CartModel = mongoose.model('cart',cartSchema)

module.exports= {CartModel}