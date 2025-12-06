import { SlMenu } from "react-icons/sl";
import logo from "./../../assets/logo.png";
import { Link } from "react-router";

export default function Navbar() {
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/all-scholarships"}>All Scholarships</Link>
      </li>
      <li>
        <Link to={"/profile"}>Profile</Link>
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-200 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <SlMenu />
          </div>
          <ul
            tabIndex='-1'
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className='btn btn-ghost text-xl'>
          <img className='w-12' src={logo} alt='Scholar Stream Logo' />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{links}</ul>
      </div>
      <div className='navbar-end'>
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
      </div>
    </div>
  );
}
