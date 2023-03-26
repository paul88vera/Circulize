import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function handleChange() {
    setMenu((current) => !current);
  }

  return (
    <div
      id="header"
      className="flex flex-row flex-nowrap rounded-bl-3xl rounded-br-3xl bg-green-900 justify-between  w-full"
    >
      <Link to="/">
        <i className="fa-solid fa-circle-chevron-left"></i>
      </Link>
      <Link to="/search">
        <i className="fa-brands fa-gg-circle"></i>
      </Link>
      <div id="burger" onClick={handleChange}>
        <i className="fa-solid fa-bars"></i>
      </div>
      {menu && (
        <div className="menu-container">
          <div className="menu-close" onClick={handleChange}>
            close X
          </div>
          <Link to="/login" onClick={handleChange} className="burger-menu">
            <i class="fa-solid fa-right-to-bracket"></i> Login
          </Link>
          <Link to="/search" onClick={handleChange} className="burger-menu">
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </Link>
          <Link to="/" onClick={handleChange} className="burger-menu">
            <i className="fa-solid fa-house"></i> Home
          </Link>
          <Link to="/signup" onClick={handleChange} className="burger-menu">
            <i class="fa-solid fa-pen-to-square"></i> Signup
          </Link>
        </div>
      )}
    </div>
  );
}
