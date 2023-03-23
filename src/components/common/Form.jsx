import React, { useState } from "react";

export const FormContext = React.createContext({
  data: {},
});

const Form = (props) => {
  const { dataValues, className, submitEvent, children } = props;
  const [data, setData] = useState(dataValues);
  //   const { propData = data } = props;

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    const newData = {
      ...data,
      [name]: value,
    };

    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitEvent(data);
  };
  return (
    <React.Fragment>
      <form action="" onSubmit={handleSubmit} className={className}>
        <FormContext.Provider value={{ data, handleChange }}>
          {children}
        </FormContext.Provider>
      </form>
    </React.Fragment>
  );
};

export default Form;
