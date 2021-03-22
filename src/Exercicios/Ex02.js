import { useState } from "react";

function Ex02() {
  const [valor, setValor] = useState("");

  function pegarNumero({ target }) {
    setValor(target.value);
  }

  function mostrarNumero() {
    alert("Olá o numero que foi escrito foi: " + valor);
  }

  return (
    <div className="App">
      <input type="number" name="numero" value={valor} onChange={pegarNumero} />
      <button onClick={mostrarNumero}>Mostrar Numero</button>
    </div>
  );
}

export default Ex02;
