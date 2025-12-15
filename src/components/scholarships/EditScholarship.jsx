import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Select from "../ui/Select";

export default function EditScholarship() {
  const { register } = useForm({});
  return (
    <div>
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
          <option>Full fund</option>
          <option>Partial</option>
          <option>Self-fund</option>
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
    </div>
  );
}
