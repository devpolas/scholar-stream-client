import ActionsButtons from "../ui/ActionsButtons";

export default function ReviewsTableRow({ review, index }) {
  return (
    <tr>
      <th>{index}</th>
      <td>{review.scholarship.scholarshipName}</td>
      <td>{review.rating}</td>
      <td>{review.createAt}</td>

      <td>
        <ActionsButtons />
      </td>
    </tr>
  );
}
