import { Navigate } from "react-router-dom";

// Office details now live on the Contact page, as in the Company Profile.
export default function LocationsPage() {
  return <Navigate to="/contact" replace />;
}
