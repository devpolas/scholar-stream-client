import { useRouteLoaderData } from "react-router";
import ScholarshipCard from "../components/scholarships/ScholarshipCard";

export default function ScholarshipsPage() {
  const data = useRouteLoaderData("root");

  return (
    <div className='py-4 px-4'>
      <h2 className='text-4xl font-bold text-center mb-8 text-secondary-content'>
        All Scholarships
      </h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {data.data.map((el) => (
          <ScholarshipCard key={el._id} scholarship={el} />
        ))}
      </div>
    </div>
  );
}
