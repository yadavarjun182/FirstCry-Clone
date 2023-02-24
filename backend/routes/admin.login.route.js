const router = require("express").Router();
const { Admin } = require("../model/admin.model");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { adminRouter } = require("./admin.register.route");

adminRouter.post("/adminlogin", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if(error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        const admin = await Admin.findOne({ email: req.body.email });
        if(!admin) {
            return res.status(401).send({ message: "Invalid Email or password" });
        }
        const validPassword = await bcrypt.compare(
            req.body.password,
            admin.password
        );
        if(!validPassword) {
            return res.status(401).send({ message: "Invalid Email or Password" });
        }
        const token = admin.geneateAuthToken();
        res.status(200).send({ data: token, message: "Logged in Successfully" });
    } catch(error) {
        res.status(500).send({ message: "Inernal Server Error" });
    }
});

// const validate = (data) => {
//     const schema = joi.object({
//         email: Joi.string().email().required().label("Email"),
//         password: Joi.string().required().label("Password"),
//     });
//     return schema.validate(data);
// }

module.exports = { adminRouter };