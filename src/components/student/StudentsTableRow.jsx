import ActionsButtons from "../ui/ActionsButtons";

export default function StudentsTableRow({
  student,
  index,
  handleEdit,
  handleDelete,
  showDetails,
}) {
  return (
    <tr>
      <th>{index}</th>
      <td>
        <img
          className='w-10 h-10 rounded-full'
          src={student.image}
          alt='profile image'
        />
      </td>
      <td>{student.name}</td>
      <td>{student.email}</td>
      <td>{student.role}</td>
      <td>
        <ActionsButtons
          onEdit={() => handleEdit(student)}
          onDelete={() => handleDelete(student)}
          onView={() => showDetails(student)}
        />
      </td>
    </tr>
  );
}
