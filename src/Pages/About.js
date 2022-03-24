import React from "react";
import styled from "styled-components";
import { AnimatedPage, PageHeader, Footer, Title } from "../Components";
import html from "../images/icons/html.svg";
import css from "../images/icons/css.svg";
import JavaScript from "../images/icons/javascript.svg";
import react from "../images/icons/react.svg";
import nodeJS from "../images/icons/nodeJS.svg";
import email from "../images/icons/email.svg";
import linked from "../images/icons/linked.svg";
import githb from "../images/icons/githb.svg";

const About = () => {
  return (
    <AboutStyled>
      <AnimatedPage>
        <PageHeader title={"About Me"} />
        <div className="about-section">
          <div className="about-me">
            <p>
              I'm Jesus Manuel, a self-taught person, I'm very passionate about
              programming and what can be created with it, I have knowledge in
              frontend and backend.
            </p>
          </div>
          <div className="autobiography-container">
            <Title title={"Autobiography"} />
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
                <p>I started studying at Academlo BootCamp.</p>
              </li>
            </ul>
          </div>
          <div className="technologies-container">
            <Title title={"Learned technologies"} />
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
          <div className="contact-container">
            <Title title={"Contact"} />
            <h4>You can contact me by the following means.</h4>
            <div>
              <img src={email} />
              <p>Email: </p>
              <a href="mailto:manuelascencioprz@gmail.com" target="_blank">
                @jesusmanuel
              </a>
            </div>
            <div>
              <img src={linked} />
              <p>LinkedIn: </p>
              <a
                href="https://www.linkedin.com/in/jesus-manuel-ascencio-perez-700373227/"
                target="_blank"
              >
                @jesusmanuel
              </a>
            </div>
            <div>
              <img src={githb} />
              <p>GitHub: </p>
              <a href="https://github.com/Manuel-Ascencio" target="_blank">
                @jesusmanuel
              </a>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </AnimatedPage>
    </AboutStyled>
  );
};

const AboutStyled = styled.section`
  width: 100%;
  padding: 10px 25px 0 25px;
  overflow: hidden;
  .about-me{
    margin: 10px 0 20px 0;
    p{
      // color: var(--cyan-blue);
      color: ${({ theme }) => theme.colors.color2};
      line-height: 1.3rem;
      letter-spacing: .1rem;
    }
  } 
  .autobiography-container{
    ul{
      margin: 10px 0 20px 0;
      li{
        margin-bottom: 10px;
        span{
          color: ${({ theme }) => theme.colors.color3};
        }
        p{
          color: ${({ theme }) => theme.colors.color2};
        }
      }
    }
  }
  .technologies-container{
    ul{
      margin: 10px 0 20px 0;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      li{
        width: 100px;
        margin: 3px;
        p{
          color: ${({ theme }) => theme.colors.color2};
        }
      }
    }
  }
  .contact-container{
    margin-bottom: 50px;
    h4{
      color: ${({ theme }) => theme.colors.color2};
      font-size: 1rem;
      margin: 10px 0 20px 0;
    }
    div{
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img{
        width: 30px;
        margin-right: 5px;
      }
      p{
        color: ${({ theme }) => theme.colors.color1};
        margin-right: 5px;
      }
      a{
        color: ${({ theme }) => theme.colors.color1};
        border-bottom: 1px solid var(--dodger-blue);
        
      }
    }
  }
  .
`;

export default About;
