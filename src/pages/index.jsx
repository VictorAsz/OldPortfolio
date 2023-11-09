import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Div,
} from "../styles/indexStyles";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>          
          <Name>Bem vindos,<br /> Eu sou Victor Assunção</Name>
          <Function>| Técnico de TI</Function>
          <Intro>
            Sou um estudante de engenharia de software apaixonado por tecnologia. Atualmente, trabalho meio período como freelancer, oferecendo suporte técnico de TI e soluções personalizadas conforme a demanda. Além disso, mantenho meu foco nos estudos e em pequenos projetos de back-end, mas também tenho interesse na área de design e desenvolvimento de jogos.
            <br /><br />
            Adoro explorar os aspectos criativos do meu trabalho e busco constantemente combinar meus interesses para criar soluções criativas, divertidas e funcionais. Tenho paixão por aprender e experimentar novas tecnologias e técnicas, o que me motiva a estar sempre estudando para expandir minhas habilidades. Estou animado para compartilhar minha jornada com vocês!
          </Intro>

          <Div>
            <Link href="projects">
              <LinkProjects>
                PROJETOS <FaArrowRight />
              </LinkProjects>
            </Link>

            <Link href="about">
              <LinkProjects>
                SOBRE MIM <FaArrowRight />
              </LinkProjects>
            </Link>
          </Div>

        </Infos>        
      </Content>
    </Container>
  )
}
