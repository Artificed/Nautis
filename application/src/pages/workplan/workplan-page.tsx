import CustomCursor from "../../common/shared/custom-cursor";
import Navbar from "../../common/components/navbar";
import HeroSection from "./components/hero-section";
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
          <Footer />
        </div>
      </div>
    </CustomCursor>
  );
}
