import React, { useContext } from "react";
import { FormContext } from "./Form";

const TextArea = ({ name, label }) => {
  const formContext = useContext(FormContext);

  const { data, handleChange } = formContext;

  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={name}
        value={data[name]}
        onChange={handleChange}
        placeholder="Type Here..."
      ></textarea>
    </React.Fragment>
  );
};

export default TextArea;
