import ApplicationTable from "../components/application/ApplicationTable";
import useCustomQuery from "../hooks/useCustomQuery";

export default function ApplicationsPage() {
  const { isLoading, data: applications } = useCustomQuery({
    path: "applications",
  });
  console.log(applications);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  return (
    <div>
      <ApplicationTable applications={applications} />
    </div>
  );
}
