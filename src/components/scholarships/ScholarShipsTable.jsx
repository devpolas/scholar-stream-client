import { useRef, useState } from "react";
import ScholarshipsRow from "./ScholarshipsRow";
import EditScholarship from "./EditScholarship";
import Modal from "../modal/Modal";

export default function ScholarShipsTable({ scholarships }) {
  const modalRef = useRef(null);
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  const handleEdit = (scholarship) => {
    setSelectedScholarship(scholarship);
    modalRef.current?.showModal(); // ✅ now works
  };
  const closeModal = () => {
    modalRef.current?.close();
    setSelectedScholarship(null);
  };

  const handleUpdate = (data) => {
    const payload = {
      ...data,
      applicationDeadline: new Date(data.applicationDeadline).toISOString(),
    };
    console.log("Updated data for API:", payload);
    // TODO: API call here

    closeModal();
  };

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
              />
            ))}
          </tbody>
        </table>
      </div>

      <Modal ref={modalRef} onClose={closeModal}>
        <h3 className='font-bold text-lg mb-4'>Edit Scholarship</h3>
        {selectedScholarship && (
          <EditScholarship
            scholarship={selectedScholarship}
            onSubmit={handleUpdate}
          />
        )}
      </Modal>
    </>
  );
}
