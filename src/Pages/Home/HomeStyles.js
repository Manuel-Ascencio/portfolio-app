import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  @media only screen and (min-width: 650px) {
    max-width: 950px;
    margin: auto;
  }
`;

export const Entry = styled.h3`
  color: ${({ theme }) => theme.colors.color3};
  font-family: "Roboto Mono", monospace;
`;

export const Name = styled.h1`
  font-size: 2.1rem;
  color: ${({ theme }) => theme.colors.color1};
  font-weight: bold;
  letter-spacing: 1px;

  @media only screen and (min-width: 650px) {
    font-size: 2.2rem;
  }
`;

export const Title = styled.h2`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.color2};
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 1.8rem;

  @media only screen and (min-width: 650px) {
    font-size: 2.3rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 1px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.color2};

  @media only screen and (min-width: 650px) {
    font-size: 1.3rem;
  }
`;

export const Quote = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.color1};
  border-radius: 5px;

  svg {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.color1};
  }

  @media only screen and (min-width: 650px) {
    padding: 20px;
    width: 60%;
    margin: auto;
    margin-top: 60px;
  }
`;

export const Message = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.color1};

  @media only screen and (min-width: 650px) {
    font-size: 1.1rem;
  }
`;

export const Author = styled.span`
  color: ${({ theme }) => theme.colors.color1};

  @media only screen and (min-width: 650px) {
    font-size: 1.1rem;
  }
`;
