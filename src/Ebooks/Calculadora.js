// colocar dentro de uma varial total a somar do valor!

import { useReducer } from "react";

const initialValues = {
  numero1: "",
  numero2: "",
  arrayTotal: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "numeros": {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case "somar": {
      return {
        ...state,
        arrayTotal: [...action.array, action.numero],
        numero1: "",
        numero2: "",
      };
    }
    case "subtrair": {
      return {
        ...state,
        arrayTotal: [...action.array, action.numero],
        numero1: "",
        numero2: "",
      };
    }
    case "divisao": {
      return {
        ...state,
        arrayTotal: [...action.array, action.numero],
        numero1: "",
        numero2: "",
      };
    }
    case "multiplicar": {
      return {
        ...state,
        arrayTotal: [...action.array, action.numero],
        numero1: "",
        numero2: "",
      };
    }
  }
}

function Calculadora() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const { numero1, numero2, arrayTotal } = state;

  console.log(arrayTotal);

  const calculo = arrayTotal.reduce((t, i) => {
    return t + i;
  }, 0);

  return (
    <div>
      {calculo}
      <h2>Calculadora</h2>
      <div>
        <input
          type="number"
          value={numero1}
          name="numero1"
          onChange={({ target }) =>
            dispatch({ type: "numeros", name: "numero1", value: target.value })
          }
        />

        <input
          type="number"
          value={numero2}
          name="numero2"
          onChange={({ target }) =>
            dispatch({ type: "numeros", name: "numero2", value: target.value })
          }
        />
        <button
          onClick={() =>
            dispatch({
              type: "somar",
              numero: +numero1 + +numero2,
              array: arrayTotal,
            })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "subtrair",
              numero: +numero1 - +numero2,
              array: arrayTotal,
            })
          }
        >
          -
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "multiplicar",
              numero: +numero1 * +numero2,
              array: arrayTotal,
            })
          }
        >
          *
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "divisao",
              numero: +numero1 / +numero2,
              array: arrayTotal,
            })
          }
        >
          /
        </button>
      </div>
    </div>
  );
}

export default Calculadora;
