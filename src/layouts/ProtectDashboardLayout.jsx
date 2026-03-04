import { Navigate, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/loaders/LoadingSpinner";

export default function ProtectDashboardLayout({ allowRole }) {
  const { role, isLoading } = useRole();

  if (isLoading) return <LoadingSpinner />;

  if (!allowRole.includes(role)) {
    return <Navigate to='/dashboard' replace />;
  }

  return <Outlet />;
}
