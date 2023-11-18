import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 0 20px;
  @media (max-width: 820px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  @media (max-width: 760px) {    
    padding: 10%;
    padding-top: 0;
    width: 100%;
  }
`;

export const Name = styled.h1`  
  font-weight: 500;
  @media (max-width: 760px) {    
    font-size: 25px;
    text-align: center;
  }
`;

export const Function = styled.h3`
  font-weight: 500;
  color: lightgray;
  margin-bottom: 10px;
  @media (max-width: 996px) {
    font-size: 18px;
  }
`;

export const Intro = styled.span`
  color: lightgray;
  text-align: justify;
  text: 8;
  p {
    margin-bottom: 10px;
  }
  @media (max-width: 996px) {
    font-size: 14px;
  }
`;

export const LinkProjects = styled.button`
  width: 10em;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;
  svg {
    font-size: 20px;
  }
  @media (max-width: 382px) {
    width: 8rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  img {
    width: 100%;
    height: 100%;
    max-width: 25rem;
    max-height: 25rem;
    object-fit: cover;
  }
  @media (max-width: 900px) {
    img {
      max-width: 22rem;
      max-height: 22rem;
    }
  @media (max-width: 820px) {
    margin-bottom: 20px;
  }
`;

export const Div = styled.div`
display: flex;
flex-direction: row;
gap: 0.9rem;`