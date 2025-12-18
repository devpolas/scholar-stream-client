import ActionsButtons from "../ui/ActionsButtons";

export default function ReviewsTableRow({
  review,
  index,
  handleDelete,
  handleEdit,
  showDetails,
}) {
  return (
    <tr>
      <th>{index}</th>
      <td>{review.scholarship.scholarshipName}</td>
      <td>{review.comment}</td>
      <td>{review.rating}</td>
      <td>{review.createAt}</td>

      <td>
        <ActionsButtons
          onEdit={() => handleEdit(review)}
          onView={() => showDetails(review)}
          onDelete={() => handleDelete(review)}
        />
      </td>
    </tr>
  );
}
