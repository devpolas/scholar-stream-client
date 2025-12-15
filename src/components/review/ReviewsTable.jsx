import ReviewsTableRow from "./ReviewsTableRow";

export default function ReviewsTable({ reviews }) {
  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        {/* head */}
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Scholarship Name</th>
            <th>Comment</th>
            <th>rating</th>
            <th>Comment</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {reviews.map((review, i) => (
            <ReviewsTableRow review={review} index={i + 1} key={i + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
