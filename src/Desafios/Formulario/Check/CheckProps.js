import { useState } from "react";

const camposCheck = [
  {
    id: "facebook",
    type: "checkbox",
    label: "Facebook",
  },
  {
    id: "instagram",
    type: "checkbox",
    label: "Instagram",
  },
  {
    id: "twiteer",
    type: "checkbox",
    label: "twiteer",
  },
];

function CheckProps() {
  const [check, setCheck] = useState([]);

  function handleChange({ target }) {
    target.checked
      ? setCheck([...check, target.value])
      : setCheck(check.filter((cor) => cor !== target.value));
  }

  console.log(check);

  return (
    <div>
      {camposCheck.map(({ id, label, type }) => (
        <label key={id}>
          <input
            type={type}
            value={id}
            checked={check.includes(id)}
            onChange={handleChange}
          />
          {label}
        </label>
      ))}
    </div>
  );
}

export default CheckProps;
