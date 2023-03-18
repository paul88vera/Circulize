export default function Restaurant({ data, closeModal }) {

  return (
    <section id="data-container">
      <div id="restaurant-item-modal" key={data.id}>
        <picture id="main-banner">
          <img src={data.img} width="100%" alt={data.imgAlt} />
        </picture>
        <button className="btn" onClick={() => closeModal(false)}>
          X
        </button>
        <div className="restaurant-details">
          <h2>{data.name}</h2>
          <h4>{data.cuisine}</h4>
          <br />
          <p>{data.bio}</p>
        </div>
        <br />
        <div id="social-links">
          <a href={data.tel} className='icon-container'><i className="fa-solid fa-mobile-screen-button"></i><span>Phone</span></a>
          <a href={data.map} className='icon-container'><i className="fa-solid fa-map-location-dot"></i><span>Map</span></a>
          <a href={data.website} className='icon-container'><i className="fa-solid fa-laptop"></i><span>Website</span></a>
        </div>
      </div>
    </section>
  );
}
