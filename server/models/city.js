const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city: String,
  state: String,
});

module.exports = mongoose.model("City", citySchema);
