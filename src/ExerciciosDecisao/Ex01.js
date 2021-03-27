import { useState } from "react";

function Ex01() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(0);

  function vericarMaior() {
    (+numero1 > +numero2 && setResultado(numero1)) ||
      (+numero2 > +numero1 && setResultado(numero2));
  }

  return (
    <div>
      {resultado}
      <input
        type="number"
        value={numero1}
        onChange={({ target }) => setNumero1(target.value)}
      />
      <input
        type="number"
        value={numero2}
        onChange={({ target }) => setNumero2(target.value)}
      />
      <button onClick={vericarMaior}>verificar maior numero</button>
    </div>
  );
}

export default Ex01;
