import React from "react";
import { NavLink } from "react-router-dom";
import { FaHouseUser, FaUser, FaFolder } from "react-icons/fa";

import { NavigationContainer, NavItems, Item } from "./NavigationStyles";

const Navigation = () => {
  let position = () =>
    window.scrollTo({
      top: 0,
    });

  return (
    <NavigationContainer>
      <NavItems>
        <Item onClick={position}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHouseUser />
            <span>Home</span>
          </NavLink>
        </Item>
        <Item onClick={position}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUser />
            <span>About</span>
          </NavLink>
        </Item>
        <Item onClick={position}>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaFolder />
            <span>Projects</span>
          </NavLink>
        </Item>
      </NavItems>
    </NavigationContainer>
  );
};

export default Navigation;
