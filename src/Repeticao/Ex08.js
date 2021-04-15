import { useState } from "react";

function Ex08() {
  const [numero, setNumero] = useState("");
  const [receberNumero, setReceberNumero] = useState([]);
  const [maior, setMaior] = useState("");
  const [error, setError] = useState("");

  function handleAddNumero() {
    if (numero.length == 0) {
      setError("erro!");
      setMaior("");
      setReceberNumero([]);
    } else {
      setReceberNumero([...receberNumero, +numero]);
      setError("");
    }
  }

  function handleMaiorNumero() {
    if (receberNumero.length == 0) {
      setMaior("");
    } else {
      const somarTotal = receberNumero.reduce((total, item) => {
        return total + item;
      }, 0);

      setMaior(somarTotal);
      setError("");
    }
  }

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="number"
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
        />
        <button onClick={handleAddNumero}>somar</button>
        <button onClick={handleMaiorNumero}>total</button>
        {maior}
        {error}
      </form>
    </>
  );
}

export default Ex08;
