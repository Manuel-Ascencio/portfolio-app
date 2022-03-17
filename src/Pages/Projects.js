import React from 'react';
import styled from 'styled-components';
import { AnimatedPage, PageHeader } from '../Components';

const Projects = () => {
  return (
    <ProjectsStyled>
      <AnimatedPage>
        <PageHeader title={'Proyects'} span={'Proyects'} />
      </AnimatedPage>
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.section`
  position: fixed;
  top: 60px;
`;

export default Projects;
