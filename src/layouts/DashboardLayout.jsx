import useAuthContext from "../contexts/useAuthContext";
import Profile from "../components/profile/Profile";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../hooks/useAxios";
import StudentDashboard from "../dashboard/StudentDashboard";
import ModeratorDashboard from "../dashboard/ModeratorDashboard";
import AdminDashboard from "../dashboard/AdminDashboard";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: currentUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return await axiosSecure.get(`/users/me`);
    },
  });

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  const role = currentUser.data?.data?.role;

  let dashboard;
  if (role === "student") {
    dashboard = <StudentDashboard />;
  } else if (role === "moderator") {
    dashboard = <ModeratorDashboard />;
  } else if (role === "admin") {
    dashboard = <AdminDashboard />;
  }

  return (
    <div>
      <Profile user={user} />
      {dashboard}
      <Outlet />
    </div>
  );
}
