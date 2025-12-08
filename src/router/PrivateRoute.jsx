import { Navigate, useLocation } from "react-router";
import useAuthContext from "../contexts/useAuthContext";

export default function PrivateRoute({ children }) {
  const { user, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to='/login'></Navigate>;
  }

  return children;
}
