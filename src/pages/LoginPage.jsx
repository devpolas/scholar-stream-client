import { useForm } from "react-hook-form";
import graduationCeremony from "./../assets/graduation-ceremony.png";
import SigninWithGoogle from "../components/socialLogin/SigninWithGoogle";
import useAuthContext from "../contexts/useAuthContext";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleSubmit, register } = useForm();
  const { signin } = useAuthContext();
  function onSubmit(formData) {
    const { email, password } = formData;
    signin(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate(location?.state || "/");
      })
      .catch(() => toast.error("Login Failed"));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{ backgroundImage: `url(${graduationCeremony})` }}
        className='bg-no-repeat bg-size-[0%] sm:bg-size-[40%] md:bg-size-[30%] lg:bg-size-[20%] bg-top-left flex justify-end'
      >
        <fieldset className='fieldset glass border-base-300 rounded-box w-xs border p-6 shadow-xl'>
          <legend className='fieldset-legend text-xl'>Login</legend>

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

          <button className='btn btn-neutral mt-4 w-full'>Login</button>

          <SigninWithGoogle />
        </fieldset>
      </div>
    </form>
  );
}
