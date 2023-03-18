const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  city: String,
  state: String,
}, { versionKey: false });

module.exports = mongoose.model("City", citySchema);
