import StudentsTable from "../components/student/StudentsTable";
import useCustomQuery from "./../hooks/useCustomQuery";
export default function UsersPage() {
  const { data, isLoading } = useCustomQuery({ path: "users" });
  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div>
      <StudentsTable users={data} />
    </div>
  );
}
