import { useState } from "react";

const perguntas = [
  {
    id: "per1",
    perguntar: "Js e uma linguagem de programação",
    options: ["sim", "não"],
    resposta: "sim",
  },
  {
    id: "per2",
    perguntar: "HTML e uma linguagem de programação",
    options: ["sim", "não"],
    resposta: "não",
  },
];

const Radio = ({ active, id, perguntar, options, state, handleChange }) => {
  if (active === false) return null;
  return (
    <label>
      {perguntar}
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={id}
            value={option}
            checked={state === option}
            onChange={handleChange}
          />
          {option}
        </div>
      ))}
    </label>
  );
};

function DesafioForm() {
  const [state, setState] = useState({ per1: "", per2: "" });

  const [slide, setSlide] = useState(0);
  const [resposta, setResposta] = useState("");

  function handleChange({ target }) {
    setState({ ...state, [target.id]: target.value });
  }

  function validar() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => state[id] === resposta
    );

    setResposta(" voce acertou " + corretas.length + " de " + corretas.length);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      validar();
    }
  }

  return (
    <div>
      {perguntas.map((p, index) => (
        <Radio
          key={p.id}
          {...p}
          state={state[p.id]}
          handleChange={handleChange}
          active={slide === index}
        />
      ))}
      {resposta ? (
        <p>{resposta}</p>
      ) : (
        <button onClick={handleClick}>Avançar</button>
      )}
    </div>
  );
}

export default DesafioForm;
