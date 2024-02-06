// eslint-disable-next-line no-unused-vars
import React from "react";

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
                <li className="nav-item">
                  <a href="{{ url('/') }}" className="nav-link active">
                    Acasǎ
                  </a>
                </li>
                <li className="nav-item">
                  <a href="{{ route('about') }}" className="nav-link active">
                    Despre noi
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="{{ route('blog.index') }}"
                    className="nav-link active"
                  >
                    Proiectele noastre
                  </a>
                </li>
                <li className="nav-item">
                  <a href="{{ route('projects') }}" className="nav-link active">
                    Proiect de viitor
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/donate" className="nav-link active">
                    Fǎ o donație
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="{{ route('joinus-forms') }}"
                    className="nav-link active"
                  >
                    Vino cu noi
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#footer" className="nav-link active">
                    Contact
                  </a>
                </li>
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
