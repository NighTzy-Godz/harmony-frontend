import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoutes;
