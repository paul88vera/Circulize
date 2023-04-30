const mongoose = require("mongoose")
const Schema = mongoose.Schema

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: Number, required: true },
    },
    tel: { type: String, required: true },
    website: { type: String, required: true },
    description: { type: String, required: true },
    cuisine: { type: String, required: true },
    img: { type: String, required: true },
    imgAlt: { type: String, required: true },
    map: { type: String, required: true },
  },
  { versionKey: false }
)

module.exports = mongoose.model("Restaurant", restaurantSchema)
