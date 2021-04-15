import { useState } from "react";

function Ex09() {
  const [inicio, setIncio] = useState("");
  const [fim, setFim] = useState("");

  function handleNumeroImaprares() {
    const resposta = document.querySelector("#numero");
    for (let i = +inicio; i <= +fim; i++) {
      resposta.innerHTML += `<p style="margin:0px 10px">${i}</p>`;
    }
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        inicio
        <input
          type="number"
          value={inicio}
          onChange={({ target }) => setIncio(target.value)}
        />
        inicio
        <input
          type="number"
          value={fim}
          onChange={({ target }) => setFim(target.value)}
        />
        <button onClick={handleNumeroImaprares}>passo a passo</button>
        <div id="numero" style={{ display: "flex" }}></div>
      </form>
    </>
  );
}

export default Ex09;
