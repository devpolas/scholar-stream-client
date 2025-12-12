export default function Profile({ user }) {
  if (!user) {
    return (
      <div className='flex items-center gap-3'>
        <span className='loading loading-spinner loading-sm'></span>
      </div>
    );
  }

  const { displayName, email, photoURL } = user;

  return (
    <div className='flex items-center gap-3 sm:gap-5 lg:gap-8 pb-4 shadow'>
      <div className='avatar'>
        <div className='w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-30 lg:h-30 rounded ring ring-primary ring-offset-base-100 ring-offset-2'>
          <img src={photoURL || "https://via.placeholder.com/150"} alt='User' />
        </div>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-col gap-1 md:gap-2 lg:gap-3 leading-tight'>
          <span className='text-lg sm:text-xl md:text-2xl lg:text-3xl'>
            Name:{" "}
            <span className='text-sm sm:text-lg md:text-xl lg:text-2xl'>
              {displayName}
            </span>
          </span>
          <span className='text-sm sm:text-lg md:text-xl lg:text-2xl'>
            Email:{" "}
            <span className='text-xs sm:text-sm md:text-lg opacity-70'>
              {email}
            </span>
          </span>
        </div>
        <button className='btn btn-secondary btn-xs sm:btn-sm lg:btn-md'>
          Logout
        </button>
      </div>
    </div>
  );
}
