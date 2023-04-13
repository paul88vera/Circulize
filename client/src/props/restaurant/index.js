export default function Restaurant({ data, closeModal }) {
  return (
    <section id="data-container">
      <div id="restaurant-item-modal" key={data.id}>
        <picture id="main-banner">
          <img src={data.image} width="100%" alt={data.imgAlt} />
        </picture>
        <div className="restaurant-details">
          <h2>{data.name}</h2>
          <h4>{data.type} cuisine</h4>
          <br />
          <p className="restaurant-para">{data.description}</p>
        </div>
        <br />
        <div id="social-links">
          <a href={`tel:${data.tel}`} className="icon-container">
            <i className="fa-solid fa-mobile-screen-button"></i>
            <span>Phone</span>
          </a>
          <a href={data.map} className="icon-container">
            <i className="fa-solid fa-map-location-dot"></i>
            <span>Map</span>
          </a>
          <a href={data.website} className="icon-container">
            <i className="fa-solid fa-laptop"></i>
            <span>Website</span>
          </a>
        </div>
        <button className="close-btn" onClick={() => closeModal(false)}>
          close
        </button>
      </div>
    </section>
  )
}
