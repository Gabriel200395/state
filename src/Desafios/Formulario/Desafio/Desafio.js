import { useState } from "react";

const containes = [
  { pagina: "Pagina 1", background: "red" },
  { pagina: "Pagina 2", background: "blue" },
  { pagina: "Pagina 3", background: "yellow" },
];

const Container = ({ pagina, background, active }) => {
  if (active === false) return null;
  return (
    <div
      style={{
        background: background,
        width: "200px",
        height: "80px",
        color: "#fff",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      {pagina}
    </div>
  );
};

function Desafio() {
  const [slide, setSlide] = useState(0);

  function incremento() {
    if (slide < containes.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(0);
    }
  }

  return (
    <div>
      {containes.map(({ pagina, background }, index) => (
        <Container
          key={pagina}
          active={slide === index}
          pagina={pagina}
          background={background}
        />
      ))}
      <br />
      <button onClick={incremento}>Avançar</button>
    </div>
  );
}

export default Desafio;
