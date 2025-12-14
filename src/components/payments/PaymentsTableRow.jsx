import { formatTimeDate } from "../../utils/formateTimeDate";

export default function PaymentsTableRow({ payment, index }) {
  const { _id, scholarship, transactionId, createdAt } = payment;

  return (
    <tr>
      <th>{index}</th>
      <td>{scholarship.scholarshipName}</td>
      <td>{scholarship.universityName}</td>
      <td>$ {scholarship.applicationFees}</td>
      <td>{transactionId}</td>
      <td>{formatTimeDate(createdAt)}</td>
    </tr>
  );
}
