import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ label, path }) => {
  return (
    <React.Fragment>
      <Link to={path}>{label}</Link>
    </React.Fragment>
  );
};

export default LinkButton;
