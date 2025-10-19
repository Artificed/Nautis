import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import AchievementSection from "../components/AchievementSection";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";

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
          <ExperienceSection />
        </div>

        <div className="snap-section">
          <AchievementSection />
        </div>
      </div>
    </CustomCursor>
  );
}