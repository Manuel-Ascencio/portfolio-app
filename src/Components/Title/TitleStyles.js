import styled from "styled-components";

export const TitleContent = styled.div`
  width: auto;
  height: auto;
`;

export const Content = styled.h3`
  color: ${({ theme }) => theme.colors.color1};
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  margin: 20px 0;

  @media only screen and (min-width: 650px) {
    font-size: 1.7rem;
  }
`;
