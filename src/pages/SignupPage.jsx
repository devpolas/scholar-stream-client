import { useState } from "react";
import graduationCeremony from "./../assets/graduation-ceremony.png";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  const [pickedImage, setPickedImage] = useState(null);

  function handelChangeImage(e) {
    const file = e.target.files[0];
    if (!file) return setPickedImage(null);

    const reader = new FileReader();

    reader.onload = () => setPickedImage(reader.result);

    reader.readAsDataURL(file);
  }

  return (
    <div>
      {" "}
      <div
        style={{ backgroundImage: `url(${graduationCeremony})` }}
        className='bg-no-repeat bg-size-[0%] sm:bg-size-[50%] md:bg-size-[40%] lg:bg-size-[30%] bg-top-left flex justify-end'
      >
        <fieldset className='fieldset glass border-base-300 rounded-box w-xs border p-6 shadow-xl'>
          <legend className='fieldset-legend text-xl'>Signup</legend>

          <label className='label'>Email</label>
          <input
            type='email'
            className='input input-bordered'
            placeholder='Email'
          />

          <label className='label'>Password</label>
          <input
            type='password'
            className='input input-bordered'
            placeholder='Password'
          />
          <label className='label'>Confirm Password</label>
          <input
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

          <button className='btn btn-outline'>
            <FcGoogle />
            Continue with Google
          </button>
        </fieldset>
      </div>
    </div>
  );
}
