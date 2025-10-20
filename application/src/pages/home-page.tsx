import CustomCursor from "../ui/components/custom-cursor";
import Navbar from "../navigation/components/navbar";
import HeroSection from "../personal/components/hero-section";
import AboutSection from "../personal/components/about-section";
import SkillsSection from "../personal/components/skills-section";
import StrengthsSection from "../personal/components/strengths-section";
import ExperienceSection from "../personal/components/experience-section";
import AchievementSection from "../personal/components/achievement-section";
import WhyMeSection from "../personal/components/why-me-section";
import Footer from "../ui/components/footer";

export default function HomePage() {
  return (
    <CustomCursor>
      <Navbar />
      <div className="snap-container">
        <div className="snap-section">
          <HeroSection />
        </div>

        <div className="snap-section">
          <AboutSection />
        </div>

        <div className="snap-section">
          <SkillsSection />
        </div>

        <div className="snap-section">
          <StrengthsSection />
        </div>

        <div className="snap-section">
          <ExperienceSection />
        </div>

        <div className="snap-section">
          <AchievementSection />
        </div>

        <div className="snap-section">
          <WhyMeSection />
        </div>

        <div className="snap-section">
          <Footer />
        </div>
      </div>
    </CustomCursor>
  );
}