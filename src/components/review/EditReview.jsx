import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

export default function EditReview({ review, onSave }) {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rating: null,
      comment: "",
    },
  });

  // Set values AFTER review arrives
  useEffect(() => {
    if (review) {
      setValue("rating", Number(review.rating));
      setValue("comment", review.comment);
    }
  }, [review, setValue]);

  return (
    <div className='card bg-base-100 shadow-xl'>
      <form onSubmit={handleSubmit(onSave)} className='card-body space-y-5'>
        {/* Rating */}
        <label className='font-medium'>Rating:</label>

        <Controller
          name='rating'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div className='rating rating-lg'>
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type='radio'
                  name='rating'
                  value={star}
                  checked={field.value === star} // ✅ REQUIRED HERE
                  onChange={() => field.onChange(star)}
                  className='mask mask-star-2 bg-warning'
                />
              ))}
            </div>
          )}
        />

        {errors.rating && (
          <p className='text-red-500 text-sm'>Rating is required</p>
        )}

        {/* Comment */}
        <label className='font-medium text-xl'>Comment:</label>

        <textarea
          {...register("comment", {
            required: "Review is required",
            minLength: {
              value: 10,
              message: "Review must be at least 10 characters",
            },
          })}
          className='textarea textarea-bordered w-full'
          rows={4}
        />

        {errors.comment && (
          <p className='text-red-500 text-sm'>{errors.comment.message}</p>
        )}

        <button type='submit' className='btn btn-primary'>
          Submit Review
        </button>
      </form>
    </div>
  );
}
