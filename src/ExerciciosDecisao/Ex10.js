import { useState } from "react";

function Ex10() {
  const [salario, setSalario] = useState("");
  const [ajuste, setAjuste] = useState("");
  const [novoSalario, setNovoSalario] = useState("");
  const [porcentagem, setPorcentagem] = useState("");

  const aumento = () => {
    let ajuste1 = 0.2;
    let ajuste2 = 0.15;
    let ajuste3 = 0.1;
    let ajuste4 = 0.05;

    if (salario <= 280) {
      const ajusteSalario = +salario * ajuste1;
      const novo = ajusteSalario + +salario;
      setAjuste(ajusteSalario);
      setPorcentagem(ajuste1);
      setNovoSalario(novo);
    } else if (salario > 280 && salario <= 700) {
      const ajusteSalario = +salario * ajuste2;
      const novo = ajusteSalario + +salario;
      setAjuste(ajusteSalario);
      setPorcentagem(ajuste2);
      setNovoSalario(novo);
    } else if (salario > 700 && salario <= 1500) {
      const ajusteSalario = +salario * ajuste3;
      const novo = ajusteSalario + +salario;
      setAjuste(ajusteSalario);
      setPorcentagem(ajuste3);
      setNovoSalario(novo);
    } else if (salario > 1500) {
      const ajusteSalario = +salario * ajuste4;
      const novo = ajusteSalario + +salario;
      setAjuste(ajusteSalario);
      setPorcentagem(ajuste4);
      setNovoSalario(novo);
    }
  };

  return (
    <div>
      <>
        <p> o seu salario e de: {salario}</p>
        <p>teve um porcentual de ajuste de: {ajuste}</p>
        <p>teve um porcentual de ajuste de: {porcentagem}</p>
        <p>seu novo salario com os ajuste {novoSalario}</p>
      </>
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
