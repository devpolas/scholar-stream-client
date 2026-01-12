import { motion } from "motion/react";
import { Link } from "react-router";

export default function ScholarshipCard({ scholarship }) {
  const {
    _id,
    universityImage,
    universityName,
    scholarshipCategory,
    universityCountry,
    universityCity,
    applicationFees,
  } = scholarship;

  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      key={_id}
      variants={cardVariant}
      whileHover={{
        scale: 1.03,
        y: -5,
        boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
      }}
      className='card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 border-x border-b border-blue-100'
    >
      {/* University Image */}
      <figure>
        <img
          src={universityImage}
          alt={universityName}
          className='w-full h-48 object-cover'
        />
      </figure>

      <div className='card-body'>
        {/* University Name */}
        <h2 className='card-title text-xl font-semibold'>{universityName}</h2>

        {/* Scholarship Category Badge */}
        <div className='badge badge-primary'>{scholarshipCategory}</div>

        {/* Location */}
        <p className='text-gray-600 mt-2 text-sm'>
          🌍 {universityCity}, {universityCountry}
        </p>

        {/* Application Fees */}
        {applicationFees ? (
          <p className='text-md font-medium mt-1'>
            💵 Application Fees:{" "}
            <span className='text-primary'>${applicationFees}</span>
          </p>
        ) : (
          <p className='text-md text-green-600 font-medium mt-1'>
            ✔️ No Application Fees
          </p>
        )}

        {/* View Details Button */}
        <div className='card-actions justify-end mt-4'>
          <Link to={`/scholarship/${_id}`}>
            <button className='btn btn-primary btn-sm'>View Details</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
