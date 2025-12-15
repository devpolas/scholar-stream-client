export default function Modal({ children }) {
  return (
    <dialog id='modal' className='modal modal-middle'>
      <div className='modal-box'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>
        {children}
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
}

// onClick={() => document.getElementById("my_modal_5").showModal()}
