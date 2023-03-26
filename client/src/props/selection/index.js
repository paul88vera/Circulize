import { useState } from "react";
import Restaurant from "../restaurant";

export default function Selection(props) {
  const [openModal, setOpenModal] = useState(false);

  const [restaurantData, setRestaurantData] = useState();

  function handleClick(selection) {
    setRestaurantData(selection);
    setOpenModal(true);
  }

  return (
    <div className="cuisine-gallery">
      <h4 className="cuisine-title">{props.title}</h4>
      <section id="cuisine-card-container">
        {openModal && (
          <Restaurant data={restaurantData} closeModal={setOpenModal} />
        )}
        {props.data.map((sel) => (
          <div
            className="cuisine-card"
            key={sel._id}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(sel)}
          >
            <div className="cuisine-card-img">
              <img src={sel.image} alt={sel.imgAlt} width="137" />
            </div>
            <div className="cuisine-card-text">
              <h3>{sel.name}</h3>
              <h4>{sel.address.city}</h4>
              <p>{sel.type}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
