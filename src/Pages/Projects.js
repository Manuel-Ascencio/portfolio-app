import React from "react";
import styled from "styled-components";
import { AnimatedPage, PageHeader } from "../Components";
import TodoList from "../images/img-app-todo.png";
import githb from "../images/icons/githb.svg";
import external from "../images/icons/external_link.svg";

const Projects = () => {
  return (
    <ProjectsStyled>
      <AnimatedPage>
        <PageHeader title={"Projects"} />
        <div className="projects">
          <div className="project">
            <img src={TodoList} alt="" />
            <div>
              <h3>Todo-List</h3>
              <p>
                A to-do list app built with React Js and Styled Components.
                Connected to a database deployed on heroku.
              </p>
              <div>
                <a
                  href="https://github.com/Manuel-Ascencio/CRUD-Tasks-React"
                  target="_blank"
                >
                  <img src={githb} alt="" />
                </a>
                <a href="https://crud-tasks-list.netlify.app/" target="_blank">
                  <img src={external} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedPage>
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.section`
  width: 100%;
  padding: 10px 25px 0 25px;
  .projects {
    margin-top: 30px;
    border-radius: 10px;
    .project {
      display: flex;
      align-items: center;
      img {
        width: 60%;
      }
      div {
        background-color: ${({ theme }) => theme.colors.background};
        h3 {
          text-align: end;
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: ${({ theme }) => theme.colors.color3};
        }
        p {
          text-align: end;
          line-height: 1.1rem;
          color: ${({ theme }) => theme.colors.color2};
          display: block;
          border-radius: 10px;
        }
        div {
          text-align: end;
          margin-top: 15px;
          a {
            font-size: 1.3rem;
            img {
              width: 25px;
              margin-left: 15px;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 650px) {
    padding: 40px 25px 0 25px;
    max-width: 950px;
    margin: auto;
  }
`;

export default Projects;
