import { Controller, useForm } from "react-hook-form";
import InputField from "./../components/scholarships/InputField";
import ImagePicker from "../components/imagePicker/ImagePicker";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { imgUploadToImgBB } from "../utils/http";
import Select from "./../components/ui/Select";

export default function AddScholarshipPage() {
  const { control, register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  async function onSubmit(data) {
    try {
      const coverImage = await imgUploadToImgBB(
        data?.scholarshipName,
        data?.universityImage[0]
      );
      data = { ...data, universityImage: coverImage };
      await axiosSecure.post("/scholarships", data);
      reset();
      toast.success("Successfully created a Scholarship!");
    } catch (error) {
      if (error) {
        toast.error("fail to create scholarship");
      }
    }
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
              {...register("universityCountry")}
              label='Country Name'
              type='text'
            />
            <InputField
              {...register("universityCity")}
              label='City Name'
              type='text'
            />
            <InputField
              {...register("universityWorldRank")}
              label='World Rank'
              type='text'
            />
            <InputField
              {...register("postedUserEmail")}
              label='User Email'
              type='email'
            />
            <Controller
              name='coverImage'
              control={control}
              defaultValue={null}
              render={({ field }) => (
                <ImagePicker
                  {...register("universityImage", { required: true })}
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
              <Select
                {...register("scholarshipCategory")}
                label='Scholarship Category'
                type='text'
              >
                <option>Full-Fund</option>
                <option>Partial-Fund</option>
                <option>Self-Fund</option>
              </Select>
              <InputField
                {...register("subjectCategory")}
                label='Subject Category'
                type='text'
              />
              <Select {...register("degree")} label='Degree' type='text'>
                <option>Diploma</option>
                <option>Bachelor</option>
                <option>Masters</option>
              </Select>
              <InputField
                {...register("tuitionFees")}
                label='Tuition Fee'
                type='number'
              />
              <InputField
                {...register("applicationFees")}
                label='Application Fee'
                type='number'
              />
              <InputField
                {...register("serviceCharge")}
                label='Service Charge'
                type='number'
              />
              <InputField
                {...register("applicationDeadline")}
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
