import ApplicationTableRow from "./ApplicationTableRow.jsx";
export default function ApplicationTable({ applications }) {
  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        {/* head */}
        <thead>
          <tr>
            <th></th>
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
