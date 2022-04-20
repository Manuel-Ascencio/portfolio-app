import React from "react";
import styled from "styled-components";
import { AnimatedPage, PageHeader } from "../Components";
// import TodoList from "../images/Todo-List.png";
// import TodoList from "../images/Todo.png";
import TodoList from "../images/Todo-image.png";
// import TodoList from "../images/Todo-List.svg";

const Projects = () => {
  return (
    <ProjectsStyled>
      <AnimatedPage>
        <PageHeader title={"Projects"} />
        <div className="projects">
          <div>
            <div className="project">
              <img src={TodoList} alt="" />
            </div>
          </div>
        </div>
      </AnimatedPage>
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.section`
  width: 100%;
  margin-top: 30px;
  .projects {
    div {
      .project {
        border-radius: 10px;
        img {
          width: 60%;
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
