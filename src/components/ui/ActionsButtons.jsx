import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { BiCommentAdd } from "react-icons/bi";
import useAxiosSecure from "../../hooks/useAxios";
import useRole from "../../hooks/useRole";

export default function ActionsButtons({
  paymentStatus,
  applicationStatus,
  applicationId,
}) {
  const { role } = useRole();
  const axiosSecure = useAxiosSecure();

  const handlePayment = async () => {
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
  };

  return (
    <div className='flex gap-4 justify-center items-center text-sm lg:text-lg'>
      {paymentStatus === "unpaid" && (
        <button title='Pay'>
          <MdPayment
            onClick={handlePayment}
            className='cursor-pointer hover:text-green-600'
          />
        </button>
      )}

      {(role === "admin" ||
        role === "moderator" ||
        applicationStatus === "pending") && (
        <button title='Delete'>
          <FaRegTrashAlt className='cursor-pointer hover:text-red-600' />
        </button>
      )}

      {applicationStatus === "completed" && (
        <button title='Add Comment'>
          <BiCommentAdd className='cursor-pointer hover:text-blue-600' />
        </button>
      )}

      <button title='View Info'>
        <BsInfoCircle className='cursor-pointer hover:text-gray-600' />
      </button>

      {(role === "admin" || role === "moderator") && (
        <button title='Edit'>
          <FaEdit className='cursor-pointer hover:text-yellow-600' />
        </button>
      )}
    </div>
  );
}
