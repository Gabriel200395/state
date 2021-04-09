import { useState } from "react";

function Textearea() {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        value={text}
        onChange={({ target }) => setText(target.value)}
        rows={5}
      />
      <div>{text}</div>
    </div>
  );
}

export default Textearea;
