import TitleBox from "../ui/TitleBox";
import PartnerLogo from "../PartnerLogo";
import { PARTNER_LOGOS } from "../../data/content";
import { IMG } from "../../data/media";

export default function ClientsSection() {
  return (
    <section className="clients" style={{ backgroundImage: `url(${IMG.waveBg})` }}>
      <div className="container">
        <div className="center">
          <TitleBox variant="clients" top="OUR" main="CLIENTS" />
        </div>
        <div className="clients-grid">
          {PARTNER_LOGOS.map((logo) => (
            <div className="client-logo" key={logo.name}>
              <PartnerLogo logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
