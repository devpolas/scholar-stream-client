import { useQuery } from "@tanstack/react-query";
import useRole from "../hooks/useRole";
import useAxiosSecure from "../hooks/useAxios";

export default function ReviewsPage() {
  let url;
  const axiosSecure = useAxiosSecure();
  const { id, role } = useRole();
  if (role === "student") {
    url = `/users/${id}/reviews`;
  } else if (role === "moderator" || role === "admin") {
    url = "/reviews";
  }
  const { data } = useQuery({
    queryKey: ["reviews", id],
    queryFn: async () => {
      const res = await axiosSecure.get(url);
      return res.data?.data;
    },
  });

  console.log(data);
  return <div>Reviews</div>;
}
