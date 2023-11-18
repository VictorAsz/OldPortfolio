import styled from "styled-components";


export const Container = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 25vh;
  border-top: solid 1px rgba(255, 255, 255, 0.4);
  borer-radius: 0px 5px 0px 5px;
  margin-top: 10px;

`
export const Container_content = styled.div`
display: flex;
flex-direction: column;
height: 30%;
width: 30%;
margin: 15px;
`

export const Container_icon = styled.div`

svg {
    width: 50px;
    height: 50px;
  }
`

export const Container_text = styled.div`

`
// export const Button = styled.button`
// background: transparent;
// color: white;
// border: none;

// &:hover {
//     cursor: pointer;
//     color: red;
// }
// `

export const Button = styled.button`
  background: transparent;
  color: #fff;
  border: none;
  position: relative;

  &:hover {
    cursor: pointer;
    color:  gray;
    transition: 0.3s;
  }
  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
    color: white;
  }
  
`;

export const Tooltip = styled.div`
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 112%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
`;



