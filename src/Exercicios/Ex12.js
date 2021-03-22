import { useState } from "react";

function Ex12() {
  const [peso, setPeso] = useState("");
  const [pessoa, setPessoa] = useState(0);

  function calcularPeso() {
    const pesoPessoa = 72.7 * peso - 58;
    setPessoa(pesoPessoa);
  }

  return (
    <div className="App">
      <div>
        <p>0 seu peso refente a sua altura e de: {pessoa.toFixed(0)}kg </p>
      </div>
      <input
        type="number"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <button onClick={calcularPeso}>verificar Peso</button>
    </div>
  );
}

export default Ex12;
