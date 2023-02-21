const express = require("express")
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,


})

const UserModel = mongoose.model("user", userSchema)

module.exports = { UserModel }