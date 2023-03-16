import React, { useState, useEffect } from "react";

import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

import Selection from '../props/selection';


const Mexican = () => {
  const [selectionData, setSelectionData] = useState()
  useEffect(() => {
    const fetchRestaurants = async () => {
      fetch('http://localhost:4444/restaurants').then(res => res.json()).then(data => setSelectionData(data))
    }
    fetchRestaurants()
  }, [])

  if (selectionData) {
    return (
      <div className="cuisine-gallery">
        <Navbar />
        <Banner />
        <h4 className="cuisine-title">Mexican Food</h4>
        <Selection
          selection={selectionData}
        />
      </div>
    );
  }
};

export default Mexican;
