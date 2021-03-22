import { useState } from "react";

function Ex04() {
  const [funcionario, setFuncionario] = useState({
    hora: "",
    horasT: "",
    dias: "",
  });

  const [calcular, setCalcular] = useState(0);

  function handleChange(event) {
    setFuncionario({ ...funcionario, [event.target.name]: event.target.value });
  }

  function salario() {
    const { hora, horasT, dias } = funcionario;
    const quantidadesHV = +hora * +horasT * +dias;
    setCalcular(quantidadesHV);
  }

  return (
    <div className="App">
      <div>
        {calcular.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <input
        type="number"
        name="hora"
        value={funcionario.hora}
        onChange={handleChange}
      />
      <input
        type="number"
        name="horasT"
        value={funcionario.horaT}
        onChange={handleChange}
      />
      <input
        type="number"
        name="dias"
        value={funcionario.dias}
        onChange={handleChange}
      />
      <button onClick={salario}>calcular</button>
    </div>
  );
}

export default Ex04;
