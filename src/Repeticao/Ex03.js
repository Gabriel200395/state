import React, { useRef, useState } from "react";

function Ex03() {
  const refName = useRef(null);
  const refIdade = useRef(null);
  const refSalario = useRef(null);
  const refEstadoCivil = useRef(null);
  const refSexo = useRef(null);

  function validarDados() {
    if (refName.current.value.length <= 3) {
      console.log("erro");
    }
    if (refIdade.current.value > 0 && refIdade.current.value < 150) {
      console.log("idade validar");
    }
    if (refSalario.current.value > 0) {
      console.log("Salario valido!!");
    }
    if (refSexo.current.value === "m" || refSexo.current.value === "f") {
      console.log("Sexo valido!!");
    }
    if (
      refEstadoCivil.current.value === "s" ||
      refSexo.current.value === "c" ||
      refEstadoCivil.current.value === "v" ||
      refSexo === "d"
    ) {
      console.log("Estado civil valido!!");
    }
  }

  return (
    <>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          height: "60px",
        }}
      >
        Nome
        <input type="text" ref={refName} />
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          height: "60px",
        }}
      >
        Idade
        <input type="number" ref={refIdade} />
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          height: "60px",
        }}
      >
        Salario
        <input type="number" ref={refSalario} />
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          height: "60px",
        }}
      >
        Estado Civil
        <input type="text" ref={refEstadoCivil} />
      </label>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          height: "60px",
        }}
      >
        Sexo
        <input type="text" ref={refSexo} />
      </label>
      <button onClick={validarDados}>Verificar Valor</button>
    </>
  );
}

export default Ex03;
