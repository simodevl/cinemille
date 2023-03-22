import { logo } from "../assets";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="Cine Mille Logo" />
        </Link>
        <Link to={"/"}>
          <h1>Cine Mille</h1>
        </Link>
      </div>

      <ul>
        <Link to={"/"}>
          <li>AL CINEMA </li>
        </Link>
        <li>PASS</li>
        <li>BUSINESS</li>
      </ul>
    </nav>
  );
};

export default Navbar;
