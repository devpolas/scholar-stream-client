import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { BiCommentAdd } from "react-icons/bi";
import useAxiosSecure from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

export default function ActionsButtons({
  paymentStatus,
  applicationStatus,
  applicationId,
}) {
  const axiosSecure = useAxiosSecure();
  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      return axiosSecure.get(`/users/me`);
    },
  });

  const role = data.data?.data?.role;

  async function handelPayment() {
    const response = await axiosSecure.post(
      `/applications/${applicationId}/payments`,
      {}
    );
    console.log(response);
    if (response.status === 200) {
      window.location.assign(response.data?.url);
    }
  }

  return (
    <>
      {isLoading ? (
        "Loading....."
      ) : (
        <div className='flex flex-row gap-4 justify-center items-center text-sm lg:text-lg'>
          {paymentStatus === "unpaid" && <MdPayment onClick={handelPayment} />}
          {(role === "admin" ||
            role === "moderator" ||
            applicationStatus === "pending") && <FaRegTrashAlt />}
          {applicationStatus === "completed" && <BiCommentAdd />}
          <BsInfoCircle />
          {(role === "admin" || role === "moderator") && <FaEdit />}
        </div>
      )}
    </>
  );
}
