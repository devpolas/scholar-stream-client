import { useRef, useState } from "react";
import ApplicationTableRow from "./ApplicationTableRow";
import Swal from "sweetalert2";
import Modal from "../modal/Modal.jsx";
import ApplicationDetails from "./ApplicationDetails";
import AddReview from "./../review/AddReview";
import EditApplication from "./EditApplication.jsx";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import toast from "react-hot-toast";
import useCustomQuery from "../../hooks/useCustomQuery.jsx";
export default function ApplicationTable({ applications }) {
  const modalRef = useRef(null);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [modalMode, setModalMode] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { refetch } = useCustomQuery({
    path: "applications",
    key: selectedApplication?._id,
  });

  const closeModal = () => {
    modalRef.current?.close();
    setSelectedApplication(null);
  };

  const handleEdit = (application) => {
    setModalMode("Edit");
    setSelectedApplication(application);
    modalRef.current?.showModal();
  };
  const showDetails = (application) => {
    setModalMode("Details");
    setSelectedApplication(application);
    modalRef.current?.showModal();
  };
  const handleComment = (application) => {
    setModalMode("Review");
    setSelectedApplication(application);
    modalRef.current?.showModal();
  };
  async function handleDelete(application) {
    Swal.fire({
      title: `<p>You won't be able to revert <strong><em>${application.scholarship.scholarshipName}!</em></strong></p>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/applications/${application._id}`)
          .then(() => refetch());
        Swal.fire({
          title: "Deleted!",
          text: `${application.scholarship.scholarshipName} has been deleted.`,
          icon: "success",
        });
      }
    });
  }

  const handleUpdate = (data) => {
    const { applicationStatus, feedback } = data;
    console.log("Updated data for API:", data);
    try {
      axiosSecure.patch(`/applications/${data._id}`, {
        applicationStatus,
        feedback,
      });
      toast.success("successfully update");
      refetch();
    } catch (error) {
      if (error) {
        toast.error("fail to update");
      }
    }

    closeModal();
  };

  const postReview = async (data) => {
    try {
      await axiosSecure.post(
        `/scholarships/${selectedApplication.scholarship._id}/reviews`,
        data
      );
      toast.success("successfully update");
    } catch (error) {
      if (error) {
        toast.error("fail to update");
      }
    }
    closeModal();
  };

  const modalChildren =
    modalMode === "Review" ? (
      <AddReview onSave={postReview} />
    ) : modalMode === "Details" ? (
      <ApplicationDetails application={selectedApplication} />
    ) : modalMode === "Edit" ? (
      <EditApplication
        application={selectedApplication}
        handleUpdate={handleUpdate}
      />
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
              <th>University Name</th>
              <th>University Address</th>
              <th>Feedback</th>
              <th>Subject Category</th>
              <th>Application Fee</th>
              <th>Application Status</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, i) => (
              <ApplicationTableRow
                application={application}
                index={i + 1}
                key={i + 1}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                showDetails={showDetails}
                handleComment={handleComment}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Modal ref={modalRef} onClose={closeModal}>
        <h3 className='font-bold text-lg mb-4'>{modalMode} Application</h3>
        {selectedApplication && modalChildren}
      </Modal>
    </>
  );
}
