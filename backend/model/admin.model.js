const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobileNumber: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

// adminSchema.methods.generateAuthToken = function() {
//     const token = jwt.sign({ _id: this._id },)
// }

const Admin = mongoose.model("admin", adminSchema);

module.exports = { Admin };