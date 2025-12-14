import { useEffect } from "react";
import useAxiosSecure from "../hooks/useAxios";
import { useNavigation, useSearchParams } from "react-router";
import useAuthContext from "../contexts/useAuthContext";

export default function PaymentsSuccessPage() {
  const { isLoading, user } = useAuthContext();
  const navigation = useNavigation();
  const navigating = navigation.state === "loading";
  const isPending = isLoading || navigating;
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .get(`/payments/${sessionId}`)
        .then((result) => console.log(result));
    }
  }, [sessionId]);

  if (isPending || !user) {
    return <p>Loading.....</p>;
  }

  return <div>Payment Success Page</div>;
}
