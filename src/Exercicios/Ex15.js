import { useState } from "react";

function Ex15() {
  const fildsCampos = [
    {
      id: "hora",
      label: "hora",
      type: "number",
    },
    {
      id: "valor",
      label: "valor",
      type: "number",
    },
    {
      id: "dias",
      label: "dias",
      type: "number",
    },
  ];

  const [salario, setSalario] = useState({ hora: "", valor: "", dias: "" });
  const [mensal, setMensal] = useState(0);
  const [ir, setIr] = useState(0);
  const [inss, setInss] = useState(0);
  const [sindicato, setSindicato] = useState(0);
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);

  function handleChange(event) {
    setSalario({ ...salario, [event.target.name]: event.target.value });
  }

  function calcularSalario() {
    const { hora, valor, dias } = salario;
    const totalS = hora * valor * dias;
    setMensal(totalS);
    setIr(totalS * 0.11);
    setInss(totalS * 0.08);
    setSindicato(totalS * 0.05);
    setTotal(totalS - (totalS * 0.11 + totalS * 0.08 + totalS * 0.05));
    setModal(!modal);

    if (!totalS) {
      setModal(false);
    }
  }

  return (
    <div className="App">
      {modal ? (
        <div>
          <p>
            O seu salario mensal e de
            {mensal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p>
            desconto Ir:
            {ir.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>
          <p>
            desconto inss:
            {inss.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p>
            desconto sindicato:
            {sindicato.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p>
            total:
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      ) : (
        "vamos fazer o calculo"
      )}
      <div>
        {fildsCampos.map(({ id, label, type }) => (
          <div key={id}>
            <labe>{label}</labe>
            <input
              type={type}
              name={id}
              value={salario[id]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button onClick={calcularSalario}>calcular</button>
      </div>
    </div>
  );
}

export default Ex15;
