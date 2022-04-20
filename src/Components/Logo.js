import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <LogoStyled>
      <NavLink to="/">
        <h2>JesusManuel</h2>
      </NavLink>
    </LogoStyled>
  );
};

const LogoStyled = styled.div`
  background: ${({ theme }) => theme.colors.background};
  backdrop-filter: blur(10px);
  padding: 25px;
  h2 {
    font-family: "Pacifico", cursive;
    color: ${({ theme }) => theme.colors.color1};
  }
  @media only screen and (min-width: 650px) {
    h2 {
      font-size: 1.3rem;
    }
  }
`;

export default Logo;
