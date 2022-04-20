import React from "react";
import { Logo, Button, Navigation } from "./Components";
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
          <MainHeader>
            <Container>
              <Logo />
              <Navigation />
              <Button theme={theme} handleClick={toggleTheme} />
            </Container>
          </MainHeader>
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

const MainHeader = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width: 650px) {
    max-width: 950px;
    margin: auto;
    padding: 10px 0;
  }
`;
export default App;
