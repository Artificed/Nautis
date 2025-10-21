import CustomCursor from "../../common/shared/custom-cursor";
import Navbar from "../../common/components/navbar";
import Footer from "../../common/components/footer";
import GameSection from "./components/game-section";

export default function TPAPage() {
  return (
    <CustomCursor>
      <Navbar />
      <div className="snap-container">
        <div className="snap-section">
          <GameSection />
        </div>

        <div className="snap-section">
          <Footer />
        </div>
      </div>
    </CustomCursor>
  );
}
