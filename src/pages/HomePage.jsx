import { useQuery } from "@tanstack/react-query";
import ContactUsSection from "../components/homepage/ContactUsSection";
import FaqSection from "../components/homepage/FaqSection";
import HeroSection from "../components/homepage/HeroSection";
import StoriesSection from "../components/homepage/StoriesSection";
import TopScholarships from "../components/homepage/TopScholarships";
import useAxios from "../hooks/useAxios";

export default function HomePage() {
  const axiosBase = useAxios();
  const { data: scholarships, isLoading } = useQuery({
    queryKey: ["scholarships"],
    queryFn: async () => {
      const res = await axiosBase.get("/scholarships");
      return res.data?.data || [];
    },
  });
  console.log(isLoading);
  return (
    <div>
      <HeroSection />
      <TopScholarships data={scholarships} isLoading={isLoading} />
      <StoriesSection />
      <FaqSection />
      <ContactUsSection />
    </div>
  );
}
