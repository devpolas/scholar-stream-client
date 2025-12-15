import {
  FaUser,
  FaUniversity,
  FaGraduationCap,
  FaMoneyBillWave,
  FaInfoCircle,
  FaCalendarAlt,
  FaCommentDots,
} from "react-icons/fa";

const ApplicationDetails = ({ application }) => {
  const {
    scholarshipId,
    userId,
    userName,
    userEmail,
    universityName,
    scholarshipCategory,
    degree,
    applicationFees,
    serviceCharge,
    applicationStatus = "pending",
    paymentStatus,
    applicationDate,
    feedback,
  } = application;

  return (
    <div className='max-w-5xl mx-auto p-4'>
      <div className='card bg-base-100 shadow-xl'>
        <div className='card-body space-y-6'>
          {/* Header */}
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3'>
            <h2 className='card-title text-xl md:text-2xl'>
              Application Details
            </h2>

            <div className='flex gap-2'>
              <span
                className={`badge badge-lg ${
                  applicationStatus === "approved"
                    ? "badge-success"
                    : applicationStatus === "rejected"
                    ? "badge-error"
                    : "badge-warning"
                }`}
              >
                {applicationStatus}
              </span>

              <span
                className={`badge badge-lg ${
                  paymentStatus === "paid" ? "badge-success" : "badge-outline"
                }`}
              >
                {paymentStatus}
              </span>
            </div>
          </div>

          {/* User Info */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <InfoItem icon={<FaUser />} label='User Name' value={userName} />
            <InfoItem label='User Email' value={userEmail} />
            <InfoItem label='User ID' value={userId} />
            <InfoItem label='Scholarship ID' value={scholarshipId} />
          </div>

          <div className='divider' />

          {/* Scholarship Info */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <InfoItem
              icon={<FaUniversity />}
              label='University'
              value={universityName}
            />
            <InfoItem
              icon={<FaInfoCircle />}
              label='Category'
              value={scholarshipCategory}
            />
            <InfoItem
              icon={<FaGraduationCap />}
              label='Degree'
              value={degree}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              label='Application Date'
              value={applicationDate}
            />
          </div>

          <div className='divider' />

          {/* Fees */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <InfoItem
              icon={<FaMoneyBillWave />}
              label='Application Fees'
              value={`$${applicationFees}`}
            />
            <InfoItem
              icon={<FaMoneyBillWave />}
              label='Service Charge'
              value={`$${serviceCharge}`}
            />
          </div>

          {/* Feedback */}
          <div className='divider' />

          <div>
            <h3 className='font-semibold text-lg flex items-center gap-2'>
              <FaCommentDots />
              Moderator Feedback
            </h3>

            <div className='mt-2 p-4 rounded-lg bg-base-200 text-sm'>
              {feedback ? feedback : "No feedback provided yet."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className='flex gap-3 items-start'>
    {icon && <span className='text-primary mt-1'>{icon}</span>}
    <div>
      <p className='text-sm text-gray-500'>{label}</p>
      <p className='font-medium break-all'>{value}</p>
    </div>
  </div>
);

export default ApplicationDetails;
