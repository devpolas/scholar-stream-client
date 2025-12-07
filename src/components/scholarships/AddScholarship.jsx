import { Controller, useForm } from "react-hook-form";
import InputField from "./InputField";
import ImagePicker from "../imagePicker/ImagePicker";

export default function AddScholarship() {
  const { control, register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className='flex flex-col md:flex-row md:justify-around'>
        <div className='w-sm'>
          <InputField
            {...register("scholarshipName")}
            label='Scholarship Name'
            type='text'
          />
          <InputField
            {...register("universityName")}
            label='University Name'
            type='text'
          />
          <InputField
            {...register("countryName")}
            label='Country Name'
            type='text'
          />
          <InputField {...register("cityName")} label='City Name' type='text' />
          <InputField
            {...register("worldRank")}
            label='World Rank'
            type='text'
          />
          <InputField
            {...register("userEmail")}
            label='User Email'
            type='email'
          />
          <Controller
            name='profileImage'
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <ImagePicker
                onChange={(e) => {
                  const file = e?.target?.files?.[0] || null;
                  field.onChange(file);
                }}
              />
            )}
          />
        </div>
        <div className='w-sm'>
          <InputField
            {...register("scholarshipCategory")}
            label='Scholarship Category'
            type='text'
          />
          <InputField
            {...register("subjectCategory")}
            label='Subject Category'
            type='text'
          />
          <InputField {...register("degree")} label='Degree' type='text' />
          <InputField
            {...register("tuitionFee")}
            label='Tuition Fee'
            type='number'
          />
          <InputField
            {...register("applicationFee")}
            label='Application Fee'
            type='number'
          />
          <InputField
            {...register("serviceCharge")}
            label='Service Charge'
            type='number'
          />
          <InputField {...register("deadline")} label='Deadline' type='date' />
        </div>
      </div>
    </form>
  );
}
