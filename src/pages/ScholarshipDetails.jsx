import { useParams, useRouteLoaderData } from "react-router";
import useAxiosSecure from "../hooks/useAxios";
import toast from "react-hot-toast";
import {
  FaUniversity,
  FaGlobe,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function ScholarshipDetails() {
  const axiosSecure = useAxiosSecure();
  const data = useRouteLoaderData("root");

  const { id } = useParams();
  const scholarshipId = id;

  const scholarship = [...data.data].find(
    (el) => parseInt(el._id) === parseInt(id)
  );

  async function handleApplication() {
    try {
      const result = await axiosSecure.post(
        `/scholarships/${scholarshipId}/applications`,
        {}
      );

      if (result.status === 201) {
        toast.success("Successfully applied!");
      } else {
        toast.error("Failed to apply!");
      }
    } catch (error) {
      toast.error("Failed to apply!");
      console.error(error);
    }
  }

  return (
    <div className='max-w-6xl mx-auto px-4 py-10'>
      {/* University Image */}
      <div className='w-full'>
        <img
          src={scholarship?.universityImage}
          alt={scholarship.universityName}
          className='w-full h-56 md:h-72 object-cover rounded-lg'
        />
      </div>

      {/* Main Info */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <Info label='Scholarship Name' value={scholarship?.scholarshipName} />

        <Info
          icon={<FaUniversity />}
          label='University'
          value={scholarship?.universityName}
        />

        <Info
          icon={<FaGlobe />}
          label='Country'
          value={scholarship?.universityCountry}
        />

        <Info
          icon={<FaMapMarkerAlt />}
          label='City'
          value={scholarship?.universityCity}
        />

        <Info
          label='World Rank'
          value={`#${scholarship?.universityWorldRank}`}
        />

        <Info label='Subject Category' value={scholarship?.subjectCategory} />

        <Info
          label='Scholarship Type'
          value={scholarship?.scholarshipCategory}
        />

        <Info
          icon={<FaGraduationCap />}
          label='Degree'
          value={scholarship.degree}
        />
      </div>

      <div className='divider' />

      {/* Fees */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <Info
          icon={<FaMoneyBillWave />}
          label='Tuition Fees'
          value={
            scholarship?.tuitionFees
              ? `$${scholarship?.tuitionFees}`
              : "Not required"
          }
        />

        <Info
          icon={<FaMoneyBillWave />}
          label='Application Fees'
          value={`$${scholarship?.applicationFees}`}
        />

        <Info
          icon={<FaMoneyBillWave />}
          label='Service Charge'
          value={`$${scholarship?.serviceCharge}`}
        />
      </div>

      <div className='divider' />

      {/* Dates & User */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <Info
          icon={<FaCalendarAlt />}
          label='Application Deadline'
          value={scholarship?.applicationDeadline}
        />

        <Info
          icon={<FaCalendarAlt />}
          label='Posted Date'
          value={scholarship?.scholarshipPostDate}
        />

        <Info
          icon={<FaEnvelope />}
          label='Posted By'
          value={scholarship?.postedUserEmail}
        />
      </div>
      {/* Action Button */}
      <div className='mt-10 flex justify-center'>
        <button
          onClick={handleApplication}
          className='btn btn-primary px-10 text-lg'
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

const Info = ({ label, value, icon }) => (
  <div className='flex gap-3'>
    {icon && <span className='text-primary mt-1'>{icon}</span>}
    <div>
      <p className='text-sm text-gray-500'>{label}</p>
      <p className='font-medium break-words'>{value}</p>
    </div>
  </div>
);
