import { useState } from "react";

function Ex01() {
  const [valor, setValor] = useState("");
  const [resposta, setResposta] = useState("");

  function validarNumero() {
    const total =
      valor > 0 && valor <= 10 ? "numero valido" : "numero invalido!";
    setResposta(total);
  }

  return (
    <div>
      {resposta}
      <input
        type="number"
        value={valor}
        onChange={({ target }) => setValor(target.value)}
      />
      <button onClick={validarNumero}>verificar numero</button>
    </div>
  );
}

export default Ex01;
