import LoadingSpinner from "../components/loaders/LoadingSpinner";
import ReviewsTable from "../components/review/ReviewsTable";
import useCustomQuery from "./../hooks/useCustomQuery";

export default function ReviewsPage() {
  const { data, isLoading } = useCustomQuery({ path: "reviews" });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {data.length ? <ReviewsTable reviews={data} /> : <p>No review found!</p>}
    </div>
  );
}
