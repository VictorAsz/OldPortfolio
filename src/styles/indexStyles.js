import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // PARA DE ESQUECER QUE É "min-height"
  min-height: calc(100vh - 100px);
  @media (max-width: 820px) {
    padding: 40px 0;
  }
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
  display: flex;
  flex-direction: column;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const Name = styled.span`
  p {
    font-size: 40px;
    font-weight: 500;
  }
  @media (max-width: 996px) {
    p {
      font-size: 35px;
    }
  }
  @media (max-width: 875px) {
    p {
      font-size: 30px;
    }
  }
`;

export const Function = styled.span`
  font-size: 20px;
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
  width: 10rem;
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
  gap: 0.9rem;
`;

export const Img = styled.img``;
