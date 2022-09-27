import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  padding: 20px 30px;
  text-align: center;
  padding-bottom: 100px;

  @media only screen and (min-width: 650px) {
    max-width: 950px;
    margin: auto;
    padding-bottom: 30px;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  opacity: 0.9;
  svg {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.color2};
    margin: 0 1px;
  }
  :hover {
    opacity: 1;
  }

  @media only screen and (min-width: 650px) {
    svg {
      font-size: 18px;
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.color2};
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.9;
  letter-spacing: 1px;

  @media only screen and (min-width: 650px) {
    font-size: 1rem;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.color2};
  font-size: 0.9rem;
  opacity: 0.7;
`;
