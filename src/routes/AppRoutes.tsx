import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ExpertisePage from "../pages/ExpertisePage";
import CapabilitiesPage from "../pages/CapabilitiesPage";
import ProductsPage from "../pages/ProductsPage";
import SafetyPage from "../pages/SafetyPage";
import TrackRecordPage from "../pages/TrackRecordPage";
import LocationsPage from "../pages/LocationsPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/capabilities" element={<CapabilitiesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/clients" element={<TrackRecordPage />} />
        <Route path="/track-record" element={<Navigate to="/clients" replace />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}
