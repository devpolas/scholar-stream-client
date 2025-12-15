import ScholarshipsRow from "./ScholarshipsRow";

export default function ScholarShipsTable({ scholarships }) {
  return (
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
