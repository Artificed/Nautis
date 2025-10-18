import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="snap-container">
        <div className="snap-section">
          <HeroSection />
        </div>

        <div className="snap-section">
          <AboutSection />
        </div>
      </div>
    </>
  );
}