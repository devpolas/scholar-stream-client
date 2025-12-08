import { Link } from "react-router";
import useAuthContext from "../../contexts/useAuthContext";

export default function AvatarWithDropDown() {
  const { user, logout } = useAuthContext();
  return (
    <div className='dropdown dropdown-end shadow'>
      <div
        tabIndex={0}
        role='button'
        className='btn btn-ghost btn-circle avatar'
      >
        <div className='w-10 rounded-full'>
          <img alt='Tailwind CSS Navbar component' src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex='-1'
        className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
      >
        <li>
          <Link to={"/dashboard"} className='justify-between'>
            Dashboard
          </Link>
        </li>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
      </ul>
    </div>
  );
}
