import React, { useContext } from "react";
import { FormContext } from "./Form";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder = "Type Here ...",
}) => {
  const formContext = useContext(FormContext);
  const { data, handleChange } = formContext;
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        autoComplete={name}
        type={type}
        name={name}
        id={name}
        value={data[name]}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};

export default FormInput;
