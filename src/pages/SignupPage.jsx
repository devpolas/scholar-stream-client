import graduationCeremony from "./../assets/graduation-ceremony.png";
import { useForm, useWatch } from "react-hook-form";
import SigninWithGoogle from "../components/socialLogin/SigninWithGoogle";
import ImagePicker from "../components/imagePicker/ImagePicker";
import useAuthContext from "../contexts/useAuthContext";
import { imgUploadToImgBB } from "../utils/http";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";

export default function SignupPage() {
  const axiosBase = useAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { signup, signupLoading } = useAuthContext();
  const password = useWatch({ name: "password", control });
  async function onSubmit(formData) {
    const { fullname, email, password, profileImage } = formData;

    const photoUrl = await imgUploadToImgBB(fullname, profileImage[0]);
    try {
      const { user } = await signup(email, password);

      await updateProfile(user, {
        displayName: fullname,
        photoURL: photoUrl,
      });

      await axiosBase.post("/users", {
        name: fullname,
        email,
        image: photoUrl,
      });

      toast.success("Signup Successful");
      navigate("/", { replace: true });
    } catch (error) {
      if (error) {
        toast.error("Signup Failed");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{ backgroundImage: `url(${graduationCeremony})` }}
        className='bg-no-repeat bg-size-[0%] sm:bg-size-[50%] md:bg-size-[40%] lg:bg-size-[30%] bg-top-left flex justify-end'
      >
        <fieldset className='fieldset glass border-base-300 rounded-box w-xs border p-6 shadow-xl'>
          <legend className='fieldset-legend text-xl'>Signup</legend>

          <label className='label'>Full Name</label>
          <input
            {...register("fullname", { required: true })}
            type='text'
            className='input input-bordered'
            placeholder='Enter Your Full Name'
          />

          {errors?.fullname?.type === "required" && (
            <p className='text-red-300'>Fullname is required</p>
          )}

          <label className='label'>Email</label>
          <input
            {...register("email", { required: true })}
            type='email'
            className='input input-bordered'
            placeholder='Email'
          />

          {errors?.email?.type === "required" && (
            <p className='text-red-300'>Email is required</p>
          )}

          <label className='label'>Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,30}$/,
            })}
            type='password'
            className='input input-bordered'
            placeholder='Password'
          />

          {errors?.password?.type === "required" && (
            <p className='text-red-300'>Password is required</p>
          )}

          {errors?.password?.type === "minLength" && (
            <p className='text-red-300'>
              Password must be at least 6 characters
            </p>
          )}
          {errors?.password?.type === "pattern" && (
            <p className='text-red-300'>
              Password minimum 6 chars, capital letter, special character
            </p>
          )}

          <label className='label'>Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === password,
            })}
            type='password'
            className='input input-bordered'
            placeholder='Confirm Password'
          />

          {errors?.confirmPassword?.type === "required" && (
            <p className='text-red-300'>Please Confirm Your Password</p>
          )}
          {errors?.confirmPassword?.type === "validate" && (
            <p className='text-red-300'>Passwords are doesn't match</p>
          )}

          <ImagePicker {...register("profileImage", { required: true })} />

          {errors?.profileImage?.type === "required" && (
            <p className='text-red-300'>Please Pick Your Profile Image</p>
          )}

          <button type='submit' className='btn btn-neutral mt-4 w-full'>
            <span className='flex flex-row gap-2 items-center'>
              {signupLoading && (
                <span className='loading loading-spinner text-primary'></span>
              )}
              <span>Signup</span>
            </span>
          </button>

          <SigninWithGoogle />
        </fieldset>
      </div>
    </form>
  );
}
