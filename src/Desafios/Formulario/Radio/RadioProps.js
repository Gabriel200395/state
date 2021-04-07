import React, { useState } from "react";

const radioParams = [
  {
    id: "facebook",
    label: "Facebook",
    type: "radio",
  },
  {
    id: "instagram",
    label: "Instagram",
    type: "radio",
  },
  {
    id: "twiteer",
    label: "Twiteer",
    type: "radio",
  },
];

function RadioProps() {
  const [radio, setRadio] = useState("");

  return (
    <>
      {radioParams.map((rad) => (
        <label key={rad.id}>
          <input
            type={rad.type}
            value={rad.id}
            checked={radio === rad.id}
            onChange={({ target }) => setRadio(target.value)}
          />
          {rad.label}
        </label>
      ))}
    </>
  );
}

export default RadioProps;
