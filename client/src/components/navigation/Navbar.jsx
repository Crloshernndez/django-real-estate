import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Real Estate
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/options">
                    Options
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/properties">
                    Properties
                  </NavLink>
                </li>
                {guestLinks}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
