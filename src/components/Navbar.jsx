import React, { useState, useRef, useEffect } from "react";
import logo from "../assests/images/newLogo.png";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import CountrySelect from "./CountrySelect";

export default function Navigation() {
  return (
    <header className="nav top-nav">
      <div className="cloudare-logo">
        <a href="/">
          <img src={logo} height="160px" alt="logo" />
        </a>
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu" id="navbar">
        <li className="item">
          <NavLink
            className="link"
            exact
            to="/hire-talent"
            activeClass="active"
          >
            Hire Talents
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/payroll" activeClass="active">
            HR Services
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/solutions" activeClass="active">
            Solutions
          </NavLink>
        </li>
        <li className="item">
          <NavLink className="link" to="/apply" activeClass="active">
            Apply for Jobs
          </NavLink>
        </li>
        <li className="item">
          <a href="https://blogs.cloudare.in/" className="link">
            Blogs
          </a>
        </li>
        <CountrySelect />
      </ul>
    </header>
  );
}
