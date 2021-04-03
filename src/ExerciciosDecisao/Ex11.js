import { useState } from "react";

function Ex11() {
  const [salario, setSalario] = useState("");

  const [ir, setIr] = useState("");
  const [valorIr, setValorIr] = useState("");

  const [fgts, setFgts] = useState("");
  const [valorFgts, setValorFgts] = useState("");

  const [inss, setInss] = useState("");
  const [valorInss, setValorInss] = useState("");

  const [descontos, setDescontos] = useState("");
  const [liquido, setLiquido] = useState("");

  function novoSalario() {
    const ajuste1 = 0.05;
    const ajuste2 = 0.1;
    const ajuste3 = 0.2;
    const ajusteInss = 0.1;
    const ajusteFgts = 0.11;

    if (salario <= 900) {
      setValorIr("nenhum desconto");
      setIr(0);
      setValorFgts("nenhum desconto");
      setFgts(0);
      setValorInss("nenhum desconto");
      setInss(0);
      setDescontos("nenhum desconto");
      setLiquido(salario);
    } else if (salario > 900 && salario <= 1500) {
      const calcular = +salario * ajuste1;
      const calcular1 = +salario * ajusteInss;
      const calcular2 = +salario * ajusteFgts;
      const total = calcular + calcular1;
      setIr(ajuste1);
      setValorIr(calcular);
      setInss(ajusteInss);
      setValorInss(calcular1);
      setFgts(ajusteFgts);
      setValorFgts(calcular2);
      setDescontos(total);
      setLiquido(+salario - total);
    } else if (salario > 1500 && salario <= 2500) {
      const calcular = +salario * ajuste2;
      const calcular1 = +salario * ajusteInss;
      const calcular2 = +salario * ajusteFgts;
      const total = calcular + calcular1;
      setIr(ajuste2);
      setValorIr(calcular);
      setInss(ajusteInss);
      setValorInss(calcular1);
      setFgts(ajusteFgts);
      setValorFgts(calcular2);
      setDescontos(total);
      setLiquido(+salario - total);
    } else if (salario > 2500) {
      const calcular = +salario * ajuste3;
      const calcular1 = +salario * ajusteInss;
      const calcular2 = +salario * ajusteFgts;
      const total = calcular + calcular1;
      setIr(ajuste3);
      setValorIr(calcular);
      setInss(ajusteInss);
      setValorInss(calcular1);
      setFgts(ajusteFgts);
      setValorFgts(calcular2);
      setDescontos(total);
      setLiquido(+salario - total);
    }
  }

  return (
    <div>
      <>
        <p>
          o seu salario antes descontos
          <br />
          {salario.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          Ir: {ir}
          <br />
          {valorIr.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          Inss: {inss}
          <br />
          {valorInss.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          fgts: {fgts}
          <br />
          {valorFgts.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          desconstos:
          <br />
          {descontos.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          salario liquido{" "}
          {liquido.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}{" "}
        </p>
      </>
      <input
        type="number"
        value={salario}
        onChange={({ target }) => setSalario(target.value)}
      />
      <button onClick={novoSalario}>verificar salario</button>
    </div>
  );
}

export default Ex11;
