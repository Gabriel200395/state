import { useState } from "react";

function Ex02() {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  function handleClick() {
    const n = nome.split(" ");
    const s = senha.split(" ");

    for (let i = 0; i < n.length; i++) {
      for (let i = 0; i < s.length; i++) {
        if (n[i] === s[i]) {
          console.log("senha Invalidar");
        } else {
          console.log("senha validar");
        }
      }
    }
  }

  return (
    <div>
      <input
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="text"
        value={senha}
        onChange={({ target }) => setSenha(target.value)}
      />
      <button onClick={handleClick}>verificar</button>
    </div>
  );
}

export default Ex02;
