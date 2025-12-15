import { formatTimeDate } from "../../utils/formateTimeDate";
import ActionsButtons from "./../ui/ActionsButtons";
export default function ScholarshipsRow({ scholarship, index }) {
  return (
    <tr>
      <th>{index}</th>
      <td>{scholarship.scholarshipName}</td>
      <td>{scholarship.universityName}</td>
      <td>
        {scholarship.universityCity}, {scholarship.universityCountry}
      </td>
      <td>{scholarship.subjectCategory}</td>
      <td>{scholarship.scholarshipCategory}</td>
      <td>{scholarship.degree}</td>
      <td>$ {scholarship.applicationFees}</td>
      <td>{formatTimeDate(scholarship.applicationDeadline)}</td>
      <td>{formatTimeDate(scholarship.scholarshipPostDate)}</td>
      <td>
        <ActionsButtons />
      </td>
    </tr>
  );
}
