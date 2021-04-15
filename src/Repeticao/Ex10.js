import { useState } from "react";

function Ex09() {
  const [numero, setNumero] = useState("");

  function handleNumeroImaprares() {
    const resposta = document.querySelector("#numero");
    for (let i = 0; i <= +numero; i++) {
      if (i % 2 === 0) {
        resposta.innerHTML += `<p style="margin:0px 10px">${i}</p>`;
      }
    }
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="number"
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
        />
        <button onClick={handleNumeroImaprares}>numeros impares</button>
        <div id="numero" style={{ display: "flex" }}></div>
      </form>
    </>
  );
}

export default Ex09;
