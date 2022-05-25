import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState("Usuário");
  const [err, setErr] = useState(false);
  const handleResearch = () => {
    axios.get(`https://api.github.com/users/${user}/repos`).then((response) => {
      setErr(false);
      const repo = response.data;
      const repoName = [];
      repo.forEach((repository) => {
        repoName.push(repository.name);
      });
      localStorage.setItem("repoName", JSON.stringify(repoName)); // Comando javascript para guardar valor no armazenamento local do navegador
      navigate('/repositories');
    }).catch(err=>{
      setErr(true);
    }); //Consumindo API com Axios
  };

  return (
    <>
      {user}
      <br />
      <input
        className="usuarioInput"
        placeholder="Usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button type="button" onClick={handleResearch}>
        Pesquisar
      </button>
      <br/>
      {err ? " Não encontrado!" : ""}
    </>
  );
}
