import CCTVProductsSection from "../components/sections/CCTVProductsSection";
import TankGaugingSection from "../components/sections/TankGaugingSection";
import FireGasSection from "../components/sections/FireGasSection";
import FabricationSection from "../components/sections/FabricationSection";
import SubseaSection from "../components/sections/SubseaSection";
import SecuritySection from "../components/sections/SecuritySection";

export default function ProductsPage() {
  return (
    <div className="page-top">
      <CCTVProductsSection />
      <TankGaugingSection />
      <FireGasSection />
      <FabricationSection />
      <SubseaSection />
      <SecuritySection />
    </div>
  );
}
