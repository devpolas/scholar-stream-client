import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../hooks/useAxios";
import ApplicationTable from "../components/application/ApplicationTable";
import useRole from "../hooks/useRole";

export default function ApplicationsPage() {
  let url;
  const axiosSecure = useAxiosSecure();
  const { role, id } = useRole();
  if (role === "student") {
    url = `/users/${id}/applications`;
  } else if (role === "moderator" || role === "admin") {
    url = "/applications";
  }
  const { isLoading, data } = useQuery({
    queryKey: ["applications", role, id],
    queryFn: async () => {
      return await axiosSecure.get(url);
    },
  });

  if (isLoading) {
    return;
  }

  const applications = data.data.data;

  return (
    <div>
      <ApplicationTable applications={applications} />
    </div>
  );
}
