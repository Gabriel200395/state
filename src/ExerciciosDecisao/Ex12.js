import { useState } from "react";

function Ex12() {
  const [dia, setDia] = useState("");
  const [mostrar, setMostrar] = useState("");

  function validandoDia() {
    switch (Number(dia)) {
      case 1:
        setMostrar("domingo");
        break;
      case 2:
        setMostrar("segunda");
        break;
      case 3:
        setMostrar("terca");
        break;
      case 4:
        setMostrar("quarta");
        break;
      case 5:
        setMostrar("quinta");
        break;
      case 6:
        setMostrar("sexta");
        break;
      case 7:
        setMostrar("sabado");
        break;
      default:
        setMostrar("valor inválido");
    }
  }

  return (
    <div>
      {mostrar}
      <input
        type="number"
        value={dia}
        onChange={({ target }) => setDia(target.value)}
      />
      <button onClick={validandoDia}>dia</button>
    </div>
  );
}

export default Ex12;
