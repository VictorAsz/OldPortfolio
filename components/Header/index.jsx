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

  const showSidebar = () => setSidebar("sidebar");

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
          <Link href="/">
            <Ancora className={activeLink("")} onClick={showSidebar}>
              Home
            </Ancora>
          </Link>
          <Link href="projects">
            <Ancora className={activeLink("projects")} onClick={showSidebar}>
              Projects
            </Ancora>
          </Link>
          <Link href="Contact">
            <Ancora className={activeLink("contact")} onClick={showSidebar}>
              Contact
            </Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  );
}
