import CustomCursor from "../../common/shared/custom-cursor";
import Navbar from "../../common/components/navbar";
import HeroSection from "./components/hero-section";
import SemesterOneSection from "./components/semester-one-section";
import SemesterOneDetailsSection from "./components/semester-one-details-section";
import SemesterTwoSection from "./components/semester-two-section";
import SemesterTwoDetailsSection from "./components/semester-two-details-section";
import Footer from "../../common/components/footer";

export default function WorkplanPage() {
  return (
    <CustomCursor>
      <Navbar />
      <div className="snap-container">
        <div className="snap-section">
          <HeroSection />
        </div>

        <div className="snap-section">
          <SemesterOneSection />
        </div>

        <div className="snap-section">
          <SemesterOneDetailsSection />
        </div>

        <div className="snap-section">
          <SemesterTwoSection />
        </div>

        <div className="snap-section">
          <SemesterTwoDetailsSection />
        </div>

        <div className="snap-section">
          <Footer />
        </div>
      </div>
    </CustomCursor>
  );
}
