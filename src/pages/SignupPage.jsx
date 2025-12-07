import { useState } from "react";
import graduationCeremony from "./../assets/graduation-ceremony.png";
import { useForm } from "react-hook-form";
import SigninWithGoogle from "../components/socialLogin/SigninWithGoogle";

export default function SignupPage() {
  const [pickedImage, setPickedImage] = useState(null);

  const { register, handleSubmit } = useForm();

  function handelChangeImage(e) {
    const file = e.target.files[0];
    if (!file) return setPickedImage(null);

    const reader = new FileReader();

    reader.onload = () => setPickedImage(reader.result);

    reader.readAsDataURL(file);
  }

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{ backgroundImage: `url(${graduationCeremony})` }}
        className='bg-no-repeat bg-size-[0%] sm:bg-size-[50%] md:bg-size-[40%] lg:bg-size-[30%] bg-top-left flex justify-end'
      >
        <fieldset className='fieldset glass border-base-300 rounded-box w-xs border p-6 shadow-xl'>
          <legend className='fieldset-legend text-xl'>Signup</legend>

          <label className='label'>Email</label>
          <input
            {...register("email")}
            type='email'
            className='input input-bordered'
            placeholder='Email'
          />

          <label className='label'>Password</label>
          <input
            {...register("password")}
            type='password'
            className='input input-bordered'
            placeholder='Password'
          />
          <label className='label'>Confirm Password</label>
          <input
            {...register("confirmPassword")}
            type='password'
            className='input input-bordered'
            placeholder='Confirm Password'
          />
          <input
            onChange={handelChangeImage}
            type='file'
            className='file-input file-input-neutral'
          />

          {pickedImage && (
            <img
              className='w-24 h-24 border border-base-300 rounded'
              src={pickedImage}
            />
          )}

          <button className='btn btn-neutral mt-4 w-full'>Signup</button>

          <SigninWithGoogle />
        </fieldset>
      </div>
    </form>
  );
}
