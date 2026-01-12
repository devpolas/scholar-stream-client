import { BsFillInfoSquareFill } from "react-icons/bs";
export default function Credentials() {
  return (
    <div className='flex flex-row justify-between'>
      <div></div>
      <div className='dropdown dropdown-bottom dropdown-end'>
        <div
          tabIndex={0}
          role='button'
          className='btn btn-sm hover:cursor-pointer'
        >
          <BsFillInfoSquareFill />
        </div>
        <div
          tabIndex={0}
          className='dropdown-content card card-sm bg-base-100 z-1 w-64 shadow-md'
        >
          <div className='card-body'>
            <p>
              <span className='flex flex-col gap-1'>
                <span>Admin_id:</span>
                <span>admin@scholarship.com</span>
                <span>password:</span>
                <span>Admin999!!</span>
                <span>Moderator_id:</span>
                <span>moderator@scholarship.com</span>
                <span>password:</span>
                <span>Moderator999!!</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
