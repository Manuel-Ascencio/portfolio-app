import React from 'react';
import styled from 'styled-components';

const PageHeader = ({ title }) => {
  return (
    <PageHeaderStyled>
      <h2>{title}</h2>
    </PageHeaderStyled>
  );
};

const PageHeaderStyled = styled.div`
  h2 {
    font-size: 1.8rem;
    color: var(--light-white);
    border-bottom: 1px solid var(--dodger-blue);
    display: inline;
  }
`;

export default PageHeader;
