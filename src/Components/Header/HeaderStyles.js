import styled from "styled-components";

export const MainHeader = styled.header`
  z-index: 100;
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s linear;
  top: ${({ position }) => position};
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 30px;
  max-width: 950px;
  transition: background-color 0.3s linear;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 650px) {
    max-width: 950px;
    margin: auto;
    border-bottom: none;
  }
`;
