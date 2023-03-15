const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  name: String,
  username: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: String,
  preferredCity: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

userSchema.module.exports = mongoose.model("User", userSchema);
