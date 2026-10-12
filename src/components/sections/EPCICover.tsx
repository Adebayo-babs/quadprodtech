import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMG } from "../../data/media";

export default function EPCICover({ link = false }: { link?: boolean }) {
  return (
    <section className="epci-cover">
      <div className="container">
        <div className="epci-cover-frame">
          <img src={IMG.epciTunnel} alt="Steel walkway tunnel" loading="lazy" />
          <div className="epci-cover-panel">
            <h2>
              Engineering,
              <br />
              Procurement,
              <br />
              Construction &amp;
              <br />
              Installation Turnkey
              <br />
              EPCI Delivery,
              <br />
              Concept to Commissioning.
            </h2>
            {link && (
              <Link to="/capabilities#epci" className="btn btn-navy">
                Our EPCI Capability <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
