import { Link } from "react-router";

export default function AuthButtons() {
  return (
    <div className='flex flex-row gap-2'>
      <Link
        to={"/login"}
        className='btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md'
      >
        Login
      </Link>
      <Link
        to={"/signup"}
        className='btn btn-secondary btn-xs sm:btn-sm md:btn-md'
      >
        Signup
      </Link>
    </div>
  );
}
