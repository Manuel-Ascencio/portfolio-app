import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s linear;
  border: none;
  svg {
    cursor: pointer;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.color3};
    border-radius: 5px;
    border: 1px solid var(--dodger-blue);
    padding: 5px;
    display: flex;
  }

  @media only screen and (min-width: 650px) {
    svg {
      font-size: 33px;
    }
  }
`;
