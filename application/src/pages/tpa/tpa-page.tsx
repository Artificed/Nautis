import CustomCursor from "../../common/shared/custom-cursor";
import Navbar from "../../common/components/navbar";
import Footer from "../../common/components/footer";
import GameSection from "./components/game-section";
import WebSection from "./components/web-section";
import NetworkSection from "./components/network-section";
import MobileSection from "./components/mobile-section";

export default function TPAPage() {
  return (
    <CustomCursor>
      <Navbar />
      <div className="snap-container">
        <div className="snap-section">
          <GameSection />
        </div>

        <div className="snap-section">
          <WebSection />
        </div>

        <div className="snap-section">
          <NetworkSection />
        </div>

        <div className="snap-section">
          <MobileSection />
        </div>
      </div>
    </CustomCursor>
  );
}
