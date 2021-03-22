import { useState } from "react";

function Ex11() {
  const [numeroOne, setNumeroOne] = useState("");
  const [numeroTwo, setNumeroTwo] = useState("");
  const [numeroThere, setNumeroThere] = useState("");
  const [primeiro, setPrimeiro] = useState(0);
  const [segundo, setSegundo] = useState(0);
  const [terceiro, setTerceiro] = useState(0);

  function pegarValores() {
    const somarPrimeiro = (+numeroOne * 2 * +numeroTwo) / 2;
    const somarPt = +numeroOne * 3 + +numeroThere;
    const ultimo = (+numeroThere) ** 3;

    setPrimeiro(somarPrimeiro);
    setSegundo(somarPt);
    setTerceiro(ultimo);
  }

  return (
    <div className="App">
      <div>
        <p> primeiro: {primeiro}</p>
        <p> segundo: {segundo}</p>
        <p> terceiro: {terceiro}</p>
      </div>
      <input
        type="number"
        value={numeroOne}
        onChange={(event) => setNumeroOne(event.target.value)}
      />
      <input
        type="number"
        value={numeroTwo}
        onChange={(event) => setNumeroTwo(event.target.value)}
      />
      <input
        type="number"
        value={numeroThere}
        onChange={(event) => setNumeroThere(event.target.value)}
      />
      <button onClick={pegarValores}>calcular</button>
    </div>
  );
}

export default Ex11;
