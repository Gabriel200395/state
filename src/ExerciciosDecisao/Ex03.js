import { useState } from "react";

function Ex03() {
  const [sexo, setSexo] = useState("");
  const [sexoValid, setSexoValid] = useState("");

  const validar = () => {
    setSexoValid(
      (sexo === "F" && "femenino") ||
        (sexo === "M" && "masculino") ||
        (sexo != "F" || sexo != "M" ? "sexo invalido" : "")
    );
  };

  const reset = () => {
    setSexoValid("");
  };

  return (
    <div>
      {sexoValid}
      <input
        type="text"
        value={sexo}
        onChange={({ target }) => setSexo(target.value)}
      />
      <button onClick={validar}>v</button>
      <button onClick={reset}>v</button>
    </div>
  );
}

export default Ex03;
