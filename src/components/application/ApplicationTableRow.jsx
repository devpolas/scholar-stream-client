import useAxiosSecure from "../../hooks/useAxiosSecure";
import ActionsButtons from "../ui/ActionsButtons";
export default function ApplicationTableRow({
  application,
  index,
  handleDelete,
  handleEdit,
  showDetails,
  handleComment,
}) {
  const {
    _id: applicationId,
    scholarship,
    applicationStatus,
    paymentStatus,
    feedback,
  } = application;

  const axiosSecure = useAxiosSecure();

  async function onPay() {
    try {
      const res = await axiosSecure.post(
        `/applications/${applicationId}/payments`
      );

      if (res.data?.url) {
        window.location.assign(res.data.url);
      }
    } catch (error) {
      console.error("Payment failed", error);
    }
  }

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
          onPay={onPay}
          onComment={() => handleComment(application)}
          onDelete={() => handleDelete(application)}
          onView={() => showDetails(application)}
          onEdit={() => handleEdit(application)}
        />
      </td>
    </tr>
  );
}
