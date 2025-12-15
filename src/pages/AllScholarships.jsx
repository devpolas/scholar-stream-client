import ScholarShipsTable from "../components/scholarships/ScholarShipsTable";
import useCustomQuery from "./../hooks/useCustomQuery";
export default function AllScholarships() {
  const { data, isLoading } = useCustomQuery({ path: "scholarships" });
  if (isLoading) {
    return <p>Loading.....</p>;
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
