import { Navigate, Outlet, useLocation } from "react-router";
import useAuthContext from "../contexts/useAuthContext";

export default function PrivateLayout() {
  const { user } = useAuthContext();
  const location = useLocation();

  if (!user) {
    return <Navigate state={location?.pathname} to='/login' replace></Navigate>;
  }
  return <Outlet />;
}
