import { Navigate } from "react-router";
import useAuthContext from "../contexts/useAuthContext";

export default function PublicRoute({ children }) {
  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (!user) {
    return children;
  }

  return <Navigate to='/'></Navigate>;
}
