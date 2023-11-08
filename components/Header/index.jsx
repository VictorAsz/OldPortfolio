import React, { useState } from "react";
import {
  Container,
  Title,
  NavLinks,
  Ancora,
  Content,
  Menu,
  CloseSidebar,
  ContentTitle,
  SubTitle,
  Span,
  Span2,
} from "./style";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { asPath } = useRouter();

  const showSidebar = () => setSidebar(!sidebar);

  function activeLink(path) {
    return asPath === `/${path}` ? "active" : "";
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>Victor Assunção</Title>
          <SubTitle>Portfolio</SubTitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSidebar}></FaBars>
        </Menu>
        <NavLinks sidebar={sidebar}>
          <CloseSidebar onClick={showSidebar}>
            <FaTimes />
          </CloseSidebar>
          <Span><Link href="/">Home</Link></Span>
          <Span2>|</Span2>
          <Span><Link href="/projects">Projetos </Link></Span>
          <Span2>|</Span2>
          <Span><Link href="/about">Sobre Mim</Link></Span>
          
         
        </NavLinks>
      </Content>
    </Container>
  );
}
