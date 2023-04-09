import { Navigate } from "react-router-dom";

const DoctorProtect = ({ children, user }) => {
  if (user && user.role !== "Doctor") {
    return <Navigate to="/doctor/dashboard" />;
  }

  return children;
};

export default DoctorProtect;
