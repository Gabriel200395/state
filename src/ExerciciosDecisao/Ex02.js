import { useState } from "react";

function Ex02() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  function validar() {
    setResultado(
      (+numero > 0 && "positivo") ||
        (+numero === 0 && "neutro") ||
        (+numero < 0 && "negativo")
    );
  }

  return (
    <div>
      {resultado}
      <input
        type="number"
        value={numero}
        onChange={({ target }) => setNumero(target.value)}
      />
      <button onClick={validar}>v</button>
    </div>
  );
}

export default Ex02;
