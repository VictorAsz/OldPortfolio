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
} from "../styles/indexStyles";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Hello,I'm Victor Assunção</Name>
          <Function>Student</Function>
          <Intro>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            dolorem? Minus, omnis culpa doloremque nobis laboriosam aliquam
            molestiae eveniet nihil deleniti! Maiores natus ratione nesciunt
            quidem quia dolorem consectetur dolor!
          </Intro>
          <Link href="projects">
            <LinkProjects>
              PROJECTS <FaArrowRight />
            </LinkProjects>
          </Link>
        </Infos>
        {/* <Logo>
          <Img src="/images/logo.png" alt="logo" />
        </Logo> */}
      </Content>
    </Container>
  );
}
