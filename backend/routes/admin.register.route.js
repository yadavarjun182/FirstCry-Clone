const express = require("express")
const { Admin } = require("../model/admin.model")
const adminRouter = express.Router()
const validate = require("validate");
// const toast = require("react-toastify");
// const { hash } = require("bcrypt");

adminRouter.post("/adminregister", async(req, res) => {
    try{
        const { error } = validate(req.body);
        if(error) {
            return res.status(400).send({ message: error.details[0].message});
        }

        const admin = await Admin.findOne({ email: req.body.email });
        if(admin) {
            return res.status(404).send({ message: "Email already exist..!!!" })
        }
        const hashPassword = await bcrypt.hash(req.body.password);

        await new Admin({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "Admin Created Successfully" });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error"})
    }
})


module.exports = { 
    adminRouter
}