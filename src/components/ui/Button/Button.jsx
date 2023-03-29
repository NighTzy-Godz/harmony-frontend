import React from "react";

const Button = ({ label, btnEvent = () => {} }) => {
  return (
    <React.Fragment>
      <button onClick={btnEvent}>{label}</button>
    </React.Fragment>
  );
};

export default Button;
