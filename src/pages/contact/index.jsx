import React from "react";
import { Container, Content } from "./style";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaGithubAlt,
} from "react-icons/fa";
import ItemContact from "../../../components/itemContact/index";

export default function Contact() {
  return (


    <Container>
      <Content>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact="https://www.linkedin.com/in/victor-assun%C3%A7%C3%A3o-schumann-106839185/"
        />
        <ItemContact
          IconFa={FaGithubAlt}
          LinkContact="https://github.com/VictorAsz"
        />
        <ItemContact
          IconFa={FaInstagram}
          LinkContact="https://www.instagram.com/drayuuta/"
        />
        <ItemContact
          IconFa={FaEnvelope}
          LinkContact="victor.a.schumann@gmail.com"
        />
      </Content>
    </Container>
  )
}
