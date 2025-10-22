import CustomCursor from "../../common/shared/custom-cursor";
import Navbar from "../../common/components/navbar";
import ResearchHeroSection from "./components/hero-section";
import KubernetesMCPSection from "./components/k8s-mcp-section";
import LLMSection from "./components/llm-section";
import N8NAutomationSection from "./components/n8n-section";
import ChatSection from "./components/chat-section";

export default function ResearchPage() {
  return (
    <CustomCursor>
      <Navbar />
      <div className="snap-container">
        <div className="snap-section">
          <ResearchHeroSection />
        </div>
        <div className="snap-section">
          <KubernetesMCPSection />
        </div>
        <div className="snap-section">
          <LLMSection />
        </div>
        <div className="snap-section">
          <N8NAutomationSection />
        </div>
        <div className="snap-section">
          <ChatSection />
        </div>
      </div>
    </CustomCursor>
  );
}
