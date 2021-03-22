import { useState } from "react";

function Ex03() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [calculo, setCalculo] = useState(0);

  function calcularNumber() {
    const somar = Number(numero1) + Number(numero2);
    setCalculo(somar);
  }

  return (
    <div className="App">
      <div> A somar dos numeros A + B e igual: {calculo}</div>
      <input
        type="number"
        name="numero"
        value={numero1}
        onChange={(event) => setNumero1(event.target.value)}
      />
      <input
        type="number"
        name="numero"
        value={numero2}
        onChange={(event) => setNumero2(event.target.value)}
      />
      <button onClick={calcularNumber}>calcular</button>
    </div>
  );
}

export default Ex03;
