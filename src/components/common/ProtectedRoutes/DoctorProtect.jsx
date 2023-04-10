import { Navigate } from "react-router-dom";

const DoctorProtect = ({ children, user }) => {
  if (user.role && user.role !== "Doctor") {
    return <Navigate to={`/${user.role.toLowerCase()}/dashboard`} />;
  }

  return children;
};

export default DoctorProtect;
