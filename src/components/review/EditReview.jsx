import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function EditReview({ review, onSave }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (review) {
      reset(review);
    }
  }, [review, reset]);

  return (
    <div className='card bg-base-100 shadow-xl'>
      <form onSubmit={handleSubmit(onSave)} className='card-body space-y-5'>
        <span className='font-medium'>Rating:</span>
        <div className='rating rating-lg'>
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type='radio'
              name='rating'
              value={star}
              checked={review.rating === star}
              {...register("rating", { required: true })}
              className='mask mask-star-2 bg-warning'
            />
          ))}
        </div>
        {errors.rating?.type === "required" && (
          <p className='text-red-500 text-sm'>Rating is Required</p>
        )}

        <span className='font-medium text-xl'>Comment:</span>
        <textarea
          {...register("comment", {
            required: true,
            minLength: 10,
          })}
          className='textarea textarea-bordered w-full'
          rows={4}
          placeholder='Write your review...'
        />

        {errors.comment?.type === "required" && (
          <p className='text-red-500 text-sm'>Review is Required</p>
        )}
        {errors.comment?.type === "minLength" && (
          <p className='text-red-500 text-sm'>Review Must 10 Character</p>
        )}
        <button type='submit' className='btn btn-primary'>
          Submit Review
        </button>
      </form>
    </div>
  );
}
