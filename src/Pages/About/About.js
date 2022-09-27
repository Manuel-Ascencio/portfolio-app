import React from "react";

import { PageHeader, Title } from "../../components";
import { AnimatedPage } from "../../animations/AnimatedPage";
import html from "../../images/icons/html.svg";
import css from "../../images/icons/css.svg";
import javascript from "../../images/icons/javascript.svg";
import react from "../../images/icons/react.svg";
import nodeJS from "../../images/icons/nodeJS.svg";
import express from "../../images/icons/express.svg";

import {
  AboutContainer,
  MainContainer,
  AboutMe,
  Description,
  Timeline,
  TimelineItems,
  TimelineItem,
  Dot,
  Date,
  DateData,
  TimelineTitle,
  TimelineDescription,
  Technologies,
  TechCards,
  Card,
  CardTitle,
  CardDescription,
  CardIcons,
  Icon,
} from "./AboutStyles";
const About = () => {
  return (
    <AboutContainer>
      <AnimatedPage>
        <MainContainer>
          <PageHeader title={"About Me"} />
          <AboutMe>
            <Description>
              Hello! I'm Jesus Manuel, a self-taught person, I'm passionate
              about programming and what can be created with it, I have
              knowledge in frontend and backend.
            </Description>
          </AboutMe>
          <Timeline>
            <TimelineItems>
              <TimelineItem>
                <Dot></Dot>
                <Date>May 2000</Date>
                <DateData>
                  <TimelineTitle>Place of birth</TimelineTitle>
                  <TimelineDescription>
                    I was born in Chiapas Mexico.
                  </TimelineDescription>
                </DateData>
              </TimelineItem>
              <TimelineItem>
                <Dot></Dot>
                <Date>July 2019</Date>
                <DateData>
                  <TimelineTitle>Studies</TimelineTitle>
                  <TimelineDescription>
                    I finish the High Scholl.
                  </TimelineDescription>
                </DateData>
              </TimelineItem>
              <TimelineItem>
                <Dot></Dot>
                <Date>January 2021</Date>
                <DateData>
                  <TimelineTitle>Studies</TimelineTitle>
                  <TimelineDescription>
                    I started studying web development in a self-taught way.
                  </TimelineDescription>
                </DateData>
              </TimelineItem>
              <TimelineItem>
                <Dot></Dot>
                <Date>July 2022</Date>
                <DateData>
                  <TimelineTitle>Studies</TimelineTitle>
                  <TimelineDescription>
                    I finished the Full-Stack Web Development studies at the
                    Academlo Bootcamp.
                  </TimelineDescription>
                </DateData>
              </TimelineItem>
            </TimelineItems>
          </Timeline>
          <Technologies>
            <Title title={"Technologies I use"} />
            <TechCards>
              <Card>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>
                  I really like this part, since it is the visual part of every
                  web project. The technologies I use are HTML, CSS, JavaScript
                  and ReactJs.
                </CardDescription>
                <CardIcons>
                  <Icon src={html} loading="lazy" />
                  <Icon src={css} loading="lazy" />
                  <Icon src={javascript} loading="lazy" />
                  <Icon src={react} loading="lazy" />
                </CardIcons>
              </Card>
              <Card>
                <CardTitle>Backend</CardTitle>
                <CardDescription>
                  This part is important in web development, since it helps us
                  access the information that the user requests.The technologies
                  I use are Node.js with Express.js
                </CardDescription>
                <CardIcons>
                  <Icon src={nodeJS} loading="lazy" />
                  <Icon src={express} loading="lazy" />
                </CardIcons>
              </Card>
            </TechCards>
          </Technologies>
        </MainContainer>
      </AnimatedPage>
    </AboutContainer>
  );
};

export default About;
