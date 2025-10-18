import HeroSection from "../components/HeroSection";

export default function HomePage() {
  return (
    <div className="snap-container">
      <div className="snap-section">
        <HeroSection />
      </div>

      <div className="snap-section min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Section 2
          </h2>
        </div>
      </div>
    </div>
  );
}