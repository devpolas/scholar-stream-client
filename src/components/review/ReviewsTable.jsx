import { useRef, useState } from "react";
import ReviewsTableRow from "./ReviewsTableRow";
import Swal from "sweetalert2";
import ReviewCardRHF from "./ReviewCard";
import Modal from "./../modal/Modal";

export default function ReviewsTable({ reviews }) {
  const modalRef = useRef(null);
  const [selectedReview, setSelectedReview] = useState(null);
  const [modalMode, setModalMode] = useState(null);

  const closeModal = () => {
    modalRef.current?.close();
    setSelectedReview(null);
    setModalMode(null);
  };

  const handleEdit = (review) => {
    setModalMode("Edit");
    setSelectedReview(review);
    modalRef.current?.showModal();
  };
  const showDetails = (review) => {
    setModalMode("Details");
    setSelectedReview(review);
    modalRef.current?.showModal();
  };
  function handleDelete(review) {
    console.log(review._id);
    Swal.fire({
      title: `<p>You won't be able to revert <strong><em>${review.reviewName}!</em></strong></p>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: `${review.reviewName} has been deleted.`,
          icon: "success",
        });
      }
    });
  }

  const handleUpdate = (data) => {
    console.log("Updated data for API:", data);
    // TODO: API call here

    closeModal();
  };

  const modalChildren =
    modalMode === "Edit" ? (
      <ReviewCardRHF review={selectedReview} onSave={handleUpdate} />
    ) : modalMode === "Details" ? (
      <ReviewCardRHF review={selectedReview} />
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
              <th>review Name</th>
              <th>Comment</th>
              <th>rating</th>
              <th>Comment</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {reviews.map((review, i) => (
              <ReviewsTableRow
                review={review}
                index={i + 1}
                key={i + 1}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
                showDetails={showDetails}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Modal ref={modalRef} onClose={closeModal}>
        <h3 className='font-bold text-lg mb-4'>{modalMode} Review</h3>
        {selectedReview && modalChildren}
      </Modal>
    </>
  );
}
