import "./NavBar.css";
import CardWidget from "./CardWidget";
import logo from "./../assets/logo-danny.png";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav
      className="
        navbar navbar-expand-lg navbar-light"
      id="header-two"
    >
      <div className="container">
        <NavLink className="navbar-brand" to={"/"}>
          <img src={logo} className="app-logo" alt="Logo" width="75" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex main-menu">
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/1">
                Camisetas Pastel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/2">
                Camisetas Fuertes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/3">
                Camisetas Tropicales
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="counter-adding">
          <CardWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
