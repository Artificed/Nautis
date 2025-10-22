import CustomCursor from "../../common/shared/custom-cursor";
import Navbar from "../../common/components/navbar";
import ChatSection from "./components/chat-section";

export default function ResearchPage() {
  return (
    <CustomCursor>
      <Navbar />
      <div className="snap-container">
        <div className="snap-section">
          <ChatSection />
        </div>
      </div>
    </CustomCursor>
  );
}
