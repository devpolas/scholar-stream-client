import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../contexts/useAuthContext";
import LoadingSpinner from "../components/loaders/LoadingSpinner";

export default function PublicLayout() {
  const { user, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return <Outlet />;
  }
  return <Navigate to={location?.state || "/"} replace />;
}
