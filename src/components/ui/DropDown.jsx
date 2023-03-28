import React, { useContext } from "react";
import { FormContext } from "../common/Form";

const DropDown = ({ label, name, data: values, firstOption = "" }) => {
  const formContext = useContext(FormContext);
  const { data, handleChange } = formContext;

  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} value={data[name]} onChange={handleChange}>
        {values.map((item, index) => {
          return <option key={item.id}>{item.name}</option>;
        })}
      </select>
    </React.Fragment>
  );
};

export default DropDown;
