export default function Input({ label, ...props }) {
  return (
    <div className='form-control w-full'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input className='input input-bordered w-full' {...props} />
    </div>
  );
}
