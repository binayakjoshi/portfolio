import { NavLink } from "react-router-dom";
import React from "react";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <React.Fragment>
      <ul className="nav-links">
        <li>
          {" "}
          <NavLink to="/" className="nav-logo">
            Binayak Joshi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Me
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};
export default NavLinks;
