import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Kasa" />
      </div>

      <div className="menu">
        <span>
          <Link to="/">Accueil</Link>
        </span>
        <span>
          <Link to="/apropos">A propos</Link>
        </span>
      </div>
    </header>
  );
}

export default Header;
