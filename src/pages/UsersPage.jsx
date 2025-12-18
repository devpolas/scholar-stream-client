import LoadingSpinner from "../components/loaders/LoadingSpinner";
import StudentsTable from "../components/student/StudentsTable";
import useCustomQuery from "./../hooks/useCustomQuery";
export default function UsersPage() {
  const { data, isLoading } = useCustomQuery({ path: "users" });
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <StudentsTable users={data} />
    </div>
  );
}
