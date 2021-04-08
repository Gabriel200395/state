import { useState } from "react";

const types = {
  nome: {
    message: "Voce esqueceu de escrever o nome",
  },
  email: {
    message: "Voce esqueceu de colocar o e-mail",
  },
};

function Validando(type) {
  const [input, setInput] = useState("");
  const [erro, setErro] = useState(null);

  const handleValid = (value) => {
    if (value.length === 0) {
      setErro(types[type].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  };

  const handleChange = ({ target }) => {
    handleValid(target.value);
    setInput(target.value);
  };

  return {
    input,
    erro,
    setInput,
    handleChange,
    onBlur: () => handleValid(input),
    validade: () => handleValid(input),
  };
}

export default Validando;
