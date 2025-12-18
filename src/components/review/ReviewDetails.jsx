export default function ReviewDetails({ review }) {
  const { rating, comment } = review;
  return (
    <div className='card bg-base-100 shadow-md'>
      <div className='card-body space-y-3'>
        <h2 className='card-title'>Review</h2>

        {/* Rating */}
        <div className='flex items-center gap-2'>
          <span className='font-medium'>Rating:</span>
          <div className='rating rating-sm'>
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type='radio'
                name='rating'
                className='mask mask-star-2 bg-warning'
                checked={rating === star}
                readOnly
              />
            ))}
          </div>
          <span className='text-sm'>({rating}/5)</span>
        </div>

        {/* Comment */}
        <div>
          <span className='font-medium text-xl'>Comment:</span>
          <p className='mt-1'>{comment || "No comment provided."}</p>
        </div>
      </div>
    </div>
  );
}
