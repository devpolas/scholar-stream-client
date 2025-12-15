import { AiOutlineFileAdd } from "react-icons/ai";
import { FaUsersViewfinder } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { GrAppleAppStore } from "react-icons/gr";
import { IoDocuments } from "react-icons/io5";
import { Outlet, NavLink } from "react-router";

export default function AdminDashboard() {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Navbar */}
        <nav className='navbar w-full bg-base-300'>
          <label
            htmlFor='my-drawer-4'
            aria-label='open sidebar'
            className='btn btn-square btn-ghost'
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              strokeLinejoin='round'
              strokeLinecap='round'
              strokeWidth='2'
              fill='none'
              stroke='currentColor'
              className='my-1.5 inline-block size-4'
            >
              <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
              <path d='M9 4v16'></path>
              <path d='M14 10l2 2l-2 2'></path>
            </svg>
          </label>
          <div className='px-4'>Dashboard</div>
        </nav>
        {/* Page content here */}
        <div className='p-4'>
          <Outlet />
        </div>
      </div>

      <div className='drawer-side is-drawer-close:overflow-visible'>
        <label
          htmlFor='my-drawer-4'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <div className='flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64'>
          {/* Sidebar content here */}
          <ul className='menu w-full grow'>
            {/* List item */}
            <li>
              <NavLink
                to={"/dashboard"}
                className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                data-tip='Home'
              >
                {/* Home icon */}
                <IoHome />
                <span className='is-drawer-close:hidden'>Home</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to={"/dashboard/all-scholarships"}
                className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                data-tip='All Scholarships'
              >
                {/* Home icon */}
                <IoDocuments />
                <span className='is-drawer-close:hidden'>All Scholarship</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to={"/dashboard/add-scholarship"}
                className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                data-tip='Add Scholarships'
              >
                {/* Home icon */}
                <AiOutlineFileAdd />
                <span className='is-drawer-close:hidden'>Add Scholarship</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to={"/dashboard/applications"}
                className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                data-tip='Applications'
              >
                {/* Settings icon */}
                <GrAppleAppStore />
                <span className='is-drawer-close:hidden'>Applications</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to={"/dashboard/users"}
                className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                data-tip='Manage Users'
              >
                {/* Settings icon */}
                <FaUsersViewfinder />
                <span className='is-drawer-close:hidden'>Manage Users</span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to={"/dashboard/reviews"}
                className='is-drawer-close:tooltip is-drawer-close:tooltip-right'
                data-tip='Reviews'
              >
                {/* Settings icon */}
                <MdReviews />
                <span className='is-drawer-close:hidden'>Reviews</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
