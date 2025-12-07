export default function InputField({ label, type, ...props }) {
  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend text-sm'>{label}</legend>
      <input type={type} {...props} className='input' placeholder={label} />
    </fieldset>
  );
}
