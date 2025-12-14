import ActionsButtons from "../ui/ActionsButtons";
export default function ApplicationTableRow({ application, index }) {
  const { _id, scholarship, applicationStatus, paymentStatus, feedback } =
    application;
  return (
    <tr>
      <th>{index}</th>
      <td>{scholarship.universityName}</td>
      <td>
        {scholarship.universityCity}, {scholarship.universityCountry}
      </td>
      <td>{feedback}</td>
      <td>{scholarship.subjectCategory}</td>
      <td>$ {scholarship.applicationFees}</td>
      <td>{applicationStatus}</td>
      <td>{paymentStatus}</td>
      <td>
        <ActionsButtons
          paymentStatus={paymentStatus}
          applicationStatus={applicationStatus}
          applicationId={_id}
        />
      </td>
    </tr>
  );
}
