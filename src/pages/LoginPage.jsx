import graduationCeremony from "./../assets/graduation-ceremony.png";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div
      style={{ backgroundImage: `url(${graduationCeremony})` }}
      className='bg-no-repeat bg-size-[0%] sm:bg-size-[40%] md:bg-size-[30%] lg:bg-size-[20%] bg-top-left flex justify-end'
    >
      <fieldset className='fieldset glass border-base-300 rounded-box w-xs border p-6 shadow-xl'>
        <legend className='fieldset-legend text-xl'>Login</legend>

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

        <button className='btn btn-neutral mt-4 w-full'>Login</button>

        <button className='btn btn-outline'>
          <FcGoogle />
          Continue with Google
        </button>
      </fieldset>
    </div>
  );
}
