import useRole from "../../hooks/useRole";
import StudentsTableRow from "./StudentsTableRow";

export default function StudentsTable({ users }) {
  const { data } = useRole();

  const allUsers = [...users].filter((user) => user._id !== data._id);

  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        {/* head */}
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Image</th>
            <th>Name</th>
            <th>email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allUsers.map((user, i) => (
            <StudentsTableRow student={user} index={i + 1} key={i + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
