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
app.post("/cities", submitCity)
app.get("/restaurants", async (req, res) => res.json(await Restaurant.find()))
app.post("/restaurants", submitRestaurant)
app.get("/restaurants/:id", getRestaurantType)

app.listen(4444, () => console.log(`listening on port 4444`));

// Submit New City
async function submitCity(req, res) {
  try {
    const entry = new City(req.body)
    await entry.save().then(() => res.send('City Submitted'))
  } catch (err) {
    console.error(err)
  }
}

// Submit New Restaurant
async function submitRestaurant(req, res) {
  try {
    const entry = new Restaurant(req.body)
    await entry.save().then(() => res.send('Restaurant Submitted'))
  } catch (err) {
    console.error(err)
  }
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

async function getRestaurantType(req, res) {
  try {
    const getRestaurant = await Restaurant.find({ cuisine: `${req.params.id}` });
    res.send(getRestaurant)
  } catch (err) {
    console.log(err.message);
  }
}