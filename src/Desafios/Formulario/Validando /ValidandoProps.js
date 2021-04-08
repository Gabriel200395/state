import useValid from "./useValid";

const Input = ({ erro, input, handleChange, onBlur }) => {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {erro}
    </div>
  );
};

function ValidandoProps() {
  const nome = useValid("nome");
  const email = useValid("email");

  function handleSubmit(event) {
    event.preventDefault();

    if (nome.validade() && email.validade()) {
      console.log("enviou");
      nome.setInput("");
      email.setInput("");
    } else {
      console.log("erro!");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input {...nome} />
        <Input {...email} />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default ValidandoProps;
