import { useReducer } from "react";

const stateValues = {
  comentarioArray: ["2", "1", "3", "4", "5", "6"],
  mostrar: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "adicionar": {
      return {
        ...state,
        comentarioArray: action.array.sort((a, b) => (a > b ? -1 : 1)),
        mostrar: true,
      };
    }
  }
}

function Ex14() {
  const [state, dispatch] = useReducer(reducer, stateValues);
  const { comentarioArray, mostrar } = state;

  console.log(comentarioArray.sort((a, b) => console.log(b)));

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

export default Ex14;
