export default function Select({ label, children, ...props }) {
  return (
    <div className='form-control w-full'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <select className='mt-2 select select-bordered w-full' {...props}>
        {children}
      </select>
    </div>
  );
}
