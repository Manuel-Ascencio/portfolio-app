import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Button = ({ theme, handleClick }) => {
  return (
    <StyledButton onClick={handleClick}>
      <FontAwesomeIcon icon={theme === "default" ? faMoon : faSun} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  z-index: 200;
  position: absolute;
  top: 0;
  right: 0;
  padding: 25px;
  background: ${({ theme }) => theme.colors.background};
  border: none;
  svg {
    cursor: pointer;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.color3};
    border-radius: 5px;
    border: 1px solid var(--dodger-blue);
    padding: 5px;
  }
`;

export default Button;
