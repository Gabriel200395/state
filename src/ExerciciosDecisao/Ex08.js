import { useState } from "react";

function Ex05() {
  const [notaOne, setNotoNone] = useState("");
  const [notaTwo, setNotoTwo] = useState("");
  const [valid, setValid] = useState("");

  const calcularMedia = () => {
    const nota =
      +notaOne + +notaTwo >= 7 && +notaOne + +notaTwo < 10 && "aprovado";
    const maior = +notaOne + +notaTwo > 10 && "aprovado distincao";
    const reprovado = +notaOne + +notaTwo < 7 && "reprovado";
    setValid(nota || maior || reprovado);
  };

  return (
    <div>
      {valid}
      <input
        type="number"
        value={notaOne}
        onChange={({ target }) => setNotoNone(target.value)}
      />
      <input
        type="number"
        value={notaTwo}
        onChange={({ target }) => setNotoTwo(target.value)}
      />
      <button onClick={calcularMedia}>calcular notar</button>
    </div>
  );
}

export default Ex05;
