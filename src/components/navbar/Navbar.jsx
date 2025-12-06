import { SlMenu } from "react-icons/sl";
import logo from "./../../assets/logo.png";

export default function Navbar() {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>All Scholarships</a>
      </li>
      <li>
        <a>Profile</a>
      </li>
    </>
  );
  return (
    <div className='navbar bg-base-100 shadow-sm'>
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
        <a className='btn btn-ghost text-xl'>
          <img className='w-12' src={logo} alt='Scholar Stream Logo' />
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{links}</ul>
      </div>
      <div className='navbar-end'>
        <div className='flex flex-row gap-2'>
          <button className='btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md'>
            Login
          </button>
          <button className='btn btn-secondary btn-xs sm:btn-sm md:btn-md'>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
