import React from "react";
import { NavLink } from "react-router-dom";

import { LogoContainer, LogoContent } from "./LogoStyles";

const Logo = () => {
  let position = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <LogoContainer onClick={position}>
      <NavLink to="/">
        <LogoContent>JesusManuel</LogoContent>
      </NavLink>
    </LogoContainer>
  );
};

export default Logo;
