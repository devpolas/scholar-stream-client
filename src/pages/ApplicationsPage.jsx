import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../hooks/useAxios";
import ApplicationTable from "../components/application/ApplicationTable";

export default function ApplicationsPage() {
  const axiosSecure = useAxiosSecure();
  const { isLoading, data } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      return await axiosSecure.get("/applications");
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
