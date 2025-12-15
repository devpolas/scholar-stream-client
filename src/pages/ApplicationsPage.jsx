import ApplicationTable from "../components/application/ApplicationTable";
import useCustomQuery from "../hooks/useCustomQuery";

export default function ApplicationsPage() {
  const { isLoading, data: applications } = useCustomQuery({
    path: "applications",
  });
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  return (
    <div>
      {applications.length ? (
        <ApplicationTable applications={applications} />
      ) : (
        <p>No application found!</p>
      )}
    </div>
  );
}
