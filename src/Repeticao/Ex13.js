import { useReducer } from "react";

const stateValues = {
  comentarioArray: ["1", "2", "3", "4", "5", "6"],
  mostrar: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "adicionar": {
      return {
        ...state,
        comentarioArray: [...action.array],
        mostrar: true,
      };
    }
  }
}

function Ex13() {
  const [state, dispatch] = useReducer(reducer, stateValues);
  const { comentarioArray, mostrar } = state;

  function addComentario() {
    dispatch({
      type: "adicionar",
      array: comentarioArray,
    });
  }

  return (
    <div>
      {mostrar && comentarioArray}
      <button onClick={addComentario}>mostrar numero</button>
    </div>
  );
}

export default Ex13;
