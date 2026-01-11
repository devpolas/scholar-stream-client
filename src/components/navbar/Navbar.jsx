import { SlMenu } from "react-icons/sl";
import logo from "./../../assets/logo.png";
import { Link } from "react-router";
import AvatarWithDropDown from "./AvatarWithDropDown";
import AuthButtons from "./AuthButtons";
import useAuthContext from "../../contexts/useAuthContext";

export default function Navbar() {
  const { user, isLoading } = useAuthContext();
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/all-scholarships"}>All Scholarships</Link>
      </li>
      <li>
        <Link to={"/about"}>About Us</Link>
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
        {isLoading ? (
          <span className='loading loading-bars loading-sm'></span>
        ) : user ? (
          <AvatarWithDropDown />
        ) : (
          <AuthButtons />
        )}
      </div>
    </div>
  );
}
