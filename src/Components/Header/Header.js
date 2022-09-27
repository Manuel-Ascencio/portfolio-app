import React, { useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { MainHeader, Container } from "./HeaderStyles";

const Header = ({ theme, toggleTheme }) => {
  const [position, setPosition] = useState("0");

  let default_location = window.scrollY;

  window.onscroll = function () {
    let displacement = window.scrollY;
    if (default_location >= displacement) {
      setPosition("0");
    } else {
      setPosition("-100px");
    }

    default_location = displacement;
  };

  return (
    <MainHeader position={position}>
      <Container>
        <Logo />
        <Navigation />
        <Button theme={theme} handleClick={toggleTheme} />
      </Container>
    </MainHeader>
  );
};

export default Header;
