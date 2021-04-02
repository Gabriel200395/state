import { useState } from "react";

function Ex09() {
  const [turno, setTurno] = useState("");
  const [mostra, setMostra] = useState("");

  const validaTurno = () => {
    switch (turno) {
      case "M":
        setMostra("bom dia!!");
        break;
      case "V":
        setMostra("boa tarde!!");
        break;
      case "N":
        setMostra("Boa noite!!");
        break;
      default:
        setMostra("Valor Inválido");
    }
  };

  return (
    <div>
      {mostra}
      <input
        type="text"
        value={turno}
        onChange={({ target }) => setTurno(target.value)}
      />
      <button onClick={validaTurno}>Turno</button>
    </div>
  );
}

export default Ex09;
