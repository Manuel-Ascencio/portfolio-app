import React from "react";
import styled from "styled-components";

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
    color: ${({ theme }) => theme.colors.color2};
    border-top: 1px solid ${({ theme }) => theme.colors.color2};
    font-size: 1rem;
    opacity: 0.7;
    span {
      font-weight: bold;
    }
  }
  @media only screen and (min-width: 650px) {
    max-width: 950px;
    margin: auto;
    padding: 0 25px 30px 25px;
  }
`;

export default Footer;
