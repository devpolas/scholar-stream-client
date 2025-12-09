import { useRouteLoaderData } from "react-router";
import ContactUsSection from "../components/homepage/ContactUsSection";
import FaqSection from "../components/homepage/FaqSection";
import HeroSection from "../components/homepage/HeroSection";
import StoriesSection from "../components/homepage/StoriesSection";
import TopScholarships from "../components/homepage/TopScholarships";

export default function HomePage() {
  const data = useRouteLoaderData("root");
  const scholarshipData = [...data].slice(0, 6);
  return (
    <div>
      <HeroSection />
      <TopScholarships data={scholarshipData} />
      <StoriesSection />
      <FaqSection />
      <ContactUsSection />
    </div>
  );
}
