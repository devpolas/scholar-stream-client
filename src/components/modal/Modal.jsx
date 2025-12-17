import { forwardRef } from "react";

const Modal = forwardRef(function Modal({ children, onClose }, ref) {
  return (
    <dialog ref={ref} className='modal modal-middle'>
      <div className='modal-box'>
        <form method='dialog' onSubmit={onClose}>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
        </form>

        {children}
      </div>

      <form method='dialog' className='modal-backdrop' onSubmit={onClose}>
        <button>close</button>
      </form>
    </dialog>
  );
});

export default Modal;
