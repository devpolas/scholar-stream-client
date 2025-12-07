import { useState } from "react";

export default function ImagePicker({ onChange, ...props }) {
  const [pickedImage, setPickedImage] = useState(null);

  function handleChangeImage(e) {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      onChange?.(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => setPickedImage(reader.result);
    reader.readAsDataURL(file);

    // Pass the file back to react-hook-form
    onChange?.(e);
  }

  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend text-sm'>Pick an Image</legend>

      <input
        type='file'
        accept='image/*'
        className='file-input file-input-neutral'
        onChange={handleChangeImage}
        {...props}
      />

      {pickedImage && (
        <img
          src={pickedImage}
          className='w-24 h-24 border border-base-300 rounded'
        />
      )}
    </fieldset>
  );
}
