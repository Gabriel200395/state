import { useState } from "react";

function Ex16() {
  const [metro, setMetro] = useState("");
  const [latas, setLatas] = useState(0);
  const [valor, setValor] = useState(0);

  function calcular() {
    const preco = 80.0;
    const litros = 18;

    const metros = metro / 3;
    const tintas = metros / litros;
    const total = tintas * preco;

    setLatas(tintas);
    setValor(total);
  }

  return (
    <div className="App">
      <p> quantidade de latas: {latas.toFixed(0)}</p>
      <p>
        valor a pagar:
        {valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>

      <input
        type="number"
        value={metro}
        onChange={(event) => setMetro(event.target.value)}
      />
      <button onClick={calcular}>calcular</button>
    </div>
  );
}

export default Ex16;
