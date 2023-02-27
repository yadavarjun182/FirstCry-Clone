const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    title: String,
    thumbnail: String,
    Cart_quantity: Number,
    mrp: Number,
    discount: Number,
    user: String
})

const CartModel = mongoose.model('cart', cartSchema)

module.exports = { CartModel }