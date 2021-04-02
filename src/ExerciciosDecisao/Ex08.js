import { useState } from "react";

function Ex05() {
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
