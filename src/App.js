import React from "react";
import { NavMenu } from "./Components";
import { Logo, Button } from "./Components";
import styled from "styled-components";
import { Home, About, Projects } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ChangeTheme from "./Components/hooks/ChangeTheme";

const themes = {
  default: {
    colors: {
      background: "#0a192f",
      color1: "#ccd6f6",
      color2: "#92abcf",
      color3: "#00BFFF",
    },
  },
  lightTheme: {
    colors: {
      background: "#f6f6f6",
      color1: "#00475F",
      color2: "#232a34",
      color3: "#00475F",
    },
  },
};

function App() {
  const [theme, toggleTheme] = ChangeTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[theme]}>
        <div className="App">
          <Logo />
          <Button theme={theme} handleClick={toggleTheme} />
          <NavMenu />
          <MainContainerStyled>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
            </Routes>
          </MainContainerStyled>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const MainContainerStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;
export default App;
