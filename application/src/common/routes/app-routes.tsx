import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/home-page";
import InnovationsPage from "../../pages/innovations/innovations-page";
import TPAPage from "../../pages/tpa/tpa-page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/innovations" element={<InnovationsPage />} />
      <Route path="/tpa" element={<TPAPage />} />
    </Routes>
  );
}
