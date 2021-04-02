import { useState } from "react";

function Ex10() {
  const [salario, setSalario] = useState("");

  const aumento = () => {};

  return (
    <div>
      <input
        type="number"
        value={salario}
        onChange={({ target }) => setSalario(target.value)}
      />
      <button onClick={aumento}>Mostrar Aumento</button>
    </div>
  );
}

export default Ex10;
