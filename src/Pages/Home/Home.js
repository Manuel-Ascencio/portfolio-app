import React from "react";
import { GoQuote } from "react-icons/go";

import { AnimatedPage } from "../../animations/AnimatedPage";
import {
  HomeContainer,
  MainContainer,
  Entry,
  Name,
  Title,
  Description,
  Quote,
  Message,
  Author,
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
          <Quote>
            <GoQuote />
            <Message>
              Everything you do with effort and sacrifice, you will get it with
              benefits. Do not give up!.
            </Message>
            <Author>-Abraham Calsin</Author>
          </Quote>
        </MainContainer>
      </AnimatedPage>
    </HomeContainer>
  );
};

export default Home;
