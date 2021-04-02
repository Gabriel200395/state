import { useState } from "react";

function Ex08() {
  const [numero, setNumero] = useState("");
  const [array, setArray] = useState([]);
  const [mostrar, setMostrar] = useState("");

  const addNumero = () => {
    setArray([...array, +numero]);
  };

  function decrecente() {
    setMostrar(
      array.length <= 3
        ? array.sort((a, b) => (b > a ? 1 : -1))
        : "voce adicionou mais que tres numeros"
    );
  }

  return (
    <div>
      {mostrar}
      <div>
        <input
          type="number"
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
        />
        <button onClick={addNumero}>addNumero</button>
        <button onClick={decrecente}>decrecente</button>
      </div>
    </div>
  );
}

export default Ex08;
