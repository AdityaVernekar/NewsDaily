import React, { Component } from "react";
// import PropTypes from "prop-types";

export class NavBar extends Component {
  //   static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsDaily
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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/">
                    business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    general
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    technology
                  </a>
                </li> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Select Category
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="/">
                      business
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      entertainment
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      general
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      health
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      sports
                    </a>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      science
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">
                      technology
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
