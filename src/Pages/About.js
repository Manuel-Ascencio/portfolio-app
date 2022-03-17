import React from 'react';
import styled from 'styled-components';
import { AnimatedPage, PageHeader, Footer, Title } from '../Components';
import picture from '../images/picture.png';
import html from '../images/icons/html.svg';
import css from '../images/icons/css.svg';
import JavaScript from '../images/icons/javascript.svg';
import react from '../images/icons/react.svg';
import nodeJS from '../images/icons/nodeJS.svg';

const About = () => {
  return (
    <AboutStyled>
      <AnimatedPage>
        <PageHeader title={'About Me'} />
        <div className="about-section">
          <div className="about-me">
            <p>
              I'm Jesus Manuel, a self-taught person, I'm very passionate about
              programming and what can be created with it, I have knowledge in
              frontend and backend.
            </p>
          </div>
          <div className="autobiography-container">
            <Title title={'Autobiography'} />
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
            <Title title={'Learned technologies'} />
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
            <Title title={'Contact'} />
            <h4>You can contact me by the following means.</h4>
          </div>
        </div>
        <Footer></Footer>
      </AnimatedPage>
    </AboutStyled>
  );
};

const AboutStyled = styled.section`
  width: 100%;
  padding: 90px 25px 0 25px;
  overflow: hidden;
  .about-me{
    margin: 20px 0 20px 0;
    p{
      color: var(--cyan-blue);
      line-height: 1.3rem;
      letter-spacing: .1rem;
    }
  } 
  .autobiography-container{
    ul{
      margin: 20px 0 20px 0;
      li{
        margin-bottom: 10px;
        span{
          color: var(--dodger-blue);
        }
        p{
          color: var(--cyan-blue);
        }
      }
    }
  }
  .technologies-container{
    ul{
      margin: 20px 0 20px 0;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      li{
        width: 100px;
        margin: 3px;
        p{
          color: var(--cyan-blue);
        }
      }
    }
  }
  .contact-container{
    h4{
      color: var(--cyan-blue);
    }
  }
  .
`;

export default About;
