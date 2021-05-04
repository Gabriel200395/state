import { useReducer, useState } from "react";

const items = [
  {
    item: "1",
  },
  {
    item: "2",
  },
  {
    item: "3",
  },
  {
    item: "4",
  },
  {
    item: "5",
  },
  {
    item: "6",
  },
  {
    item: "7",
  },
];

const initialValues = {
  select: "7",
  array: items,
};

function reducer(state, action) {
  switch (action.type) {
    case "input": {
      return {
        ...state,
        select: action.valor,
        array: [...action.estado],
      };
    }
  }
}

function Paginacao() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const { select, array } = state;

  function handleChange({ target }) {
    dispatch({ type: "input", valor: target.value, estado: items });
  }

  array.length = select;

  return (
    <div>
      <h2>Paginacao</h2>
      {array.map((item) => (
        <ul key={item.item}>
          <li>{item.item}</li>
        </ul>
      ))}
      <select value={select} onChange={handleChange}>
        <option value="7">selecione</option>
        <option value="2">2</option>
      </select>
    </div>
  );
}

export default Paginacao;
