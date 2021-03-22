import { useState } from "react";

function Ex11() {
  const [genero, setGenero] = useState({ sexo: "", altura: "" });
  const [peso, setPeso] = useState(0);

  function dados(event) {
    setGenero({ ...genero, [event.target.name]: event.target.value });
  }

  function calcularPeso() {
    const { sexo, altura } = genero;
    const pesoHomem = 72.7 * +altura - 58;

    const pesoMulher = 62.1 * +altura - 44.7;

    if (sexo === "masculino") {
      setPeso(pesoHomem);
    } else if (sexo === "femenino") {
      setPeso(pesoMulher);
    } else {
      alert("sexo não existente");
    }
  }

  return (
    <div className="App">
      <div>
        Ola o seu sexo e do {genero.sexo} e o seu peso e : {peso.toFixed(0)} kg
      </div>
      <input type="text" name="sexo" value={genero.sexo} onChange={dados} />
      <input
        type="number"
        name="altura"
        value={genero.altura}
        onChange={dados}
      />
      <button onClick={calcularPeso}>calcular</button>
    </div>
  );
}

export default Ex11;
