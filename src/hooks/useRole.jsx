import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../contexts/useAuthContext";
import useAxiosSecure from "./useAxios";

export default function useRole() {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();

  const {
    data: role,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["current-user-role", user?.uid],
    enabled: !!user,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
    queryFn: async () => {
      const res = await axiosSecure.get("/users/me");
      return res.data?.data?.role ?? null;
    },
  });

  if (isError) {
    console.error("Failed to fetch user role:", error);
  }

  return {
    role,
    isLoading,
    isError,
  };
}
