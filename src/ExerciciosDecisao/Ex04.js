import { useState } from "react";

function Ex04() {
  const [vogal, setVogal] = useState("");
  const [va, setV] = useState("");

  function v() {
    (vogal &&
      setV(
        vogal === "a" ||
          vogal === "e" ||
          vogal === "i" ||
          vogal === "o" ||
          vogal === "u"
          ? "vogal"
          : "Consoante"
      )) ||
      (+vogal > 0 && setV("tipo numero"));
  }
  return (
    <div>
      {va}
      <input
        value={vogal}
        type="text"
        onChange={({ target }) => setVogal(target.value)}
      />
      <button onClick={v}>v</button>
    </div>
  );
}

export default Ex04;
