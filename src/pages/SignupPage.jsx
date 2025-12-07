import graduationCeremony from "./../assets/graduation-ceremony.png";
import { Controller, useForm } from "react-hook-form";
import SigninWithGoogle from "../components/socialLogin/SigninWithGoogle";
import ImagePicker from "../components/imagePicker/ImagePicker";

export default function SignupPage() {
  const { register, handleSubmit, control } = useForm();
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

          <Controller
            name='profileImage'
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <ImagePicker
                onChange={(e) => {
                  const file = e?.target?.files?.[0] || null;
                  field.onChange(file);
                }}
              />
            )}
          />

          <button className='btn btn-neutral mt-4 w-full'>Signup</button>

          <SigninWithGoogle />
        </fieldset>
      </div>
    </form>
  );
}
