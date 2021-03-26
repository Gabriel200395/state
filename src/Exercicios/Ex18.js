import { useState } from "react";

function Ex18() {
  const [filtro, setFiltro] = useState("");
  const [comentario, setComentario] = useState([
    { nome: "Gabriel" },
    { nome: "Erica" },
  ]);
  const [comentarioFiltrado, setComentarioFiltrado] = useState(comentario);

  function handleChangeComentario({ target }) {
    setFiltro(target.value);
    setComentarioFiltrado(
      comentario.filter((c) => c.nome.includes(target.value))
    );
  }

  function removerComentario(item) {
    const r = comentario.filter((c) => c.nome !== item);
    setComentario(r);
    setComentarioFiltrado(r);
  }

  return (
    <>
      {comentarioFiltrado.map(({ nome }) => (
        <div key={nome}>
          <p>
            {nome}
            <button onClick={() => removerComentario(nome)}>remover</button>
          </p>
        </div>
      ))}
      <form>
        <label>
          filtro:
          <input type="text" value={filtro} onChange={handleChangeComentario} />
        </label>
      </form>
    </>
  );
}

export default Ex18;
