import { Routes, Route } from "react-router-dom";
import ResearchPage from "../../pages/research/research-page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ResearchPage />} />
    </Routes>
  );
}
