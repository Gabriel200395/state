import { useState } from "react";

const InputProps = ({ state, setState, type }) => {
  return (
    <>
      <input
        type={type}
        value={state}
        onChange={({ target }) => setState(target.value)}
      />
    </>
  );
};

function Input() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <InputProps state={value} setState={setValue} type="email" />
      <InputProps state={value1} setState={setValue1} type="text" />

      <button>Enviar</button>
    </form>
  );
}

export default Input;
