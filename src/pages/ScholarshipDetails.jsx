import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAxios from "../hooks/useAxios";
import useAuthContext from "../contexts/useAuthContext";
import { useLocation, useNavigate, useParams } from "react-router";
import {
  FaUniversity,
  FaGlobe,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaEnvelope,
} from "react-icons/fa";
import { formatTimeDate } from "../utils/formateTimeDate";

export default function ScholarshipDetails() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();

  const axiosBase = useAxios();

  const { data: scholarship, isLoading } = useQuery({
    queryKey: ["scholarship", id],
    queryFn: async () => {
      const res = await axiosBase.get(`/scholarships/${id}`);
      return res.data?.data;
    },
  });

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  async function handleApplication() {
    try {
      if (!user) {
        navigate("/login", { state: location?.pathname, replace: true });
        return;
      }
      const result = await axiosSecure.post(
        `/scholarships/${id}/applications`,
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
          value={formatTimeDate(scholarship?.applicationDeadline)}
        />

        <Info
          icon={<FaCalendarAlt />}
          label='Posted Date'
          value={formatTimeDate(scholarship?.scholarshipPostDate)}
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
