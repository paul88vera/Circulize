import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  function handleChange() {
    console.log("clicked");
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
        <div>
          <Link to="/">
            <i className="fa-solid fa-house burgerMenu"></i> Home
          </Link>
          <Link to="/search">
            <i className="fa-solid fa-magnifying-glass burgerMenu"></i> Search
          </Link>
        </div>
      )}
    </div>
  );
}
