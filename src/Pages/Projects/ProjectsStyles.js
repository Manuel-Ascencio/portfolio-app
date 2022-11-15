import styled from "styled-components";

export const ProjectsContainer = styled.section`
  width: 100%;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  @media only screen and (min-width: 650px) {
    max-width: 950px;
    margin: auto;
  }
`;

export const Items = styled.ul`
  margin: 20px 0;
`;

export const Item = styled.li`
  margin-bottom: 80px;

  @media only screen and (min-width: 750px) {
    display: flex;
    margin-bottom: 100px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${({ ruta }) => ruta});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-position: 50% 50%;
  border-radius: 5px 5px 0 0;

  @media only screen and (min-width: 500px) {
    height: 250px;
  }

  @media only screen and (min-width: 750px) {
    max-width: 70%;
    height: 300px;
    border-radius: 5px;
  }
`;

export const Info = styled.div`
  @media only screen and (min-width: 750px) {
    max-width: 35%;
    order: ${({ index }) => (index % 2 === 0 ? "0" : "-1")};
    display: flex;
    flex-direction: column;
    align-items: ${({ index }) =>
      index % 2 === 0 ? "flex-end" : "flex-start"};
  }
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.color1};
  font-size: 1rem;
  margin-top: 5px;

  @media only screen and (min-width: 750px) {
    margin-top: 10px;
    font-size: 1.3rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.color2};
  font-size: 0.9rem;
  line-height: 1rem;
  margin-top: 5px;

  @media only screen and (min-width: 750px) {
    z-index: 10;
    width: 125%;
    margin-top: 10px;
    font-size: 1rem;
    line-height: none;
    letter-spacing: 1px;
    background-color: ${({ theme }) => theme.colors.background};
    transition: background-color 0.3s linear;
    border-radius: 5px;
    padding: 20px 0;
    text-align: ${({ index }) => (index % 2 === 0 ? "end" : "start")};
  }
`;

export const Links = styled.div`
  display: flex;
  margin-top: 5px;

  @media only screen and (min-width: 750px) {
    margin-top: 10px;
  }
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.color3};
  font-size: 0.8rem;
  svg {
    color: ${({ theme }) => theme.colors.color3};
    font-size: 0.9rem;
    margin-right: 5px;
  }

  @media only screen and (min-width: 750px) {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-left: ${({ index }) => (index % 2 === 0 ? "15px" : "0")};
    margin-right: ${({ index }) => (index % 2 === 0 ? "0" : "15px")};
    :hover {
      opacity: 1;
    }
  }
`;
