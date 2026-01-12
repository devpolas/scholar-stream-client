import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ScholarshipCard from "../components/scholarships/ScholarshipCard";
import useAxios from "../hooks/useAxios";
import ScholarshipSkeleton from "../components/skeleton/ScholarshipSkeleton";

// simple debounce hook
function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export default function ScholarshipsPage() {
  const axiosBase = useAxios();

  const [filters, setFilters] = useState({
    search: "",
    universityCountry: "",
    subjectCategory: "",
    sort: "-scholarshipPostDate",
  });

  const [page, setPage] = useState(1);
  const limit = 8;

  // Debounced search input
  const debouncedSearch = useDebounce(filters.search);

  // Reset page when filters change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage((prev) => (prev === 1 ? prev : 1));
  }, [
    debouncedSearch,
    filters.universityCountry,
    filters.subjectCategory,
    filters.sort,
  ]);

  // Memoized query params
  const queryParams = useMemo(
    () => ({
      search: debouncedSearch,
      universityCountry: filters.universityCountry,
      subjectCategory: filters.subjectCategory,
      sort: filters.sort,
      page,
      limit,
    }),
    [debouncedSearch, filters, page]
  );

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["scholarships", queryParams],
    queryFn: async () => {
      const res = await axiosBase.get("/scholarships", {
        params: queryParams,
      });
      return res.data;
    },
    keepPreviousData: true,
  });

  const handleChange = (key) => (e) =>
    setFilters((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <div className='py-4 px-4 min-h-screen'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-8 text-primary'>
        Scholarships
      </h2>

      {/* Filters */}
      <div className='flex flex-wrap gap-4 justify-center mb-6'>
        <input
          type='text'
          placeholder='Search by name, university, or degree'
          value={filters.search}
          onChange={handleChange("search")}
          className='input input-bordered w-full sm:w-64'
        />

        <input
          type='text'
          placeholder='Country'
          value={filters.universityCountry}
          onChange={handleChange("universityCountry")}
          className='input input-bordered w-full sm:w-48'
        />

        <input
          type='text'
          placeholder='Subject'
          value={filters.subjectCategory}
          onChange={handleChange("subjectCategory")}
          className='input input-bordered w-full sm:w-48'
        />

        <select
          value={filters.sort}
          onChange={handleChange("sort")}
          className='select select-bordered w-full sm:w-48'
        >
          <option value='-scholarshipPostDate'>Latest</option>
          <option value='applicationFees'>Fees: Low → High</option>
          <option value='-applicationFees'>Fees: High → Low</option>
        </select>
      </div>

      {/* Loading */}
      {isLoading ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {Array.from({ length: 10 }, (_, i) => (
            <ScholarshipSkeleton key={i} />
          ))}
        </div>
      ) : (
        <>
          {/* Grid */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {data?.data?.length ? (
              data.data.map((item) => (
                <ScholarshipCard key={item._id} scholarship={item} />
              ))
            ) : (
              <p className='text-center col-span-full text-gray-500'>
                No scholarships found
              </p>
            )}
          </div>

          {/* Pagination */}
          {data?.totalPages > 1 && (
            <div className='flex justify-center mt-6 gap-2 flex-wrap'>
              {Array.from({ length: data.totalPages }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    disabled={isFetching}
                    className={`btn btn-sm ${
                      page === pageNum ? "btn-primary" : "btn-outline"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
