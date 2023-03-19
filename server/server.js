require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express(); // express server
const mongoose = require("mongoose");
const City = require("./models/city.js"); // City Schema
const Restaurant = require("./models/restaurant"); // Restaurant Schema

const PORT = 9000;

// connect to db
// mongoose.connect(process.env.DATABASE_URL).then(e => 'Connected').catch(err => console.error(err));
try {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected");
} catch (err) {
  console.log(err);
}

// express server
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.get("/cities", async (req, res) => res.json(await City.find()));
app.post("/cities", submitCity);
app.get("/restaurants", async (req, res) => res.json(await Restaurant.find()));
app.get("/restaurants/:id", getRestaurantType);
app.post("/restaurants", submitRestaurant);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// Submit New City
async function submitCity(req, res) {
  try {
    const entry = new City(req.body);
    await entry.save().then(() => res.send("City Submitted"));
  } catch (err) {
    console.error(err);
  }
}

// Submit New Restaurant
async function submitRestaurant(req, res) {
  try {
    const entry = new Restaurant(req.body);
    await entry.save().then(() => res.send("Restaurant Submitted"));
  } catch (err) {
    console.error(err);
  }
}

// Get all of one restaurant data
async function getRestaurantType(req, res) {
  try {
    const getRestaurant = await Restaurant.find({
      cuisine: `${req.params.id}`,
    });
    res.send(getRestaurant);
  } catch (err) {
    console.log(err.message);
  }
}
