import CustomCursor from "../../common/shared/custom-cursor";
import Navbar from "../../common/components/navbar";
import Footer from "../../common/components/footer";
import FeedbackFormSection from "./components/feedback-form-section";
import AutomationSection from "./components/automation-section";
import SchedulingSection from "./components/scheduling-section";
import VibeCodingSection from "./components/vibe-coding-section";
import BalancedTeamSection from "./components/balanced-team-section";

export default function InnovationsPage() {
  return (
    <CustomCursor>
      <Navbar />
      <div className="snap-container">
        <div className="snap-section">
          <FeedbackFormSection />
        </div>

        <div className="snap-section">
          <AutomationSection />
        </div>

        <div className="snap-section">
          <SchedulingSection />
        </div>

        <div className="snap-section">
          <VibeCodingSection />
        </div>

        <div className="snap-section">
          <BalancedTeamSection />
        </div>
      </div>
    </CustomCursor>
  );
}

