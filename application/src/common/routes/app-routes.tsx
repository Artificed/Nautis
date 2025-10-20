import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/home-page";
import InnovationsPage from "../../pages/innovations/innovations-page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/innovations" element={<InnovationsPage />} />
    </Routes>
  );
}
