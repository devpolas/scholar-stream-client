export default function ScholarshipDetails({ scholarship }) {
  const {
    scholarshipName,
    universityName,
    universityImage,
    universityCountry,
    universityCity,
    universityWorldRank,
    subjectCategory,
    scholarshipCategory,
    degree,
    tuitionFees,
    applicationFees,
    serviceCharge,
    applicationDeadline,
    scholarshipPostDate,
    postedUserEmail,
  } = scholarship;
  return (
    <div className='max-w-6xl mx-auto px-4 py-10'>
      {/* Header */}
      <div className='flex flex-col md:flex-row gap-6 items-start'>
        <img
          src={universityImage}
          alt={universityName}
          className='w-full md:w-72 h-48 object-cover rounded-xl shadow-md'
        />

        <div className='flex-1'>
          <h1 className='text-3xl font-bold'>{scholarshipName}</h1>
          <p className='text-lg text-gray-600'>{universityName}</p>

          <div className='mt-3 space-x-2'>
            <div className='badge badge-primary'>{scholarshipCategory}</div>
            <div className='badge badge-secondary'>{degree}</div>
            <div className='badge badge-accent'>{subjectCategory}</div>
          </div>

          {/* Location */}
          <p className='mt-3 text-gray-700'>
            🌍 {universityCity}, {universityCountry}
          </p>

          {/* Rank */}
          <p className='text-gray-700 font-semibold'>
            🎓 World Rank: {universityWorldRank}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className='divider my-8'></div>

      {/* Financial Section */}
      <h2 className='text-2xl font-semibold mb-4'>Fees & Charges</h2>

      <div className='grid md:grid-cols-3 gap-6'>
        {tuitionFees && (
          <div className='stat bg-base-200 shadow rounded-lg p-4'>
            <div className='stat-title'>Tuition Fees</div>
            <div className='stat-value text-primary'>${tuitionFees}</div>
          </div>
        )}

        <div className='stat bg-base-200 shadow rounded-lg p-4'>
          <div className='stat-title'>Application Fees</div>
          <div className='stat-value text-secondary'>${applicationFees}</div>
        </div>

        <div className='stat bg-base-200 shadow rounded-lg p-4'>
          <div className='stat-title'>Service Charge</div>
          <div className='stat-value text-accent'>${serviceCharge}</div>
        </div>
      </div>

      {/* Divider */}
      <div className='divider my-8'></div>

      {/* Dates Section */}
      <h2 className='text-2xl font-semibold mb-4'>Important Dates</h2>

      <div className='grid md:grid-cols-2 gap-6'>
        <div className='stat bg-base-200 shadow rounded-lg p-4'>
          <div className='stat-title'>Application Deadline</div>
          <div className='stat-value text-error'>{applicationDeadline}</div>
        </div>

        <div className='stat bg-base-200 shadow rounded-lg p-4'>
          <div className='stat-title'>Posted On</div>
          <div className='stat-value text-info'>{scholarshipPostDate}</div>
        </div>
      </div>

      {/* Divider */}
      <div className='divider my-8'></div>

      {/* Posted User Info */}
      <h2 className='text-2xl font-semibold mb-4'>Posted By</h2>

      <div className='bg-base-200 p-5 rounded-lg shadow'>
        <p className='text-gray-700'>
          📧 Email: <span className='font-semibold'>{postedUserEmail}</span>
        </p>
      </div>

      {/* Action Button */}
      <div className='mt-10 flex justify-center'>
        <button className='btn btn-primary px-10 text-lg'>Apply Now</button>
      </div>
    </div>
  );
}
