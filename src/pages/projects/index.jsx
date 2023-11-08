import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content,
  Ul,
  Li,
  TitleProject,
  Url,
  Button,
  Created_at,
  Divtittle,
  Img
} from "../../styles/styleProject";
import {
  LinkProjects
} from "../../styles/indexStyles.js"


export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch("https://api.github.com/users/VictorAsz/repos")
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          var data = await res.json();
          setItemsApi(data);
        })
        .catch((e) => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);
  
  return (
    
    <Container>
      <Content>
        <Ul>
          {itemsApi.map((item) => (
            <Li key={item.id}>
              <Img src="https://www.macobserver.com/wp-content/uploads/2019/05/workfeatured-GitHub-2.png"/>
              

              <Divtittle>
              <TitleProject>{item.name.toUpperCase()}</TitleProject>
              <Created_at>
                Create data:{" "}
                {Intl.DateTimeFormat("en").format(new Date(item.created_at))}
              </Created_at>
              
              <a href={item.html_url} target="_blank">
              <LinkProjects>
                  Repositório <FaArrowRight/>
              </LinkProjects>
              </a>
              </Divtittle>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
