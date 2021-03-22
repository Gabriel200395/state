import { useState } from "react";

function Ex14() {
  const [peso, setPeso] = useState(0);
  const [quantidade, setQuantidade] = useState("");

  function calcularPeso() {
    const quantidadeMaxima = 50;
    if (quantidade > 50) {
      const valorPagar = (quantidade - quantidadeMaxima) * 4;
      setPeso(valorPagar);
    } else {
      setPeso("nenhum taxa para pagar");
    }
  }

  return (
    <div className="App">
      <div>
        {peso.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </div>
      <input
        type="number"
        name="quantidade"
        onChange={({ target }) => setQuantidade(target.value)}
      />
      <button onClick={calcularPeso}>calcular</button>
    </div>
  );
}

export default Ex14;
