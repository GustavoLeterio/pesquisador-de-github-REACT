import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Repositories() {
  const navigate = useNavigate();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    let repoNames = localStorage.getItem("repoName");
    if (repoNames === null) navigate("/");
    repoNames = JSON.parse(repoNames);
    setRepos(repoNames);
    localStorage.clear();
  }, []);

  return (
    <>
      <h1>Meus Repositorios</h1>
      <ul>
        {repos.map((name) => {
          return <li>{name}</li>;
        })}
      </ul>
      <Link to="/">Voltar</Link>
    </>
  );
}
