import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxios";
import useRole from "./useRole";

export default function useCustomQuery({ path }) {
  const axiosSecure = useAxiosSecure();
  const { role, id, isLoading: isRoleLoading } = useRole();

  const url =
    role === "student"
      ? id
        ? `/users/${id}/${path}`
        : null
      : role === "moderator" || role === "admin"
      ? `/${path}`
      : null;

  const { isLoading, data, error } = useQuery({
    queryKey: ["applications", role, id, path],
    enabled: !!url && !isRoleLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(url);
      return res.data?.data ?? res.data;
    },
  });

  return { isLoading, data, error };
}
