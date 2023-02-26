const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    mrp: { type: Number, required: true },
    discount: { type: Number },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    gender: { type: String },
    quantity: { type: String, required: true },
    rating: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    images: { type: Array },
    specification: { type: String }
})

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };