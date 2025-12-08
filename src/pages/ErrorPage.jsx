export default function ErrorPage() {
  return (
    <div className='flex justify-center items-center flex-col h-[40vh]'>
      <h2 className='text-3xl sm:text-5xl font-extrabold text-red-500'>404</h2>
      <h3 className='text-xl sm:text-3xl font-semibold text-red-400'>
        Page Not Found 🥲!
      </h3>
    </div>
  );
}
