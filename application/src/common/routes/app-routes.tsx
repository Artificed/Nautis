import { Routes, Route, Navigate } from "react-router-dom";
import ResearchPage from "../../pages/research/research-page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/research" replace />} />
      <Route path="/research" element={<ResearchPage />} />
    </Routes>
  );
}
