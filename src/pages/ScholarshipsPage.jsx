import { useState } from "react";
import ScholarshipCard from "../components/scholarships/ScholarshipCard";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Skeleton from "../components/loaders/Skeleton";

export default function ScholarshipsPage() {
  const axiosBase = useAxios();

  // State for search, filter, sort, pagination
  const [search, setSearch] = useState("");
  const [universityCountry, setUniversityCountry] = useState("");
  const [subjectCategory, setSubjectCategory] = useState("");
  const [sort, setSort] = useState("-scholarshipPostDate");
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, isLoading } = useQuery({
    queryKey: [
      "scholarships",
      search,
      universityCountry,
      subjectCategory,
      sort,
      page,
    ],
    queryFn: async () => {
      const params = {
        search,
        universityCountry,
        subjectCategory,
        sort,
        page,
        limit,
      };
      const res = await axiosBase.get("/scholarships", { params });
      return res.data;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <Skeleton />;

  return (
    <div className='py-4 px-4'>
      <h2 className='text-4xl font-bold text-center mb-8 text-secondary-content'>
        Scholarships
      </h2>

      {/* Filters/Search/Sort */}
      <div className='flex flex-wrap gap-4 justify-center mb-6'>
        <input
          type='text'
          placeholder='Search by name, university, or degree'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='input input-bordered w-full sm:w-auto'
        />
        <input
          type='text'
          placeholder='Filter by Country'
          value={universityCountry}
          onChange={(e) => setUniversityCountry(e.target.value)}
          className='input input-bordered w-full sm:w-auto'
        />
        <input
          type='text'
          placeholder='Filter by Subject'
          value={subjectCategory}
          onChange={(e) => setSubjectCategory(e.target.value)}
          className='input input-bordered w-full sm:w-auto'
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className='select select-bordered w-full sm:w-auto'
        >
          <option value='-scholarshipPostDate'>Latest</option>
          <option value='applicationFees'>Fees: Low to High</option>
          <option value='-applicationFees'>Fees: High to Low</option>
        </select>
      </div>

      {/* Scholarship cards grid */}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {data?.data?.length ? (
          data.data.map((el) => (
            <ScholarshipCard key={el._id} scholarship={el} />
          ))
        ) : (
          <p className='text-center col-span-full'>No scholarships found</p>
        )}
      </div>

      {/* Pagination */}
      {data?.totalPages > 1 && (
        <div className='flex justify-center mt-6 gap-2 flex-wrap'>
          {Array.from({ length: data.totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`btn btn-sm ${
                page === i + 1 ? "btn-primary" : "btn-outline"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
