import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token"); // check token in local storage

  if (!token) {
    // if no token, redirect to login
    return <Navigate to="/login" replace />;
  }

  // otherwise render the protected content
  return children;
}
