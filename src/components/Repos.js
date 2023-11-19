import React, { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import { Row } from "react-bootstrap";

function Repos() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/prashkn/repos?sort=created")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // turn repos 1d array into a 2d array with 3 elements each
        let newRepos = [];
        for (let i = 0; i < json.length / 3; i++) {
          newRepos.push([]);
          for (let j = 0; j < 3; j++) {
            newRepos[i].push(json[i * 3 + j]);
          }
        }
        setRepos(newRepos);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div style={{ width: "100%" }}>
      {repos.map((line) => {
        return (
          <Row>
            {Array.isArray(line) &&
              line.map((repo) => {
                return repo !== undefined ? (
                  <RepoCard
                    name={repo.name ? formatName(repo.name) : ""}
                    description={repo.description}
                    url={repo.html_url}
                  />
                ) : (
                  <div></div>
                );
              })}
          </Row>
        );
      })}
    </div>
  );
}

function formatName(name) {
  let words = name.split("-");
  for (let i = 0; i < words.length; i++)
    words[i] = words[i].at(0).toUpperCase() + words[i].substring(1);
  return words.join(" ");
}

export default Repos;
