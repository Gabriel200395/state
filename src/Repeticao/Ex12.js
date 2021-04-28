import { useReducer, useState } from "react";

const stateValues = {
  comentarioArray: [],
  comentario: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "comentario": {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case "adicionar": {
      return {
        ...state,
        comentarioArray: [...action.array, action.content],
      };
    }
  }
}

function Ex12() {
  const [state, dispatch] = useReducer(reducer, stateValues);
  const { comentario, comentarioArray } = state;

  function addComentario() {
    dispatch({
      type: "adicionar",
      content: comentario,
      array: comentarioArray,
    });
  }

  return (
    <div>
      <h2>Adicioner um Comentario</h2>
      <button onClick={addComentario}>Adicionar Comentario</button>
    </div>
  );
}

export default Ex12;
