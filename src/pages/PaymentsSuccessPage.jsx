import { useEffect } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useSearchParams } from "react-router";

export default function PaymentsSuccessPage() {
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

  return <div>Payment Success Page</div>;
}
