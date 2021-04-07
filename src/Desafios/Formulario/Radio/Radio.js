import React, { useState } from "react";

function Radio() {
  const [radio, setRadio] = useState("");

  return (
    <>
      {radio ? "input checado" : "input não"}
      <label>
        <input
          type="radio"
          value="facebook"
          checked={radio === "facebook"}
          onChange={({ target }) => setRadio(target.value)}
        />
        Facebook
      </label>
      <label>
        <input
          type="radio"
          value="instagram"
          checked={radio === "instagram"}
          onChange={({ target }) => setRadio(target.value)}
        />
        Instagram
      </label>
    </>
  );
}

export default Radio;
