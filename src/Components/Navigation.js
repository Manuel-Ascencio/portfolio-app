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
  // position: absolute;
  width: 100%;
  height: auto;
  padding: 10px;
  background: var(--nav-background);
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;

  .nav-items {
    li {
      .active {
        svg {
          border-top: 3px solid ${({ theme }) => theme.colors.color3};
          color: ${({ theme }) => theme.colors.color3};
        }
        span {
          color: ${({ theme }) => theme.colors.color3};
        }
      }
    }
  }

  .nav-items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      color: ${({ theme }) => theme.colors.color2};
      svg {
        width: 100%;
        margin: auto;
        padding-top: 5px;
        color: ${({ theme }) => theme.colors.color2};
      }
    }
    span {
      // display: inline-block;
    }
  }
  footer {
    p {
      display: none;
    }
  }
  @media only screen and (min-width: 650px) {
    position: relative;
    .nav-items {
      // width: 300px;
      display: flex;
      justify-content: end;
      a {
        color: ${({ theme }) => theme.colors.color2};
        margin-right: 50px;
        font-weight: bold;
        letter-spacing: 0.2rem;
        svg {
          display: none;
        }
        span {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default Navigation;
