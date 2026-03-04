import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../contexts/useAuthContext";
import LoadingSpinner from "../components/loaders/LoadingSpinner";

export default function PrivateLayout() {
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
    return <Navigate state={location?.pathname} to='/login' replace></Navigate>;
  }
  return <Outlet />;
}
