import ScholarshipCard from "../scholarships/ScholarshipCard";

export default function TopScholarships({ data }) {
  return (
    <div className='py-12 px-4'>
      <h2 className='text-4xl font-bold text-center mb-8 text-secondary-content'>
        Top Scholarships
      </h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {data.map((el) => (
          <ScholarshipCard scholarship={el} />
        ))}
      </div>
    </div>
  );
}
