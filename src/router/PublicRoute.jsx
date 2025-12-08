import { Navigate, useLocation } from "react-router";
import useAuthContext from "../contexts/useAuthContext";

export default function PublicRoute({ children }) {
  const { user, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (!user) {
    return children;
  }
  return <Navigate to={location?.state || "/"} replace />;
}
