import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
    return (
      <div className="header">

        <div className="header-title">
          <h1>Simply Test</h1>
        </div>

        <div className="header-page">
          <nav>
            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/automatetests" className="test">
              Automate
            </NavLink>

            <NavLink to="/designtests">
              Design
            </NavLink>

            <NavLink to="/login">
              Login
            </NavLink>

            <NavLink to="/signup">
              Sign Up
            </NavLink>
          </nav>
        </div>
      </div>
    );
}

export default Header;