import { useForm } from "react-hook-form";

export default function AddReview({ onSave }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className='card bg-base-100 shadow-xl'>
      <form onSubmit={handleSubmit(onSave)} className='card-body space-y-5'>
        <div className='rating rating-lg'>
          {[1, 2, 3, 4, 5].map((star) => (
            <input
              key={star}
              type='radio'
              name='ratingPoint'
              value={star}
              {...register("ratingPoint", { required: true })}
              className='mask mask-star-2 bg-warning'
            />
          ))}
        </div>
        {errors.ratingPoint?.type === "required" && (
          <p className='text-red-500 text-sm'>Rating is Required</p>
        )}
        <textarea
          {...register("reviewComment", {
            required: true,
            minLength: 10,
          })}
          className='textarea textarea-bordered w-full'
          rows={4}
          placeholder='Write your review...'
        />

        {errors.reviewComment?.type === "required" && (
          <p className='text-red-500 text-sm'>Review is Required</p>
        )}
        {errors.reviewComment?.type === "minLength" && (
          <p className='text-red-500 text-sm'>Review Must 10 Character</p>
        )}
        <button type='submit' className='btn btn-primary'>
          Submit Review
        </button>
      </form>
    </div>
  );
}
