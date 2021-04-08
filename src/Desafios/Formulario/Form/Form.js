import { useState } from "react";

const campos = [
  {
    id: "nome",
    type: "text",
    label: "Nome",
  },
  {
    id: "sobreNome",
    type: "text",
    label: "SobreNome",
  },
];

function Form() {
  const [input, setInput] = useState({ nome: "", sobreNome: "" });

  const handleChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
  };

  return (
    <div>
      {campos.map(({ id, label, type }) => (
        <label>
          {label}
          <input
            type={type}
            name={id}
            value={input[id]}
            onChange={handleChange}
          />
        </label>
      ))}
      {input.nome}
      {input.sobreNome}
    </div>
  );
}

export default Form;
