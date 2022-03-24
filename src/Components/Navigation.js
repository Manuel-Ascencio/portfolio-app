import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUser,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="picture-container"></div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FontAwesomeIcon icon={faHouseUser} />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>About</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FontAwesomeIcon icon={faFolderOpen} />
            <span>Projects</span>
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>
          © 2022 <span>Jesus Manuel Ascencio.</span> All Rights Reserved.
        </p>
      </footer>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  width: 100%;
  height: auto;
  padding: 10px;
  background: var(--nav-background);
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 100;
  bottom: 0;

  .active {
    border-top: 3px solid ${({ theme }) => theme.colors.color3};
  }

  .nav-items {
    display: flex;
    justify-content: space-around;
    a {
      color: ${({ theme }) => theme.colors.color2};
      svg {
        width: 100%;
        margin: auto;
        color: ${({ theme }) => theme.colors.color2};
      }
    }
    span {
      display: block;
    }
  }
  footer {
    p {
      display: none;
    }
  }
`;

export default Navigation;
