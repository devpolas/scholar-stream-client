import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Select from "../ui/Select";
import { useEffect } from "react";

export default function EditScholarship({ onSubmit, scholarship }) {
  const { register, handleSubmit, reset } = useForm();

  // 🔥 populate form when modal opens
  useEffect(() => {
    if (scholarship) {
      reset({
        ...scholarship,
        applicationDeadline: new Date(scholarship.applicationDeadline)
          .toISOString()
          .split("T")[0],
      });
    }
  }, [scholarship, reset]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <Input
          label='Scholarship Name'
          {...register("scholarshipName", { required: true })}
        />

        <Input
          label='University Name'
          {...register("universityName", { required: true })}
        />

        <Input label='University Country' {...register("universityCountry")} />

        <Input label='University City' {...register("universityCity")} />

        <Input
          label='World Rank'
          type='number'
          {...register("universityWorldRank")}
        />

        <Input label='Subject Category' {...register("subjectCategory")} />

        <Select
          label='Scholarship Category'
          {...register("scholarshipCategory")}
        >
          <option>Full-Fund</option>
          <option>Partial-Fund</option>
          <option>Self-Fund</option>
        </Select>

        <Select label='Degree' {...register("degree")}>
          <option>Diploma</option>
          <option>Bachelor</option>
          <option>Masters</option>
        </Select>

        <Input
          label='Tuition Fees'
          type='number'
          {...register("tuitionFees")}
        />

        <Input
          label='Application Fees'
          type='number'
          {...register("applicationFees")}
        />

        <Input
          label='Service Charge'
          type='number'
          {...register("serviceCharge")}
        />

        <Input
          label='Application Deadline'
          type='date'
          {...register("applicationDeadline")}
        />
      </div>
      <button type='submit' className='btn btn-outline btn-secondary mt-4'>
        Update
      </button>
    </form>
  );
}
