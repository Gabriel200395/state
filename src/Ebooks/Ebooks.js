import { useReducer } from "react";

const initialValues = {
  input: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "input": {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
  }
}

function Ebooks() {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const { input } = state;

  return (
    <div>
      <h2>Sobre Reducer</h2>
      <form>
        <input
          type="text"
          name="input"
          value={input}
          onChange={({ target }) =>
            dispatch({ type: "input", name: "input", value: target.value })
          }
        />
      </form>
    </div>
  );
}

export default Ebooks;
