import ContactUsSection from "../components/homepage/ContactUsSection";
import FaqSection from "../components/homepage/FaqSection";
import HeroSection from "../components/homepage/HeroSection";
import StoriesSection from "../components/homepage/StoriesSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StoriesSection />
      <FaqSection />
      <ContactUsSection />
    </div>
  );
}
