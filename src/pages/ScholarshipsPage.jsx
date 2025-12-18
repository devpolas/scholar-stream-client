import ScholarshipCard from "../components/scholarships/ScholarshipCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Skeleton from "../components/loaders/Skeleton";

export default function ScholarshipsPage() {
  const axiosBase = useAxios();
  const { data: scholarships, isLoading } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const res = await axiosBase.get("/scholarships");
      return res.data?.data;
    },
  });

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className='py-4 px-4'>
      <h2 className='text-4xl font-bold text-center mb-8 text-secondary-content'>
        All Scholarships
      </h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {scholarships.length &&
          scholarships.map((el) => (
            <ScholarshipCard key={el._id} scholarship={el} />
          ))}
      </div>
    </div>
  );
}
