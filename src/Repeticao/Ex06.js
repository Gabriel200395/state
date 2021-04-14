import { useState } from "react";

function Ex06() {
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");

  function handleClick() {
    const response = document.querySelector("#res");

    if (inicio.length === 0 || fim.length === 0) {
      console.log("erro");
    } else {
      for (let i = +inicio; i <= fim; i++) {
        response.innerHTML += `<li>${i}</li>`;
      }
    }

    setInicio("");
    setFim("");
  }

  return (
    <div>
      <label>
        inicio
        <input
          type="number"
          value={inicio}
          onChange={({ target }) => setInicio(target.value)}
        />
      </label>
      <label>
        fim
        <input
          type="number"
          value={fim}
          onChange={({ target }) => setFim(target.value)}
        />
      </label>
      <button onClick={handleClick}>Contar</button>

      <div id="res"></div>
    </div>
  );
}

export default Ex06;
