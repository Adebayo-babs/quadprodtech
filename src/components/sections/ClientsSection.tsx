import TitleBox from "../ui/TitleBox";
import PartnerLogo from "../PartnerLogo";
import { CLIENT_LOGOS, PARTNER_LOGOS } from "../../data/content";
import { IMG } from "../../data/media";
import type { PartnerLogo as Logo } from "../../data/content";

function LogoGrid({ logos }: { logos: Logo[] }) {
  return (
    <div className="clients-grid">
      {logos.map((logo) => (
        <div className="client-logo" key={logo.name}>
          <PartnerLogo logo={logo} />
        </div>
      ))}
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="clients" id="clients" style={{ backgroundImage: `url(${IMG.waveBg})` }}>
      <div className="container">
        <div className="center">
          <TitleBox variant="clients" main="OUR CLIENTS" />
        </div>
        <LogoGrid logos={CLIENT_LOGOS} />

        <div className="center" style={{ marginTop: 72 }}>
          <TitleBox variant="clients" main="OUR PARTNERS" />
        </div>
        <LogoGrid logos={PARTNER_LOGOS} />
      </div>
    </section>
  );
}
