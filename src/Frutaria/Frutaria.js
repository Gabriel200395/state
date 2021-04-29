import { useState } from "react";

function Frutaria() {
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
      name: "frutaItem",
      label: "frutaItem",
    },
    {
      type: "number",
      name: "quantidade",
      label: "quantidade",
    },
  ];

  const [stateInputs, setStateInputs] = useState({
    frutaItem: "",
    quantidade: "",
  });
  const [erro, setErro] = useState(null);
  const [total, setTotal] = useState([]);

  function handleValid(name) {
    if (name.length === 0) {
      setErro(true);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function handleChange(event) {
    erro && handleValid(event.target.value);
    setStateInputs({ ...stateInputs, [event.target.name]: event.target.value });
  }

  function handleBlur({ target }) {
    handleValid(target.value);
  }

  function handleCalcular() {
    const { frutaItem, quantidade } = stateInputs;
    arrayFruta.forEach((fruta) => {
      if (frutaItem === fruta.item) {
        const calcular = +quantidade * fruta.preco;
        setTotal([...total, calcular]);
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { frutaItem, quantidade } = stateInputs;
    if (!handleValid(frutaItem, quantidade)) {
      setErro(true);
    } else {
      setErro(false);
    }
  }

  function handleTotal() {
    const valor = total.reduce((preco, totalItem) => {
      return preco + totalItem;
    }, 0);
    console.log(valor);
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
      <form onSubmit={handleSubmit}>
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
        <button onClick={handleTotal}>total</button>
      </form>
    </section>
  );
}

export default Frutaria;
