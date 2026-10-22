import Hero from "../components/sections/Hero";
import IntroSection from "../components/sections/IntroSection";
import AboutSection from "../components/sections/AboutSection";
import ExpertiseSection from "../components/sections/ExpertiseSection";
import CCTVProductsSection from "../components/sections/CCTVProductsSection";
import TankGaugingSection from "../components/sections/TankGaugingSection";
import FireGasSection from "../components/sections/FireGasSection";
import FabricationSection from "../components/sections/FabricationSection";
import SubseaSection from "../components/sections/SubseaSection";
import SecuritySection from "../components/sections/SecuritySection";
import EPCICover from "../components/sections/EPCICover";
import SafetySection from "../components/sections/SafetySection";
import ClientsSection from "../components/sections/ClientsSection";
import ContactInfoSection from "../components/sections/ContactInfoSection";
import ClosingSection from "../components/sections/ClosingSection";

// Follows the page order of the Company Profile.
export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <AboutSection teaser />
      <ExpertiseSection />
      <CCTVProductsSection />
      <TankGaugingSection />
      <FireGasSection />
      <FabricationSection />
      <SubseaSection />
      <SecuritySection />
      <EPCICover link />
      <SafetySection />
      <ClientsSection />
      <ContactInfoSection />
      <ClosingSection />
    </>
  );
}
