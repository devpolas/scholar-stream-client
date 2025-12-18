import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { BiCommentAdd } from "react-icons/bi";
import useRole from "../../hooks/useRole";
import { useLocation } from "react-router";

export default function ActionsButtons({
  paymentStatus,
  applicationStatus,
  onView,
  onEdit,
  onDelete,
  onComment,
  onPay,
}) {
  const { role } = useRole();
  const location = useLocation();

  const isReview = location.pathname === "/dashboard/reviews";

  return (
    <div className='flex gap-2 justify-center items-center text-sm lg:text-lg'>
      {paymentStatus === "Unpaid" && (
        <button onClick={() => onPay?.()} title='Pay'>
          <MdPayment className='cursor-pointer hover:text-green-600' />
        </button>
      )}

      {(role === "Admin" ||
        role === "Moderator" ||
        applicationStatus === "Pending" ||
        (role === "Student" && isReview)) && (
        <button onClick={onDelete} title='Delete'>
          <FaRegTrashAlt className='cursor-pointer hover:text-red-600' />
        </button>
      )}

      {role === "Student" && applicationStatus === "Completed" && (
        <button onClick={onComment} title='Add Comment'>
          <BiCommentAdd className='cursor-pointer hover:text-blue-600' />
        </button>
      )}

      <button onClick={onView} title='View Info'>
        <BsInfoCircle className='cursor-pointer hover:text-gray-600' />
      </button>

      {(role === "Admin" || role === "Moderator") && (
        <button onClick={onEdit} title='Edit'>
          <FaEdit className='cursor-pointer hover:text-yellow-600' />
        </button>
      )}
    </div>
  );
}
