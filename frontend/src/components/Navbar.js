import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <NavLink to="/" exact activeClassName="active">
          <img src='joystick.svg'></img>
        </NavLink>
      </li>
      <li>
        <NavLink to="/leaderboard" activeClassName="active">
          <img src='leaderboard.svg'></img>
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" activeClassName="active">
          <img src="notifications.svg"></img>
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard" activeClassName="active">
          <img src='face.svg'></img>
        </NavLink>
      </li>

    </ul>
  </nav>
);

export default Navbar;
