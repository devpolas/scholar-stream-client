export default function ScholarshipSkeleton() {
  return (
    <div className='card gap-4 shadow-xl border border-base-200 p-4'>
      <div className='skeleton w-full h-48'></div>
      <div className='skeleton h-8 w-10/12'></div>
      <div className='skeleton h-4 w-1/2'></div>
      <div className='skeleton h-6 w-2/3'></div>
      <div className='skeleton h-6 w-2/3'></div>
      <div className='card-actions justify-end mt-4'>
        <div className='skeleton h-8 w-1/3'></div>
      </div>
    </div>
  );
}
