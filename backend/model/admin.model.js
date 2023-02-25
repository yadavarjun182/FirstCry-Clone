const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Hash password before saving
adminSchema.pre('save', async function (next) {
  const admin = this;
  if (admin.isModified('password')) {
    const salt = await bcrypt.genSalt();
    admin.password = await bcrypt.hash(admin.password, salt);
  }
  next();
});

// Check password for login
adminSchema.methods.checkPassword = async function (password) {
  const admin = this;
  return await bcrypt.compare(password, admin.password);
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
