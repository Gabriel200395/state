import { useState } from "react";

function Validando() {
  const [input, setInput] = useState("");
  const [erro, setErro] = useState(null);

  const handleValid = (value) => {
    if (value.length === 0) {
      setErro(true);
      return false;
    } else {
      setErro(null);
      return true;
    }
  };

  const handleChange = ({ target }) => {
    erro && handleValid(target.value);
    setInput(target.value);
  };

  const handleBlur = ({ target }) => {
    handleValid(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValid(input)) {
      console.log("enviou");
    } else {
      console.log("nao enviou");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {erro && <p>voce esqueceu de preencher campo</p>}
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Validando;
