import ApplicationTable from "../components/application/ApplicationTable";
import LoadingSpinner from "../components/loaders/LoadingSpinner";
import useCustomQuery from "../hooks/useCustomQuery";

export default function ApplicationsPage() {
  const { isLoading, data: applications } = useCustomQuery({
    path: "applications",
  });
  if (isLoading) {
    return <LoadingSpinner />;
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
