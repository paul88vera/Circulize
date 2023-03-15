const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
  city: String,
  address: String,
  tel: Number,
  website: String,
  bio: String,
  type: String,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
