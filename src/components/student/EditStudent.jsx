import { useForm } from "react-hook-form";
import Select from "../ui/Select";
import { useEffect } from "react";

export default function EditStudent({ user, onSubmit }) {
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <span className='mt-2'>
              <Select label='Role' {...register("role")}>
                <option>Admin</option>
                <option>Moderator</option>
                <option>Student</option>
              </Select>
            </span>

            {/* Action Buttons */}
            <div className='card-actions mt-5'>
              <button
                type='submit'
                className='btn btn-error btn-sm w-full sm:w-auto'
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
