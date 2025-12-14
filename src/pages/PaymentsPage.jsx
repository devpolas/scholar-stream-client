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
      <PaymentsTable payments={payments} />
    </div>
  );
}
