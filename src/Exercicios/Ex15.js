import { useState } from "react";

function Ex15() {
  const [salario, setSalario] = useState("");

  return (
    <div className="App">
      <div></div>
      <input type="number" />
      <button>calcular</button>
    </div>
  );
}

export default Ex15;
