import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "activex" : "")}
        >
          <img src="joystick.svg" alt="Home" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/leaderboard"
          className={({ isActive }) => (isActive ? "activex" : "")}
        >
          <img src="leaderboard.svg" alt="Leaderboard" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signin"
          className={({ isActive }) => (isActive ? "activex" : "")}
        >
          <img src="notifications.svg" alt="Notifications" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "activex" : "")}>
          <img src="face.svg" alt="Dashboard" />
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
