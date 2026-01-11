import { Navigate, Outlet, useLocation } from "react-router";
import useAuthContext from "../contexts/useAuthContext";

export default function PublicLayout() {
  const { user } = useAuthContext();
  const location = useLocation();

  if (!user) {
    return <Outlet />;
  }
  return <Navigate to={location?.state || "/"} replace />;
}
