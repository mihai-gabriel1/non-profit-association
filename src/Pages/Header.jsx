// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <div>
    <div className="header">
      <nav className="navbar navbar-dark navbar-expand-md bg-dark">
        <div className="container">
          <Link to="/" className="router-link">
            <p>Asociația Islaz 21</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <Link to="/" className="router-link">
                <p>Acasǎ</p>
              </Link>
              <Link to="/aboutus" className="router-link">
                <p>Despre noi</p>
              </Link>
              <Link to="/projects" className="router-link">
                <p>Proiectele noastre</p>
              </Link>
              <Link to="/donate" className="router-link">
                <p>Proiect de viitor</p>
              </Link>
              <Link to="/donate" className="router-link">
                <p>Doneazǎ</p>
              </Link>
              <Link to="/joinus" className="router-link">
                <p>Vino cu noi</p>
              </Link>
              <Link to="#footer" className="router-link">
                <p>Contact</p>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="header-title">
        <p className="give-hand">Întinde o mânā</p>
        <p className="better-world">Pentru o lume mai bunā</p>
      </div>
      <div className="header-buttons">
        <Link to="/aboutus" className="router-link">
          <p className="find-more">Afla mai multe</p>
        </Link>
        <Link to="/projects" className="router-link">
          <p className="see-causes">Cauzele noastre</p>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Header;
