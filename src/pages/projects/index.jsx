import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Ul,
  Li,
  TitleProject,
  Url,
  Created_at,
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
              <a href={item.html_url} ><TitleProject>{item.name.toUpperCase()}</TitleProject></a>
              <Url>{item.url}</Url>
              <Created_at>
                Create data:{" "}
                {Intl.DateTimeFormat("en").format(new Date(item.created_at))}
              </Created_at>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
