import { Controller, useForm } from "react-hook-form";
import InputField from "./../components/scholarships/InputField";
import ImagePicker from "../components/imagePicker/ImagePicker";

export default function AddScholarshipPage() {
  const { control, register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col md:flex-row md:justify-around'>
          <div className='min-w-2xs'>
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
            <InputField
              {...register("cityName")}
              label='City Name'
              type='text'
            />
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
          <div className='flex flex-col gap-4'>
            <div className='min-w-2xs'>
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
              <InputField
                {...register("deadline")}
                label='Deadline'
                type='date'
              />
            </div>
            <div className='flex flex-row gap-2 justify-end'>
              <button type='reset' className='btn btn-secondary'>
                Reset
              </button>
              <button type='submit' className='btn btn-success'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
