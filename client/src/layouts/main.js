import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Home from "../pages/home";
import Browse from "../pages/browse";
import Login from "../pages/login";
import Signup from "../pages/signup";
import AddRestaurant from "../pages/createRestaurant";
import Splash from "../pages/splash";
import Error from "../pages/error";
import RestaurantPage from "../props/selection";

export default function Layout() {
  const [selectionData, setSelectionData] = useState();

  useEffect(() => {
    const fetchAllRestaurants = async () => {
      fetch("http://localhost:9000/api/restaurants")
        .then((res) => res.json())
        .then((data) => setSelectionData(data));
    };
    fetchAllRestaurants();
  }, []);

  if (selectionData) {
    return (
      <BrowserRouter>
        <div className="h-screen w-screen">
          <Navbar />
          <Banner />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/search" element={<Splash />} />
            <Route path="/add" element={<AddRestaurant />} />
            <Route
              path="SanAntonio/Mexican"
              element={<RestaurantPage title="Mexican" data={selectionData} />}
            />
            <Route
              path="SanAntonio/Seafood"
              element={<RestaurantPage title="Seafood" data={selectionData} />}
            />
            <Route
              path="SanAntonio/Italian"
              element={<RestaurantPage title="Italian" data={selectionData} />}
            />
            <Route
              path="SanAntonio/American"
              element={<RestaurantPage title="American" data={selectionData} />}
            />
            <Route
              path="SanAntonio/Asian"
              element={<RestaurantPage title="Asian" data={selectionData} />}
            />
            <Route
              path="SanAntonio/Barbecue"
              element={<RestaurantPage title="Barbecue" data={selectionData} />}
            />
            <Route path="browse" element={<Browse />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
