import { NavMenu } from "./Components";
import { DarkModeContainer } from "./Components";
import styled from "styled-components";
import { Home, About, Projects, Contact } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DarkModeContainer />
        <NavMenu />
        <MainContainerStyled>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </MainContainerStyled>
      </div>
    </BrowserRouter>
  );
}

const MainContainerStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  background: var(--background-main);
`;
export default App;
