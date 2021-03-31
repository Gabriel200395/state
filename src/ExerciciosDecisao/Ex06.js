import { useState } from "react";

function Ex06() {
  const [numero, setNumero] = useState("");
  const [array, setArray] = useState([]);
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(0);

  const addNumero = () => {
    setArray([...array, +numero]);
  };

  const maiorNumero = () => {
    const filtro = array.sort((a, b) => (a > b ? 1 : -1));
    const me = filtro[0];
    const ma = filtro[filtro.length - 1];
    setMaior(ma);
    setMenor(me);
  };

  return (
    <div>
      <p>maior numero {maior === menor ? "esta comecando agora" : maior}</p>
      <p>menor numero {menor === maior ? "esta comecando agora" : menor}</p>

      <input
        type="number"
        value={numero}
        onChange={({ target }) => setNumero(target.value)}
      />

      <button onClick={addNumero}>Add Numero</button>
      <button onClick={maiorNumero}> Maior Numero</button>
    </div>
  );
}

export default Ex06;
