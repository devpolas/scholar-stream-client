import LoadingSpinner from "../components/loaders/LoadingSpinner";
import ScholarShipsTable from "../components/scholarships/ScholarShipsTable";
import useCustomQuery from "./../hooks/useCustomQuery";
export default function AllScholarships() {
  const { data, isLoading } = useCustomQuery({ path: "scholarships" });
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {data.length ? (
        <ScholarShipsTable scholarships={data} />
      ) : (
        <p>No Scholarship found!</p>
      )}
    </div>
  );
}
