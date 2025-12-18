import { useForm } from "react-hook-form";
import Select from "./../ui/Select";
import { useEffect } from "react";

export default function EditApplication({ handleUpdate, application }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (application) {
      reset(application);
    }
  }, [application, reset]);

  return (
    <div className='card bg-base-100 shadow-xl'>
      <form
        onSubmit={handleSubmit(handleUpdate)}
        className='card-body space-y-4'
      >
        {/* Application Status */}
        <div>
          <Select
            label='Application Status'
            {...register("applicationStatus", {
              required: "Please select an application status",
            })}
            className='select select-bordered w-full'
          >
            <option>Pending</option>
            <option>Processing</option>
            <option>Completed</option>
            <option>Rejected</option>
          </Select>

          {errors.status && (
            <p className='text-red-500 text-sm mt-1'>{errors.status.message}</p>
          )}
        </div>

        {/* Feedback */}
        <div>
          <label className='label'>
            <span className='label-text'>Feedback</span>
          </label>

          <textarea
            {...register("feedback", {
              required: "Feedback is required",
              minLength: {
                value: 10,
                message: "Feedback must be at least 10 characters",
              },
            })}
            className='textarea textarea-bordered w-full'
            rows={4}
            placeholder='Write feedback...'
          />

          {errors.feedback && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.feedback.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button type='submit' className='btn btn-primary w-full'>
          Submit
        </button>
      </form>
    </div>
  );
}
