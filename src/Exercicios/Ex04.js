import { useState } from "react";

function Ex04() {
  const [nota, setNota] = useState("");
  const [media, setMedia] = useState([]);
  const [calcula, setCalcula] = useState(0);

  function mostrarMedia() {
    media.push(+nota);
    setMedia(media);

    const c = media.reduce((total, valor) => {
      return valor + total;
    }, 0);
    setCalcula(c);

    if (media.length > 4) {
      alert("Ops! As quatro Notas foram colocadas.");
      setNota(" ");
      setMedia([]);
    }
  }

  return (
    <div className="App">
      <div>
        {media.length === 4 ? calcula / 4 : "Coloque quatros Notas Bimestrais"}
      </div>
      <input
        type="number"
        name="nota"
        value={nota}
        onChange={({ target }) => setNota(target.value)}
      />
      <button onClick={mostrarMedia}>calcular</button>
    </div>
  );
}

export default Ex04;
