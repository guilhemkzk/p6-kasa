import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Kasa" />
        </NavLink>
      </div>

      <div className="menu">
        <span>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
          >
            Accueil
          </NavLink>
        </span>
        <span>
          <NavLink
            to="/apropos"
            className={({ isActive }) =>
              isActive ? "link-active" : "link-inactive"
            }
          >
            A propos
          </NavLink>
        </span>
      </div>
    </header>
  );
}

export default Header;
