import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // ⏳ wait until user loads from localStorage
  if (loading) {
    return <p>Loading...</p>;
  }

  // 🚫 if not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // ✅ if logged in
  return children;
};

export default ProtectedRoute;