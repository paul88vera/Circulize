import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/" ><i className="fa-solid fa-circle-chevron-left"></i></Link>
      <Link to="/search"><i className="fa-brands fa-gg-circle"></i></Link>
      <div id="burger">
        <Link to="/"><i className="fa-solid fa-bars"></i></Link>
      </div>
    </div>
  )
}