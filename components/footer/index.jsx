import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaGithubAlt,
} from "react-icons/fa";
import {
    Container,
    Container_content,
    Container_icon,
    Container_text,
    Button
    
  } from "./style";

// function copy(){

//   let svg = querySelectorByID("svg");
//   svg.addEventListener("click", () => {
//     copyTextToClipboard('victor.a.schumann@gmail.com');
//     return console.log('estou funcionando')
//   });
// }


export default function(){

    return(
      
        <>
        
       <Container>
         <Container_content>
              <Container_icon>
              <a href="https://www.linkedin.com/in/victoraszs/"><FaLinkedin/></a>
              <a href=""><FaInstagram/></a>
              <a href="https://github.com/VictorAsz"><FaGithubAlt/></a>
              <Button type="button" onClick = { function(){
                navigator.clipboard.writeText('victor.a.schumann@gmail.com');
              } }><FaEnvelope id="svg"/></Button>
          </Container_icon>
          <Container_text>
            <p>Design by: <a href="https://github.com/WilliamDosSantos">WilliamDosSantos</a> </p>
            <p>Copyright ©2023 All rights reserved</p>
          </Container_text>
         </Container_content>
       </Container>
        </>
    )
}