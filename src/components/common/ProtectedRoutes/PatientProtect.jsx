import { Navigate } from "react-router-dom";

const PatientProtect = ({ children, user }) => {
  if (user.role && user.role !== "Patient") {
    return <Navigate to={`/${user.role.toLowerCase()}/dashboard`} />;
  }

  return children;
};

export default PatientProtect;
