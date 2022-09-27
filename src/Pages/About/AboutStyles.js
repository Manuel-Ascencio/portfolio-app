import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  overflow: hidden;
  .
`;

export const MainContainer = styled.div`
  @media only screen and (min-width: 650px) {
    max-width: 950px;
    margin: auto;
  }
`;

export const AboutMe = styled.div`
  width: auto;
  height: auto;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.color2};
`;

export const Timeline = styled.div`
  width: 100%;
  max-width: 950px;
  z-index: -1;
  padding: 30px 0;

  @media only screen and (min-width: 650px) {
    padding: 50px 0;
    margin-bottom: 100px;
  }
`;

export const TimelineItems = styled.ul`
  max-width: 950px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    left: 10px;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.color1};
  }

  @media only screen and (min-width: 650px) {
    ::before {
      left: calc(50% - 1px);
    }
  }
`;

export const TimelineItem = styled.li`
  margin-bottom: 40px;
  width: 100%;
  position: relative;
  :nth-child(odd) {
    padding-right: 0;
    text-align: left;
  }
  :nth-child(odd),
  :nth-child(even) {
    padding-left: 37px;
  }
  :last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 650px) {
    :nth-child(odd) {
      padding-right: calc(50% + 30px);
      text-align: right;
      padding-left: 0;
    }
    :nth-child(even) {
      padding-left: calc(50% + 30px);
    }
  }
`;

export const Dot = styled.div`
  height: 16px;
  width: 16px;
  background-color: ${({ theme }) => theme.colors.color3};
  position: absolute;
  left: 2px;
  border-radius: 50%;
  top: 3px;

  @media only screen and (min-width: 650px) {
    left: calc(50% - 8px);
  }
`;

export const Date = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.color3};
  font-weight: 600;
`;

export const DateData = styled.div`
  background-color: ${({ theme }) => theme.colors.color1};
  border-radius: 5px;
  padding: 10px;
`;

export const TimelineTitle = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.background};
  letter-spacing: 1px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const TimelineDescription = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1rem;
  line-height: 20px;
`;

export const Technologies = styled.div`
  @media only screen and (min-width: 650px) {
    margin-bottom: 100px;
  }
`;

export const TechCards = styled.div`
  @media only screen and (min-width: 650px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  border-radius: 5px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.color1};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;

  @media only screen and (min-width: 650px) {
    max-width: 48%;
    margin-bottom: 0;
  }
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.colors.background};
  letter-spacing: 1px;
  font-size: 1.2rem;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.background};
  line-height: 1.2rem;
  font-size: 1rem;
  margin: 10px 0;
  align-items: flex-start;
`;

export const CardIcons = styled.div``;

export const Icon = styled.img`
  width: 40px;
  margin-right: 10px;
`;
