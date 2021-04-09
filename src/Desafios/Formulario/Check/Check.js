import React, { useState } from "react";

// import { Container } from './styles';

function Check() {
  const [check, setCheck] = useState("");

  return (
    <div>
      <input
        type="checkbox"
        value="termos"
        checked={check}
        onChange={({ target }) => setCheck(target.checked)}
      />
    </div>
  );
}

export default Check;
