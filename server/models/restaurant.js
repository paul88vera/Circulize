const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  tel: { type: Number, required: true },
  website: { type: String, required: true },
  bio: String,
  type: { type: String, required: true },
  img: String,
  imgAlt: String
}, { versionKey: false });

module.exports = mongoose.model("Restaurant", restaurantSchema);
