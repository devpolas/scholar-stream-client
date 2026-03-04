import { Navigate, Outlet, useLocation } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/loaders/LoadingSpinner";

export default function DashboardLayout() {
  const { role, isLoading } = useRole();
  const location = useLocation();

  const dashboardRole = `${role}`.toLocaleLowerCase();

  if (isLoading) return <LoadingSpinner />;

  if (location.pathname === "/dashboard") {
    return <Navigate to={`/dashboard/${dashboardRole}`} replace />;
  }

  return <Outlet />;
}
