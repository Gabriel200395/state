import { useState } from "react";

function Ex07() {
  const [numero, setNumero] = useState("");
  const [receberNumero, setReceberNumero] = useState([]);
  const [maior, setMaior] = useState("");

  function handleAddNumero() {
    setReceberNumero([...receberNumero, +numero]);
  }

  function handleMaiorNumero() {
    let maiorNumero = receberNumero[0];

    for (let i = 0; i < receberNumero.length; i++) {
      if (receberNumero[i] > maiorNumero) {
        maiorNumero = receberNumero[i];
      }
    }
    setMaior(maiorNumero);
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="number"
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
        />
        <button onClick={handleAddNumero}>Add Numero</button>
        <button onClick={handleMaiorNumero}>Maior Numero</button>
        {maior}
      </form>
    </>
  );
}

export default Ex07;
