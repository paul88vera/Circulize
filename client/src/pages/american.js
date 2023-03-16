// import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

// import Selection from "../props/selection";

const American = () => {
  return (
    <div className="cuisine-gallery">
      <Navbar />
      <Banner />
      <h4 className="cuisine-title">American Food</h4>
    </div>
  );
};

export default American;
// const [selectionData] = useState([
//   {
//     id: 1,
//     img: "https://s3.amazonaws.com/circulate.com/assets/images/american.jpeg",
//     alt: "This is an alt image",
//     city: "San Antonio",
//     cuisine: "American",
//     name: "Chick-fil-a",
//   },
//   {
//     id: 2,
//     img: "https://s3.amazonaws.com/circulate.com/assets/images/american.jpeg",
//     alt: "This is an alt image",
//     city: "San Antonio",
//     cuisine: "American",
//     name: "McDonalds",
//   },
// ]);
