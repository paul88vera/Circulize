require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, (err) =>
  console.log(err)
);

app.listen(4444, () => console.log(`connected at 4444`));

// const User = require("./models/user");
const City = require("./models/city");
const Restaurant = require("./models/restaurant");

// ONE user

// ALL Cities
// getCities();
async function getCities() {
  try {
    const getMyCity = await City.find();
    console.log(getMyCity);
  } catch (err) {
    console.log(err.message);
  }
}

// ONE City's Restaurants
getCity("San Antonio");
async function getCity(city) {
  try {
    const getMyCity = await City.find({ city: `${city}` });
    console.log(getMyCity);
  } catch (err) {
    console.log(err.message);
  }
}

// ALL Restaurants in City
// getRestaurant();
async function getRestaurant() {
  try {
    const getOneRestaurant = await Restaurant.find();
    console.log(getOneRestaurant);
  } catch (err) {
    console.log(err.message);
  }
}
