import React from "react";

const Button = ({ color, label, btnEvent = () => {} }) => {
  return (
    <React.Fragment>
      <button style={{ backgroundColor: color }} onClick={btnEvent}>
        {label}
      </button>
    </React.Fragment>
  );
};

export default Button;
