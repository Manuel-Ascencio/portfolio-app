import React from 'react';
import styled from 'styled-components';
import { Navigation } from '.';

const Sidebar = () => {
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.section``;

export default Sidebar;
