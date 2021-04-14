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
    document.querySelector("#res1").innerHTML = "";
  }

  function handleClick1() {
    const response = document.querySelector("#res1");

    if (inicio.length === 0 || fim.length === 0) {
      console.log("erro");
    } else {
      for (let i = +inicio; i <= fim; i++) {
        response.innerHTML += `<p style="margin: 0px 15px">${i}</p>`;
      }
    }

    setInicio("");
    setFim("");
    document.querySelector("#res").innerHTML = "";
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
      <button onClick={handleClick1}>um lado do outro</button>

      <div id="res"></div>
      <div id="res1" style={{ display: "flex" }}></div>
    </div>
  );
}

export default Ex06;
