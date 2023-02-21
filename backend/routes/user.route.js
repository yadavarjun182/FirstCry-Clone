const express = require("express")
const { UserModel } = require("../model/user.model")
const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    res.send("all users")
})


module.exports = {
    userRouter
}
