import PaymentsTableRow from "./PaymentsTableRow";

export default function PaymentsTable({ payments }) {
  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        {/* head */}
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Scholarship Name</th>
            <th>University Name</th>
            <th>Application Fee</th>
            <th>Transaction Id</th>
            <th>Paid At</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, i) => (
            <PaymentsTableRow payment={payment} index={i + 1} key={i + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
