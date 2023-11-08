import React, { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaGithubAlt,
} from "react-icons/fa";
import {
    Container,
    Container_content,
    Container_icon,
    Container_text,
    Button,
    Tooltip,
    
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
              
              <Button><a href="https://www.linkedin.com/in/victoraszs/" target="_blank"><FaLinkedin/></a><Tooltip className="tooltip">linkedin</Tooltip></Button>
              <Button><a href="https://api.whatsapp.com/send?phone=5554984289836&text=Ol%C3%A1,%20temos%20interesse%20em%20contratar%20voc%C3%AA." target="_blank"><FaWhatsapp/></a><Tooltip className="tooltip">Whatsapp</Tooltip> </Button>
              <Button><a href="https://github.com/VictorAsz" target="_blank"> <FaGithubAlt/></a> <Tooltip className="tooltip">Github</Tooltip> </Button>
              
              
        
              <Button  type="button" onClick = { function(){
                navigator.clipboard.writeText('victor.a.schumann@gmail.com');
              } }><FaEnvelope/>
               <Tooltip className="tooltip">Copy</Tooltip>
              
              </Button>
             
             
      
          </Container_icon>
          <Container_text>
            {/* <p>Design by: <a href="https://github.com/WilliamDosSantos">WilliamDosSantos</a> </p> */}
            <p>Copyright ©2023 All rights reserved</p>
          </Container_text>
         </Container_content>
       </Container>
        </>
    )
}