import LoadingSpinner from "../components/loaders/LoadingSpinner";
import PaymentsTable from "../components/payments/PaymentsTable";
import useCustomQuery from "../hooks/useCustomQuery";

export default function PaymentsPage() {
  const { isLoading, data: payments } = useCustomQuery({
    path: "payments/history",
  });

  if (isLoading) {
    return <LoadingSpinner />;
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
