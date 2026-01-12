import { useQuery } from "@tanstack/react-query";
import ContactUsSection from "../components/homepage/ContactUsSection";
import FaqSection from "../components/homepage/FaqSection";
import HeroSection from "../components/homepage/HeroSection";
import StoriesSection from "../components/homepage/StoriesSection";
import TopScholarships from "../components/homepage/TopScholarships";
import useAxios from "../hooks/useAxios";
import FeaturesSection from "../components/homepage/FeaturesSection";
import StatisticsSection from "../components/homepage/StatisticsSection";
import NewsletterSection from "../components/homepage/NewsletterSection";

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
      <StatisticsSection />
      <TopScholarships data={scholarships} isLoading={isLoading} />
      <FeaturesSection />
      <StoriesSection />
      <FaqSection />
      <ContactUsSection />
      <NewsletterSection />
    </div>
  );
}
