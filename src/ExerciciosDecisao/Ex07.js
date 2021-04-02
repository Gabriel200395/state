import { useState } from "react";

function Ex07() {
  const [produtos, setProdutos] = useState([
    { tenis: 60 + " R$" },
    { camisa: 20 + " R$" },
    { calca: 80 + " R$" },
  ]);

  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");

  const handleChange = ({ target }) => {
    setProduto(target.value);
  };

  const mostrarPreco = () => {
    const [a, b, c] = produtos;

    const tenis = produto === "tenis" && a.tenis;
    const camisa =
      produto === "camisa" && b.camisa + " esse produto e o mais barato!!!";
    const calca = produto === "calca" && c.calca;
    const naoValido =
      produto !== tenis || produto !== camisa || produto !== calca
        ? "produto invalido!!"
        : "";

    setPreco(tenis || camisa || calca || naoValido);
  };

  return (
    <div>
      {preco}
      <input type="text" value={produto} onChange={handleChange} />
      <button onClick={mostrarPreco}>Mostrar preco</button>
    </div>
  );
}

export default Ex07;
