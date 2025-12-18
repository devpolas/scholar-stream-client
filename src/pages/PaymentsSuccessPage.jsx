import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useSearchParams } from "react-router";
import Skeleton from "../components/loaders/Skeleton";

export default function PaymentsSuccessPage() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  const [paidInfo, setPaidInfo] = useState(null);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .get(`/payments/${sessionId}`)
        .then((result) => setPaidInfo(result.data?.data));
    }
  }, [sessionId]);

  if (!paidInfo) {
    return <Skeleton />;
  }

  const { updateApplication, paymentHistory } = paidInfo;
  const { scholarship, user, paymentStatus } = updateApplication;

  console.log(paidInfo);

  return (
    <div className='flex justify-center items-center px-4'>
      <div className='card bg-base-100 w-full max-w-md shadow-xl'>
        {/* University Image */}
        <figure>
          <img
            src={scholarship.universityImage}
            alt={scholarship.universityName}
            className='h-40 w-full object-cover'
          />
        </figure>

        <div className='card-body space-y-3'>
          {/* Title */}
          <h2 className='card-title text-lg text-center justify-center'>
            Payment Successful 🎉
          </h2>

          {/* Scholarship */}
          <p className='text-center text-sm text-gray-500'>
            {scholarship.scholarshipName}
          </p>

          <div className='divider my-1'></div>

          {/* User */}
          <div className='flex items-center gap-3'>
            <img
              src={user.image}
              className='w-10 h-10 rounded-full'
              alt={user.name}
            />
            <div>
              <p className='font-semibold text-sm'>{user.name}</p>
              <p className='text-xs text-gray-500'>{user.email}</p>
            </div>
          </div>

          {/* Amount */}
          <div className='bg-base-200 rounded-lg p-3 text-center'>
            <p className='text-xs text-gray-500'>Total Paid</p>
            <p className='text-2xl font-bold text-success'>
              ${paymentHistory.totalAmount}
            </p>
          </div>

          {/* Meta */}
          <div className='text-xs text-gray-500 space-y-1'>
            <p>
              Transaction:{" "}
              <span className='font-mono'>
                {paymentHistory.transactionId.slice(0, 14)}...
              </span>
            </p>
            <p>
              Date: {new Date(paymentHistory.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Status */}
          <div className='text-center'>
            <span className='badge badge-success badge-outline'>
              {paymentStatus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
