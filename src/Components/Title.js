import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return (
    <TitleStyled>
      <h3>{title}</h3>
    </TitleStyled>
  );
};

const TitleStyled = styled.div`
  h3 {
    color: var(--light-white);
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
  }
`;

export default Title;
