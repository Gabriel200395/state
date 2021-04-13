import { useState } from "react";

function Ex04() {
  const [habitantes, setHabitantes] = useState({
    habitanteA: "",
    habitanteB: "",
  });

  function handleChange({ target }) {
    setHabitantes({ ...habitantes, [target.id]: target.value });
  }

  let ano = 0;
  function handleClick() {
    const { habitanteA, habitanteB } = habitantes;
    while (+habitanteA <= +habitanteB) {
      const v = habitanteA * 0.3;
      const l = habitanteB * 0.15;
      ano += 1;
      console.log(l);
      console.log(v);
      console.log(ano);

      break;
    }
  }

  return (
    <>
      A
      <input
        type="number"
        id="habitanteA"
        value={habitantes.habitanteA}
        onChange={handleChange}
      />
      B
      <input
        type="number"
        id="habitanteB"
        value={habitantes.habitanteB}
        onChange={handleChange}
      />
      <button onClick={handleClick}>habitantes</button>
    </>
  );
}

export default Ex04;
