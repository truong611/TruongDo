const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('users', UserSchema)
