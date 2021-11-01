import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = () => {
  //   static propTypes = {};

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsDaily
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select Category
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className="dropdown-item"
                    to="/"
                    style={{ color: "blue" }}
                  >
                    General
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item "
                    to="/business"
                    style={{ color: "black" }}
                  >
                    Business
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/entertainment"
                    style={{ color: "green" }}
                  >
                    Entertainment
                  </Link>

                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/health"
                    style={{ color: "red" }}
                  >
                    Health
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/sports"
                    style={{ color: "maroon" }}
                  >
                    Sports
                  </Link>
                  <div className="dropdown-divider"></div>

                  <Link
                    className="dropdown-item"
                    to="/science"
                    style={{ color: "indigo" }}
                  >
                    Science
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    to="/technology"
                    style={{ color: "magenta" }}
                  >
                    Technology
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
