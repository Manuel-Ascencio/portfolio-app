import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 200px;
  background: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s linear;
  backdrop-filter: blur(10px);

  @media only screen and (min-width: 650px) {
    h2 {
      font-size: 1.3rem;
    }
  }
`;

export const LogoContent = styled.h2`
  font-family: "Pacifico", cursive;
  color: ${({ theme }) => theme.colors.color1};
`;
