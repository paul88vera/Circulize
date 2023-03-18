import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-row flex-nowrap rounded-bl-3xl rounded-br-3xl bg-green-900 justify-between absolute w-full">
      <Link to="/" ><i className="fa-solid fa-circle-chevron-left"></i></Link>
      <Link to="/search"><i className="fa-brands fa-gg-circle"></i></Link>
      <div id="burger">
        <Link to="/"><i className="fa-solid fa-bars"></i></Link>
      </div>
    </div>
  )
}