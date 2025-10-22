import CustomCursor from "../../common/shared/custom-cursor";
import Navbar from "../../common/components/navbar";
import Footer from "../../common/components/footer";

export default function ResearchPage() {
  return (
    <CustomCursor>
      <Navbar />
      <div className="snap-container">
        {/* Add your research sections here */}
        
        <div className="snap-section">
          <Footer />
        </div>
      </div>
    </CustomCursor>
  );
}
