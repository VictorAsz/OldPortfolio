import React, { useEffect, useState } from "react";
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
} from "./style";

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
              <Divtittle>
              <TitleProject>{item.name.toUpperCase()}</TitleProject>
              <Created_at>
                Create data:{" "}
                {Intl.DateTimeFormat("en").format(new Date(item.created_at))}
              </Created_at>
              </Divtittle>
              <a href="">
              <Button >
                  Repositório
              </Button>
              </a>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
