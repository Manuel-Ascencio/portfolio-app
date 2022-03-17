import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeContainer = () => {
  return (
    <DarkModeContainerStyled>
      <NavLink to="/">
        <h2>JesusManuel</h2>
      </NavLink>
      {/* <img src={dark} width="30px" /> */}
      <FontAwesomeIcon icon={faMoon} />
    </DarkModeContainerStyled>
  );
};

const DarkModeContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  background: var(--nav-background);
  backdrop-filter: blur(10px);
  height: auto;
  padding: 15px 25px;
  h2 {
    font-family: 'Pacifico', cursive;
    color: var(--light-white);
  }
  svg {
    font-size: 20px;
    color: var(--dodger-blue);
    border-radius: 5px;
    border: 1px solid var(--dodger-blue);
    padding: 5px;
  }
`;

export default DarkModeContainer;
