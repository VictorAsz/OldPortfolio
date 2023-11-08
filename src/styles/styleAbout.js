import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
`;

export const Content = styled.div`
  
  width: 1120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 50px;
  padding: 100px 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Tittle = styled.p`
font-size: 30px;
text-align: end;
`
