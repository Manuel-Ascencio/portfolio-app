import React from 'react';
import styled from 'styled-components';
import { AnimatedPage, Footer } from '../Components';
import linkedin from '../images/icons/linkedin.svg';
import github from '../images/icons/github.svg';

const Home = () => {
  return (
    <HomeStyled>
      <AnimatedPage>
        <div className="presentation">
          <h3>Hi, my name is</h3>
          <h2>Jesus Manuel.</h2>
          <p>I build things for the web.</p>
          <div>
            <p>
              I'm a web developer, passionate about technology and programming.
            </p>
          </div>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/jesus-manuel-ascencio-perez-700373227/"
              target="_blank"
            >
              Linked
              <img src={linkedin} width="20px" />
            </a>
            <a href="https://github.com/Manuelipsu" target="_blanck">
              <img src={github} width="21px" />
              GitHub
            </a>
          </div>
        </div>
        <Footer></Footer>
      </AnimatedPage>
    </HomeStyled>
  );
};

const HomeStyled = styled.section`
  width: 100%;
  overflow: hidden;
  .presentation {
    padding: 90px 25px 0 25px;
    min-height: 80vh;
    h3 {
      color: var(--dodger-blue);
      font-family: 'Roboto Mono', monospace;
    }
    h2 {
      font-size: 1.8rem;
      color: var(--light-white);
      font-weight: bold;
      // font-family: "Roboto Mono", monospace;
      letter-spacing: 0.2rem;
    }
    p {
      margin-top: 20px;
      color: var(--cyan-blue);
      font-size: 1.8rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      line-height: 1.8rem;
    }
    div p {
      font-size: 1rem;
      line-height: 1.2rem;
      font-weight: normal;
    }
    .social-media {
      display: flex;
      margin-top: 20px;
      a {
        display: flex;
        margin-right: 20px;
        color: var(--light-white);
        border-bottom: 1px solid var(--dodger-blue);
        img {
          margin: 0 3px;
        }
      }
    }
  }
`;
export default Home;
