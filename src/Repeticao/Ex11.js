import { useState } from "react";

function Ex11() {
  const [inicio, setIncio] = useState("");
  const [fim, setFim] = useState("");

  function handleNumeroImaprares() {
    const resposta = document.querySelector("#numero");
    let total = 0;
    for (let i = +inicio; i <= +fim; i++) {
      total += i;
    }

    resposta.innerHTML = "esse e o total da soma entre os numeros  " + total;
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
        <button onClick={handleNumeroImaprares}>total</button>
        <div id="numero" style={{ display: "flex" }}></div>
      </form>
    </>
  );
}

export default Ex11;
