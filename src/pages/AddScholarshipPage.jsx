import { Controller, useForm } from "react-hook-form";
import InputField from "./../components/scholarships/InputField";
import ImagePicker from "../components/imagePicker/ImagePicker";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { imgUploadToImgBB } from "../utils/http";
import Select from "./../components/ui/Select";
import { useState } from "react";

export default function AddScholarshipPage() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      const coverImage = await imgUploadToImgBB(
        data?.scholarshipName,
        data?.universityImage[0]
      );
      data = { ...data, universityImage: coverImage };
      await axiosSecure.post("/scholarships", data);
      reset();
      toast.success("Successfully created a Scholarship!");
      setIsLoading(false);
    } catch (error) {
      if (error) {
        toast.error("fail to create scholarship");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col md:flex-row md:justify-around'>
          <div className='min-w-2xs'>
            <InputField
              {...register("scholarshipName", { required: true })}
              label='Scholarship Name'
              type='text'
            />
            <InputField
              {...register("universityName", { required: true })}
              label='University Name'
              type='text'
            />
            <InputField
              {...register("universityCountry", { required: true })}
              label='Country Name'
              type='text'
            />
            <InputField
              {...register("universityCity", { required: true })}
              label='City Name'
              type='text'
            />
            <InputField
              {...register("universityWorldRank", { required: true })}
              label='World Rank'
              type='number'
            />
            <InputField
              {...register("postedUserEmail", { required: true })}
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
            {errors?.universityImage?.type === "required" && (
              <p className='text-red-500'>Please Select an image</p>
            )}
          </div>
          <div className='flex flex-col gap-4'>
            <div className='min-w-2xs'>
              <Select
                {...register("scholarshipCategory", { required: true })}
                label='Scholarship Category'
                type='text'
              >
                <option>Full-Fund</option>
                <option>Partial-Fund</option>
                <option>Self-Fund</option>
              </Select>
              <InputField
                {...register("subjectCategory", { required: true })}
                label='Subject Category'
                type='text'
              />
              <Select
                {...register("degree", { required: true })}
                label='Degree'
                type='text'
              >
                <option>Diploma</option>
                <option>Bachelor</option>
                <option>Masters</option>
              </Select>
              <InputField
                {...register("tuitionFees", { required: true })}
                label='Tuition Fee'
                type='number'
              />
              <InputField
                {...register("applicationFees", { required: true })}
                label='Application Fee'
                type='number'
              />
              <InputField
                {...register("serviceCharge", { required: true })}
                label='Service Charge'
                type='number'
              />
              <InputField
                {...register("applicationDeadline", { required: true })}
                label='Deadline'
                type='date'
              />
            </div>
            <div className='flex flex-row gap-2 justify-end'>
              <button type='reset' className='btn btn-secondary'>
                Reset
              </button>
              <button
                disabled={isLoading}
                type='submit'
                className='btn btn-success'
              >
                {isLoading ? "Submitting....." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
