import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaStar,
  FaEdit,
  FaSave,
  FaTimes,
  FaUniversity,
  FaUser,
} from "react-icons/fa";

const ReviewCardRHF = ({ review, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: review,
  });

  const ratingPoint = watch("ratingPoint");

  const onSubmit = (data) => {
    onSave && onSave(data);
    setIsEditing(false);
  };

  const handleCancel = () => {
    reset(review);
    setIsEditing(false);
  };

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <div className='card bg-base-100 shadow-xl'>
        <form onSubmit={handleSubmit(onSubmit)} className='card-body space-y-5'>
          {/* Header */}
          <div className='flex flex-col sm:flex-row sm:justify-between gap-3'>
            <h2 className='card-title text-lg md:text-xl'>
              Scholarship Review
            </h2>

            {!isEditing ? (
              <button
                type='button'
                className='btn btn-outline btn-sm gap-2'
                onClick={() => setIsEditing(true)}
              >
                <FaEdit /> Edit
              </button>
            ) : (
              <div className='flex gap-2'>
                <button type='submit' className='btn btn-success btn-sm gap-2'>
                  <FaSave /> Save
                </button>
                <button
                  type='button'
                  className='btn btn-error btn-sm gap-2'
                  onClick={handleCancel}
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            )}
          </div>

          {/* User Info */}
          <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start'>
            <div className='avatar'>
              <div className='w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img src={review.userImage} alt={review.userName} />
              </div>
            </div>

            <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-3'>
              <Info
                label='User Name'
                value={review.userName}
                icon={<FaUser />}
              />
              <Info label='User Email' value={review.userEmail} />
              <Info label='Scholarship ID' value={review.scholarshipId} />
              <Info
                label='University'
                value={review.universityName}
                icon={<FaUniversity />}
              />
            </div>
          </div>

          <div className='divider' />

          {/* Rating */}
          <div>
            <p className='text-sm text-gray-500 mb-1'>Rating</p>
            {isEditing ? (
              <div className='rating rating-lg'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <input
                    key={star}
                    type='radio'
                    value={star}
                    {...register("ratingPoint", { required: true })}
                    className='mask mask-star-2 bg-warning'
                  />
                ))}
              </div>
            ) : (
              <div className='flex gap-1'>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < ratingPoint ? "text-warning" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Review Comment */}
          <div>
            <p className='text-sm text-gray-500 mb-1'>Review Comment</p>
            {isEditing ? (
              <textarea
                {...register("reviewComment", {
                  required: true,
                  minLength: 10,
                })}
                className='textarea textarea-bordered w-full'
                rows='4'
              />
            ) : (
              <p className='bg-base-200 p-4 rounded-lg text-sm'>
                {review.reviewComment}
              </p>
            )}
          </div>

          {/* Review Date */}
          <div>
            <p className='text-sm text-gray-500'>Review Date</p>
            <p className='font-medium'>{review.reviewDate}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

const Info = ({ label, value, icon }) => (
  <div className='flex gap-2 items-start'>
    {icon && <span className='text-primary mt-1'>{icon}</span>}
    <div>
      <p className='text-xs text-gray-500'>{label}</p>
      <p className='font-medium break-all'>{value}</p>
    </div>
  </div>
);

export default ReviewCardRHF;
