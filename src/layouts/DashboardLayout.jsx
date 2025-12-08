import { Outlet } from "react-router";
import useAuthContext from "../contexts/useAuthContext";

export default function DashboardLayout() {
  const { isLoading } = useAuthContext();
  return <div>{isLoading ? <p>Loading.....</p> : <Outlet />}</div>;
}
