import { useState } from "react";

function Ex17() {
  const [input, setInput] = useState("");
  const [filtro, setFiltro] = useState("");
  const [comentario, setComentario] = useState([]);
  const [comentarioFiltrado, setComentarioFiltrado] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setComentario([...comentario, input]);
    setComentarioFiltrado([...comentario, input]);
  }

  function handleChange({ target }) {
    setInput(target.value);
  }

  function handleChangeComentario({ target }) {
    setFiltro(target.value);
    setComentarioFiltrado(comentario.filter((c) => c.includes(target.value)));
  }

  function removerComentario(item) {
    const r = comentario.filter((c) => c !== item);
    setComentario(r);
    setComentarioFiltrado(r);
  }

  return (
    <>
      {comentarioFiltrado.map((item) => (
        <div key={item}>
          <p>
            {item}
            <button onClick={() => removerComentario(item)}>remover</button>
          </p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          filtro:
          <input type="text" value={filtro} onChange={handleChangeComentario} />
        </label>
        <input type="text" value={input} onChange={handleChange} />
        <button>Addicionar Comentário</button>
      </form>
    </>
  );
}

export default Ex17;
