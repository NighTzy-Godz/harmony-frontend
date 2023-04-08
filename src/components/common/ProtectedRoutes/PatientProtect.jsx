import { Navigate } from "react-router-dom";

const PatientProtect = ({ children, user }) => {
  if (user && user.role !== "Patient") {
    return <Navigate to="/doctor/dashboard" />;
  }

  return children;
};

export default PatientProtect;
