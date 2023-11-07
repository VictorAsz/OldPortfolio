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
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
max-width: 300px;
min-width: 100%;
  overflow-x: auto;
  height: inherit;
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: #333;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #222;
  }
`;

export const Button = styled.button`

  font-size: 14px;
  background-color: #b4b4b4;
  color: black;
  border: none; 
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;

`

export const Img = styled.img`
width: 384px;
height: 216px;
background-color: $primary-color;
color: $background-color;
border-radius: 8px;
border: 1px solid $primary-color;
object-fit: cover;
object-position: top;
flex-shrink-wrap: 1;
@media (max-width: 760px){
  width: 250px;
  height: 150px;
}
`

export const Divtittle = styled.div`
display:flex;
flex-direction: column;
`


export const Li = styled.li`
  display: flex;
  flex-direction: row;
  text-align: start;
  justify-content: start;
  word-break: break-word;
  margin: 10px 10px 20px;
 
  // box-shadow: 1px 1px 1px 2px red;
  gap: 25px;
  border-radius: 10px 10px 0px 0px;
  padding: 10px 0px;
  @media (max-width: 760px) {
    font-size: 13px;
  }
`;

export const TitleProject = styled.h3`
 letter-spacing: 1px;
`;

export const Url = styled.span``;

export const Created_at = styled.span`
margin-bottom: auto;
`;
