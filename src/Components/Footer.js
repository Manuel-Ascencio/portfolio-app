import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyled>
      <p>
        Developed by <span>Jesus Manuel</span>
      </p>
      <p>with React.js</p>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  width: 100%;
  position: relative;
  padding: 0 25px 90px 25px;
  text-align: center;
  p {
    text-align: center;
    color: var(--cyan-blue);
    border-top: 1px solid var(--cyan-blue);
    font-size: 1rem;
    opacity: 0.7;
    span {
      font-weight: bold;
    }
  }
`;

export default Footer;
