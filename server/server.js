require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express(); // express server
const mongoose = require("mongoose");
const City = require("./models/city.js"); // City Schema
const Restaurant = require("./models/restaurant"); // Restaurant Schema

// connect to db
// mongoose.connect(process.env.DATABASE_URL).then(e => 'Connected').catch(err => console.error(err));
try {
  mongoose.connect(process.env.LOCAL_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('connected')
} catch (err) {
  console.log(err)
}

// express server
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/cities", async (req, res) => res.json(await City.find()))
app.get("/restaurants", async (req, res) => res.json(await Restaurant.find()))
app.post("/cities", submitCitySmart)

app.listen(4444, () => console.log(`listening on port 4444`));
// Submit New City
async function submitCity(city, state) {
  try {
    const entry = new City({ city: city, state: state })
    await entry.save()
  } catch (err) {
    console.error(err)
  }
}

function submitCitySmart(req, res) {
  submitCity(req.body.city, req.body.state).then(() => {
    res.send({
      'city': req.body.city,
      'state': req.body.state
    });
  })
}

// // ONE user

// // ONE City's Restaurants
// getCity("San Antonio");
// async function getCity(city) {
//   try {
//     const getMyCity = await City.find({ city: `${city}` });
//     console.log(getMyCity);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// ALL Restaurants in City

async function getRestaurant() {
  try {
    const getOneRestaurant = await Restaurant.find();
    console.log(getOneRestaurant);
  } catch (err) {
    console.log(err.message);
  }
}
