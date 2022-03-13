import React from "react";
import styled from "styled-components";
import { AnimatedPage, PageHeader } from "../Components";
import picture from "../images/picture.png";
import html from "../images/icons/html.svg";
import css from "../images/icons/css.svg";
import JavaScript from "../images/icons/javascript.svg";
import react from "../images/icons/react.svg";
import nodeJS from "../images/icons/nodeJS.svg";

const About = () => {
  return (
    <AboutStyled>
      <AnimatedPage>
        <PageHeader title={"About Me"} span={"About Me"} />
        <div className="about-section">
          <div className="picture-container">
            <img src={picture} className="picture" />
          </div>
          <div className="about-me">
            <h3>
              I'm Jesus Manuel a{" "}
              <span>Frontend Developer based in Mexico!</span>
            </h3>
            <p>
              I am a 21 years old Full-stack Web Development student with
              knowledge of HTML, CSS, JavaScript React and Node.js, I love to
              pass my time programming, listening music and learning new things.
            </p>
          </div>
          <div className="biography-container">
            <h3 className="biography">Biography</h3>
            <ul>
              <li>
                <span>2000</span>
                <p>Born in Chiapas Mexico.</p>
              </li>
              <li>
                <span>2019</span>
                <p>I finish the High School.</p>
              </li>
              <li>
                <span>2020</span>
                <p>I started in web development.</p>
              </li>
              <li>
                <span>2021</span>
                <p>I started learning at the BootCamp Academy.</p>
              </li>
            </ul>
          </div>
          <div className="technologies-container">
            <h3 className="skills">Technologies</h3>
            <ul className="technologies">
              <li>
                <img src={html} width="40px" />
                <p>HTML</p>
              </li>
              <li>
                <img src={css} width="40px" />
                <p>CSS</p>
              </li>
              <li>
                <img src={JavaScript} width="40px" />
                <p>JavaScript</p>
              </li>
              <li>
                <img src={react} width="40px" />
                <p>React</p>
              </li>
              <li>
                <img src={nodeJS} width="40px" />
                <p>Node.js</p>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedPage>
    </AboutStyled>
  );
};

const AboutStyled = styled.section`
  width: 100%;
  overflow: hidden;
  // min-height: auto;
  // position: fixed;
  // margin-top: 60px;
  .
`;

export default About;
