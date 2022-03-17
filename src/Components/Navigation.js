import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import picture from '../images/picture.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseUser,
  faUser,
  faFolderOpen,
  faComments
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="picture-container">
        {/* <img src={picture} alt=""/> */}
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" className="active">
            <FontAwesomeIcon icon={faHouseUser} />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="active">
            <FontAwesomeIcon icon={faUser} />
            <span>About</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className="active">
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

  .nav-items {
    display: flex;
    justify-content: space-around;
    a {
      svg {
        width: 100%;
        margin: auto;
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
