import ScholarshipCard from "../scholarships/ScholarshipCard";
import ScholarshipSkeleton from "../skeleton/ScholarshipSkeleton";

export default function TopScholarships({ data = [], isLoading }) {
  const topScholarship = [...data].slice(0, 6);
  return (
    <div className='py-12 px-4'>
      <h2 className='text-4xl font-bold text-center mb-8 text-secondary-content'>
        Top Scholarships
      </h2>
      {isLoading ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 6 }, (_, i) => (
            <ScholarshipSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {topScholarship &&
            topScholarship.map((el) => (
              <ScholarshipCard key={el._id} scholarship={el} />
            ))}
        </div>
      )}
    </div>
  );
}
