import React from "react";

import { AnimatedPage } from "../../animations/AnimatedPage";
import {
  HomeContainer,
  MainContainer,
  Entry,
  Name,
  Title,
  Description,
} from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <AnimatedPage>
        <MainContainer>
          <Entry>&#128075; Hi, my name is</Entry>
          <Name>Jesus Manuel.</Name>
          <Title>I am a Front-end Developer.</Title>
          <>
            <Description>
              I'm a web developer, passionate about technology and programming.
            </Description>
          </>
        </MainContainer>
      </AnimatedPage>
    </HomeContainer>
  );
};

export default Home;
