import React from "react";

import { Home, About, Projects } from "./pages";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes/Themes";
import { ChangeTheme } from "./hooks/ChangeTheme";
import { Main, MainContainerStyled } from "./styles/AppStyles";
import Header from "./components/Header/Header";
import { Footer } from "./components";

function App() {
  const [theme, toggleTheme] = ChangeTheme();

  return (
    <HashRouter>
      <ThemeProvider theme={themes[theme]}>
        <Main>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <MainContainerStyled>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
            </Routes>
          </MainContainerStyled>
          <Footer />
        </Main>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
