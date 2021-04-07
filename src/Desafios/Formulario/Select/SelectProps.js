import React, { useState } from "react";

// import { Container } from './styles';

const options = [
  {
    option: "instagram",
  },

  {
    option: "facebook",
  },
  {
    option: "twiter",
  },
];

function SelectProps() {
  const [select, setSelect] = useState("facebook");

  return (
    <>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        {options.map(({ option }) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {select}
    </>
  );
}

export default SelectProps;
