import { useState } from "react";

function Ex14() {
  const [triangulo, setTriangulo] = useState({
    lado1: "",
    lado2: "",
    lado3: "",
  });

  const [tipoTriangulo, setTipoTriangulo] = useState("");

  function handleChange({ target }) {
    setTriangulo({ ...triangulo, [target.name]: target.value });
  }

  function handleClick() {
    const { lado1, lado2, lado3 } = triangulo;
    const tr = +lado1 + +lado2;

    if (tr > +lado3) {
      setTipoTriangulo("Triangulo");
    } else if (+lado1 === +lado2) {
      setTipoTriangulo("Isoceles");
    } else if ((+lado1 != +lado2) != lado3) {
      setTipoTriangulo("Escalano");
    }
  }

  return (
    <div>
      {tipoTriangulo}
      <input
        value={triangulo.lado1}
        type="number"
        name="lado1"
        onChange={handleChange}
      />
      <input
        value={triangulo.lado2}
        type="number"
        name="lado2"
        onChange={handleChange}
      />
      <input
        value={triangulo.lado3}
        type="number"
        name="lado3"
        onChange={handleChange}
      />
      <button onClick={handleClick}>verificar</button>
    </div>
  );
}

export default Ex14;
