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
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </NavLinks>
      </Content>
    </Container>
  );
}
