import { useReducer, useState } from "react";

const arrayFrutas = [
  { item: "1", fruta: "banana", preco: 1.99 },
  { item: "2", fruta: "laranja", preco: 1.5 },
];

const Frutas = () => {
  return (
    <>
      {arrayFrutas.map(({ item, fruta, preco }) => (
        <ul key={item}>
          <li>
            {item} - {fruta} {preco}
          </li>
        </ul>
      ))}
    </>
  );
};

const initialValues = {
  frutaItem: "",
  quantidade: "",
  erro: "",
  comprar: [],
  incrementar: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "input": {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case "erro": {
      return {
        ...state,
        erro: action.error,
      };
    }
    case "Item1": {
      return {
        ...state,
        comprar: action.array,
        incrementar: action.value,
        erro: "",
      };
    }
    case "Item2": {
      return {
        ...state,
        comprar: action.array,
        incrementar: action.value,
        erro: "",
      };
    }
    case "fruta não existente": {
      return {
        ...state,
        incrementar: 0,
        erro: action.error,
      };
    }
  }
}

function Frutaria() {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const { frutaItem, quantidade, erro, comprar, incrementar } = state;

  const calcular = () => {
    const [item1, item2] = arrayFrutas;
    const preco1 = frutaItem === item1.item && +quantidade * item1.preco;
    const preco2 = frutaItem === item2.item && +quantidade * item2.preco;

    preco1
      ? dispatch({
          type: "Item1",
          array: [...comprar, preco1],
          value: incrementar + 1,
        })
      : dispatch({
          type: "Item2",
          array: [...comprar, preco2],
          value: incrementar + 1,
        });
    handleValid(preco2, preco1);
  };

  function handleValid(preco1, preco2) {
    if (preco1 || preco2) {
      console.log("parabens pela comprar");
    } else {
      dispatch({ type: "fruta não existente", error: "fruta não existente" });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (quantidade.length == "" || frutaItem.length == "") {
      dispatch({ type: "erro", error: "Campos Não Preenchidos" });
    } else {
      calcular();
    }
  }

  const valorTotal = comprar.reduce((item, total) => {
    return item + total;
  }, 0);

  console.log(valorTotal);
  return (
    <>
      valor total: {valorTotal}
      <br />
      total de comprar: {incrementar}
      <br />
      {erro}
      <Frutas />
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={frutaItem}
          name="frutaItem"
          onChange={({ target }) =>
            dispatch({ type: "input", name: "frutaItem", value: target.value })
          }
        />
        <input
          type="number"
          value={quantidade}
          name="quantidade"
          onChange={({ target }) =>
            dispatch({
              type: "input",
              name: "quantidade",
              value: target.value,
            })
          }
        />
        <button>Comprar</button>
      </form>
    </>
  );
}

export default Frutaria;
