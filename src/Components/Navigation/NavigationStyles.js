import styled from "styled-components";

export const NavigationContainer = styled.nav`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s linear;
  backdrop-filter: blur(10px);
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 10px 0;

  @media only screen and (min-width: 650px) {
    position: relative;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Roboto Mono", monospace;
    color: ${({ theme }) => theme.colors.color2};
    svg {
      width: 100%;
      margin: auto;
      padding-top: 5px;
      font-size: 25px;
      color: ${({ theme }) => theme.colors.color2};
    }
  }
  span {
    font-size: 1rem;
  }

  @media only screen and (min-width: 650px) {
    display: flex;
    justify-content: end;
    a {
      color: ${({ theme }) => theme.colors.color2};
      margin-right: 50px;
      font-weight: bold;
      letter-spacing: 0.2rem;
      svg {
        display: none;
      }
      span {
        font-size: 1.2rem;
      }
    }
  }
`;

export const Item = styled.li`
  .active {
    svg {
      border-top: 3px solid ${({ theme }) => theme.colors.color3};
      color: ${({ theme }) => theme.colors.color3};
    }
    span {
      color: ${({ theme }) => theme.colors.color3};
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: "Roboto Mono", monospace;
      color: ${({ theme }) => theme.colors.color2};
      svg {
        width: 100%;
        margin: auto;
        padding-top: 5px;
        color: ${({ theme }) => theme.colors.color2};
      }
    }
`;
