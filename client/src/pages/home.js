import React from "react";
import Banner from "../components/Banner";
import Cuisine from "../components/Cuisine";

export default function Home() {
  return (
    <div id="home">
      <Banner />
      <section id="cuisine-choices" style={{ textAlign: "center" }}>
        <h4>What are you looking for?</h4>
        <br />
        <br />
        <Cuisine />
      </section>
    </div>
  );
}
