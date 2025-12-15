import PaymentsTable from "../components/payments/PaymentsTable";
import useCustomQuery from "../hooks/useCustomQuery";

export default function PaymentsPage() {
  const { isLoading, data: payments } = useCustomQuery({
    path: "payments/history",
  });

  if (isLoading) {
    return <p>Loading.....</p>;
  }
  return (
    <div>
      {payments.length ? (
        <PaymentsTable payments={payments} />
      ) : (
        <p>No payments found</p>
      )}
    </div>
  );
}
