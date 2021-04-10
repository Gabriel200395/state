import { useState } from "react";

function Ex13() {
  const [materia, setMateria] = useState({ materia1: "", materia2: "" });
  const [mediaNota, setMediaNota] = useState("");

  function handleChange({ target }) {
    setMateria({ ...materia, [target.name]: target.value });
  }

  function handleClick() {
    const { materia1, materia2 } = materia;
    const media = (+materia1 + +materia2) / 2;

    media > 9 && media <= 10 && setMediaNota("A parabens você foi aprovado!");
    media > 7.5 && media <= 9 && setMediaNota("B parabens você foi aprovado!");
    media > 6.0 &&
      media <= 7.5 &&
      setMediaNota("C parabens você foi aprovado!");
    media > 4 && media <= 6 && setMediaNota("D você foi reprovado!");
    media > 0 && media <= 4 && setMediaNota("E você foi reprovado!");
  }

  return (
    <div>
      {mediaNota}
      <input
        type="number"
        name="materia1"
        value={materia.materia1}
        onChange={handleChange}
      />
      <input
        type="number"
        name="materia2"
        value={materia.materia2}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Calcular Nota</button>
    </div>
  );
}

export default Ex13;
