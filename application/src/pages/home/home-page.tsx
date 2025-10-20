import CustomCursor from "../../common/shared/custom-cursor";
import Navbar from "../../common/components/navbar";
import HeroSection from "./components/hero-section";
import AboutSection from "./components/about-section";
import SkillsSection from "./components/skills-section";
import StrengthsSection from "./components/strengths-section";
import ExperienceSection from "./components/experience-section";
import AchievementSection from "./components/achievement-section";
import WhyMeSection from "./components/why-me-section";
import Footer from "../../common/components/footer";

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