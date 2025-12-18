import { useRef, useState } from "react";
import ScholarshipsRow from "./ScholarshipsRow";
import EditScholarship from "./EditScholarship";
import ShowScholarshipDetails from "./ShowScholarshipDetails";
import Modal from "../modal/Modal";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useCustomQuery from "../../hooks/useCustomQuery";

export default function ScholarShipsTable({ scholarships }) {
  const { refetch } = useCustomQuery({ path: "scholarships" });
  const axiosSecure = useAxiosSecure();
  const modalRef = useRef(null);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [modalMode, setModalMode] = useState(null);

  const closeModal = () => {
    modalRef.current?.close();
    setSelectedScholarship(null);
  };

  const handleEdit = (scholarship) => {
    setModalMode("Edit");
    setSelectedScholarship(scholarship);
    modalRef.current?.showModal();
  };
  const showDetails = (scholarship) => {
    setModalMode("Details");
    setSelectedScholarship(scholarship);
    modalRef.current?.showModal();
  };
  function handleDelete(scholarship) {
    Swal.fire({
      title: `<p>You won't be able to revert <strong><em>${scholarship.scholarshipName}!</em></strong></p>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/scholarships/${scholarship._id}`)
          .then(() => refetch());

        Swal.fire({
          title: "Deleted!",
          text: `${scholarship.scholarshipName} has been deleted.`,
          icon: "success",
        });
      }
    });
  }

  const handleUpdate = async (data) => {
    const payload = {
      ...data,
      applicationDeadline: new Date(data.applicationDeadline).toISOString(),
    };
    try {
      await axiosSecure.patch(`/scholarships/${data._id}`, payload);
      toast.success("successfully updated");
      refetch();
    } catch (error) {
      if (error) {
        toast.error("fail to update");
      }
    }

    closeModal();
  };

  const modalChildren =
    modalMode === "Edit" ? (
      <EditScholarship
        scholarship={selectedScholarship}
        onSubmit={handleUpdate}
      />
    ) : modalMode === "Details" ? (
      <ShowScholarshipDetails scholarship={selectedScholarship} />
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
              <th>Scholarship Name</th>
              <th>University Name</th>
              <th>University Address</th>
              <th>Scholarship Category</th>
              <th>Subject Category</th>
              <th>Degree</th>
              <th>Application Fee</th>
              <th>Post Date</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {scholarships.map((scholarship, i) => (
              <ScholarshipsRow
                scholarship={scholarship}
                index={i + 1}
                key={i + 1}
                handleEdit={handleEdit}
                showDetails={showDetails}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Modal ref={modalRef} onClose={closeModal}>
        <h3 className='font-bold text-lg mb-4'>{modalMode} Scholarship</h3>
        {selectedScholarship && modalChildren}
      </Modal>
    </>
  );
}
