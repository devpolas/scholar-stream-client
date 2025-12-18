import { useRef, useState } from "react";
import useRole from "../../hooks/useRole";
import StudentsTableRow from "./StudentsTableRow";
import Swal from "sweetalert2";
import Modal from "../modal/Modal";
import EditStudent from "./EditStudent";
import ShowStudentDetails from "./ShowStudentDetails";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCustomQuery from "./../../hooks/useCustomQuery";
import toast from "react-hot-toast";

export default function StudentsTable({ users }) {
  const modalRef = useRef(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalMode, setModalMode] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { refetch } = useCustomQuery({ path: "users", key: selectedUser?._id });

  const { data } = useRole();
  const allUsers = [...users].filter((user) => user._id !== data._id);

  const closeModal = () => {
    modalRef.current?.close();
    setSelectedUser(null);
  };

  const handleEdit = (user) => {
    setModalMode("Edit");
    setSelectedUser(user);
    modalRef.current?.showModal();
  };
  const showDetails = (user) => {
    setModalMode("Details");
    setSelectedUser(user);
    modalRef.current?.showModal();
  };

  async function handleDelete(user) {
    Swal.fire({
      title: `<p>You won't be able to revert <strong><em>${user.name}!</em></strong></p>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then(() => refetch());
        Swal.fire({
          title: "Deleted!",
          text: `${user.name} has been deleted.`,
          icon: "success",
        });
      }
    });
  }

  const handleUpdate = async (user) => {
    const { role } = user;
    try {
      await axiosSecure.patch(`/users/update-role/${user?._id}`, { role });
      refetch();
      toast.success("successfully update");
    } catch (error) {
      if (error) {
        toast.error("fail to update");
      }
    }
    closeModal();
  };

  const modalChildren =
    modalMode === "Edit" ? (
      <EditStudent user={selectedUser} onSubmit={handleUpdate} />
    ) : modalMode === "Details" ? (
      <ShowStudentDetails user={selectedUser} />
    ) : (
      ""
    );

  return (
    <>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUsers.map((user, i) => (
              <StudentsTableRow
                student={user}
                index={i + 1}
                key={i + 1}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                showDetails={showDetails}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Modal ref={modalRef} onClose={closeModal}>
        <h3 className='font-bold text-lg mb-4'>{modalMode} User</h3>
        {selectedUser && modalChildren}
      </Modal>
    </>
  );
}
