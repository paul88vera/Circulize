import { useState } from "react";
import Restaurant from "../restaurant";

export default function Selection(props) {
  const selection = props.selection;

  const [openModal, setOpenModal] = useState(false);

  const [restaurantData, setRestaurantData] = useState();

  function handleClick(selection) {
    setRestaurantData(selection)
    setOpenModal(true);
  }

  return (
    <section id="cuisine-card-container">
      {selection.map((sel) => (
        <div
          className="cuisine-card"
          key={sel._id}
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(sel)}
        >
          <div className="cuisine-card-img">
            <img src={sel.img} alt={sel.alt} width="100" />
          </div>
          <div className="cuisine-card-text">
            <h4>{sel.city}</h4>
            <p>{sel.cuisine}</p>
            <h3>{sel.name}</h3>
          </div>
        </div>
      ))}

      {openModal && (
        <Restaurant data={restaurantData} closeModal={setOpenModal} />
      )}
    </section>
  );
}
