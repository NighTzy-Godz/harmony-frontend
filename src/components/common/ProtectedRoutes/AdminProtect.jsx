import { Navigate } from "react-router-dom";

const AdminProtect = ({ children, user }) => {
  if (user.role && user.role !== "Admin") {
    return <Navigate to={`/${user.role.toLowerCase()}/dashboard`} />;
  }

  return children;
};

export default AdminProtect;
