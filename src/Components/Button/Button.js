import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ButtonContainer } from "./ButtonStyles";

const Button = ({ theme, handleClick }) => {
  return (
    <ButtonContainer onClick={handleClick}>
      {theme === "default" ? <FaMoon /> : <FaSun />}
    </ButtonContainer>
  );
};

export default Button;
