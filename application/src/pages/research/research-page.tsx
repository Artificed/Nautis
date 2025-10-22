import CustomCursor from "../../common/shared/custom-cursor";
import Navbar from "../../common/components/navbar";
import Footer from "../../common/components/footer";
import ChatSection from "./components/chat-section";

export default function ResearchPage() {
  return (
    <CustomCursor>
      <Navbar />
      <div className="snap-container">
        <div className="snap-section">
          <ChatSection />
        </div>
        
        <div className="snap-section">
          <Footer />
        </div>
      </div>
    </CustomCursor>
  );
}
