import './NavBar.css';
import logo from './../assets/logo-danny.png';

export const NavBar = () => {
    return (
<nav
      className="
        navbar navbar-expand-lg navbar-light"
      id="header-two"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            className="app-logo"
            alt="Logo"
            width="75"
          />
        </a>
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
              <a className="nav-link active" aria-current="page" href="#"
                >Inicio</a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blusas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Camisetas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pantalones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Zapatos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default NavBar;