import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Logo,
  Img,
  Div,
} from "../styles/indexStyles";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Hello, I'm Victor Assunção</Name>
          <Function>Student</Function>
          <Intro>
          "Hello, I'm a student currently learning ReactJS, but I'm also interested in game development and illustration.
          I enjoy exploring the creative aspects of software development and I'm excited about the potential of combining my
          interests in these areas to build engaging and immersive experiences for users. With a passion for learning and experimenting
          with new technologies and techniques, I'm always looking for opportunities to broaden my skill set and explore new frontiers
          in software development."
          </Intro>
          
          <Div>
          <Link href="projects">
            <LinkProjects>
              PROJECTS <FaArrowRight />
            </LinkProjects>
          </Link>
          
          <Link href="about">
            <LinkProjects>
              ABOUT <FaArrowRight />
            </LinkProjects>
            </Link>
          </Div>

        </Infos>
        <Logo>
          <Img src="https://i.ibb.co/yqmCpDZ/eu1.jpg" />
        
        </Logo>
      </Content>
    </Container>
  )
}
