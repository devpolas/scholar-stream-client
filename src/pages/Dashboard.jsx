import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../hooks/useAxios.jsx";
import UserDashboard from "./UserDashboard.jsx";
import ModeratorDashboard from "./ModeratorDashboard.jsx";
import AdminDashboard from "./AdminDashboard.jsx";
export default function Dashboard() {
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: currentUser } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return axiosSecure.get(`/users/me`);
    },
  });

  if (isLoading) {
    return;
  }

  const role = currentUser.data?.data?.role;

  let dashboard;
  if (role === "student") {
    dashboard = <UserDashboard />;
  } else if (role === "moderator") {
    dashboard = <ModeratorDashboard />;
  } else if (role === "admin") {
    dashboard = <AdminDashboard />;
  }
  return <div>{dashboard}</div>;
}
