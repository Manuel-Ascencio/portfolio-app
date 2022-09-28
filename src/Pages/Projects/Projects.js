import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PageHeader } from "../../Components";
import { AnimatedPage } from "../../animations/AnimatedPage";
import {
  ProjectsContainer,
  MainContainer,
  Items,
  Item,
  Image,
  Info,
  Name,
  Description,
  Links,
  Link,
} from "./ProjectsStyles";
import projects from "../../projects.json";

const Projects = () => {
  return (
    <ProjectsContainer>
      <AnimatedPage>
        <MainContainer>
          <PageHeader title={"Projects"} />
          <Items>
            {projects.map((element, index) => (
              <Item key={index}>
                <Image ruta={element.image} />
                <Info index={index}>
                  <Name>{element.name}</Name>
                  <Description index={index}>{element.description}</Description>
                  <Links>
                    <Link
                      index={index}
                      href={element.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      See Project
                    </Link>
                    <Link
                      index={index}
                      href={element.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      See Code
                    </Link>
                  </Links>
                </Info>
              </Item>
            ))}
          </Items>
        </MainContainer>
      </AnimatedPage>
    </ProjectsContainer>
  );
};

export default Projects;
