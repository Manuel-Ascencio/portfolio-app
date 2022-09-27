import styled from "styled-components";

export const PageHeaderContainer = styled.div`
  width: auto;
  height: auto;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.color1};
  display: inline-block;
  font-weight: bold;
  position: relaive;
  max-width: 950px;

  @media only screen and (min-width: 650px) {
    font-size: 2.2rem;
  }
`;
