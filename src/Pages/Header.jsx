// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <nav className="navbar navbar-dark navbar-expand-md bg-dark">
          <div className="container">
            <a href="{{ url('/') }}" className="navbar-brand">
              <i className="fas fa-blog"></i> &nbsp; Asociația Islaz 21
            </a>

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
                <Link to="/donate" className="router-link">
                  <p>Acasǎ</p>
                </Link>
                <Link to="/donate" className="router-link">
                  <p>Despre noi</p>
                </Link>
                <Link to="/donate" className="router-link">
                  <p>Proiectele noastre</p>
                </Link>
                <Link to="/donate" className="router-link">
                  <p>Proiect de viitor</p>
                </Link>
                <Link to="/donate" className="router-link">
                  <p>Doneazǎ</p>
                </Link>
                <Link to="/donate" className="router-link">
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
          <a href="{{ route('about') }}" className="find-more">
            Aflā mai multe
          </a>
          <a href="{{ route('projects') }}" className="see-causes">
            Cauzele noastre
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
