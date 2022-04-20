import React from "react";
import styled from "styled-components";

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
    color: ${({ theme }) => theme.colors.color1};
    display: inline;
    font-weight: bold;
  }
  @media only screen and (min-width: 650px) {
    h2 {
      font-size: 2.2rem;
    }
  }
`;

export default PageHeader;
