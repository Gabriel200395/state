import { useState } from "react";

function Frutaria() {
  // state de array de frutas ok
  // state de input ok
  //state de erro ok
  // variaveis de preco ok;
  // state total dos valores array
  //validar inputs ok
  // incrementar valores de comprar

  const arrayFruta = [
    { item: "1", fruta: "maca", preco: 2.0 },
    { item: "2", fruta: "banana", preco: 3.0 },
    { item: "3", fruta: "laranja", preco: 1.5 },
    { item: "4", fruta: "melancia", preco: 5.0 },
    { item: "5", fruta: "pera", preco: 1.2 },
  ];

  const inputs = [
    {
      type: "number",
      name: "item",
      label: "item",
    },
    {
      type: "number",
      name: "quantidade",
      label: "quantidade",
    },
  ];

  const [stateInputs, setStateInputs] = useState({ item: "", quantidade: "" });
  const [erro, setErro] = useState(false);

  function handleValid(name) {
    if (name.length == "") {
      setErro(true);
      return false;
    } else {
      setErro(false);
      return true;
    }
  }

  function handleChange(event) {
    setStateInputs({ ...stateInputs, [event.target.name]: event.target.value });
  }

  function handleBlur({ target }) {
    handleValid(target.value);
  }

  function handleCalcular() {
    // for (let i = 0; i <= arrayFruta.length; i++) {
    //   const items = arrayFruta[i];
    // }
  }

  return (
    <section>
      <h2>Sistema de Fruttaria</h2>
      <div>
        {arrayFruta.map(({ fruta, preco, item }) => (
          <div
            key={fruta}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ margin: "0px 15px" }}>
              {item}- {fruta}
            </p>
            <strong>
              {preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>
        ))}
      </div>
      <form onSubmit={(event) => event.preventDefault()}>
        {inputs.map(({ type, name, label }) => (
          <div key={name}>
            <label>
              {label}
              <input
                type={type}
                name={name}
                value={stateInputs[name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>
        ))}
        {erro && <p>voce não prencheu os campos</p>}
        <button onClick={handleCalcular}>calcular</button>
        <button>total</button>
      </form>
    </section>
  );
}

export default Frutaria;
