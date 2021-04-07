import React, { useState } from "react";

// import { Container } from './styles';

function Select() {
  const [select, setSelect] = useState("facebook");

  return (
    <>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option selected value=""></option>
        <option value="facebook">facebook</option>
        <option value="instagram">instagram</option>
        <option value="twiteer">twiteer</option>
      </select>
      {select}
    </>
  );
}

export default Select;
