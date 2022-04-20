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
  padding: 25px;
  background: ${({ theme }) => theme.colors.background};
  border: none;
  svg {
    cursor: pointer;
    font-size: 25px;
    color: ${({ theme }) => theme.colors.color3};
    border-radius: 5px;
    border: 1px solid var(--dodger-blue);
    padding: 5px;
  }
  @media only screen and (min-width: 650px) {
    svg {
      font-size: 1.5rem;
    }
  }
`;

export default Button;
