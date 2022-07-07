import React from "react";
import { NavLink } from "react-router-dom";
import Navclass from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <nav className={Navclass.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/ContactUs">ContactUs</NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs">AboutUs</NavLink>
        </li>
        <li>
          <NavLink to="/EmailUs">EmailUs</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
