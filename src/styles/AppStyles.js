import styled from "styled-components";

export const Main = styled.div`
width: 100%
height: auto;
min-height: 100vh;
background-color: ${({ theme }) => theme.colors.background};
transition: background-color 0.3s linear;
`;

export const MainContainerStyled = styled.main`
  max-width: 950px;
  margin: auto;
  padding: 110px 30px 30px 30px;
  min-height: calc(100vh - 185px);
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s linear;

  @media only screen and (min-width: 650px) {
    padding: 150px 30px 30px 30px;
    min-height: 100vh;
  }
`;
