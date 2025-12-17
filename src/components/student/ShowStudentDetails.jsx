export default function ShowStudentDetails({ user }) {
  return (
    <div className='flex flex-col md:flex-row md:space-x-8 items-center md:items-start justify-center'>
      {/* User Image */}
      <div className='flex-shrink-0'>
        <img
          src={user.image}
          alt={user.name}
          className='w-40 h-40 rounded-full object-cover mx-auto md:mx-0 shadow-lg'
        />
      </div>

      {/* User Details Card */}
      <div className='card w-full max-w-md bg-base-100 shadow-xl mt-5 md:mt-0'>
        <div className='card-body'>
          <h2 className='card-title text-2xl'>{user.name}</h2>
          <p className='text-gray-600 break-all'>{user.email}</p>
          <span className='badge badge-primary mt-2'>{user.role}</span>
        </div>
      </div>
    </div>
  );
}
