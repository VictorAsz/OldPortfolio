import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // PARA DE ESQUECER QUE É "min-height"
  min-height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }

  @media (max-width: 760px) {
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
    width: 90%;
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
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 25rem;
    height: 25rem;
    object-fit: cover;
  }
  @media (max-width: 900px) {
    img {
      width: 22rem;
      height: 22rem;
    }
  @media (max-width: 760px) {
    width: 90%;

  }
  @media (max-width: 600px) {
    img {
      width: 18rem;
      height: 18rem;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.9rem;
`;

export const Img = styled.img``;
