import React from "react";
import styled from "styled-components";
import { AnimatedPage } from "../Components";

const Home = () => {
  return (
    <HomeStyled>
      <AnimatedPage>
        <div className="presentation">
          <h3>Hi, my name is</h3>
          <h2>Jesus Manuel.</h2>
          <p>I build things for the web.</p>
        </div>
      </AnimatedPage>
    </HomeStyled>
  );
};

const HomeStyled = styled.section`
  width: 100%;
  overflow: hidden;
  .presentation {
    padding: 80px 25px 0 25px;
    h3 {
      color: var(--dodger-blue);
      font-family: "Roboto Mono", monospace;
    }
    h2 {
      font-size: 1.8rem;
      color: var(--light-white);
      font-family: "Roboto Mono", monospace;
      letter-spacing: 0.2rem;
    }
  }
`;
export default Home;
