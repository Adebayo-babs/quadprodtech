import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import HeroCarousel from "../HeroCarousel";
import ServiceStrip from "../ui/ServiceStrip";
import { COMPANY } from "../../data/content";

/** Website version of the profile's front cover. */
export default function Hero() {
  return (
    <section className="cover">
      <div className="container cover-top">
        <img src="/quad-logo.png" alt="Quad Production Technologies logo" className="cover-logo" />
        <h1 className="cover-title">
          <span className="sm">QUAD</span> PRODUCTION
          <br />
          TECHNOLOGIES <span className="sm">CO. NIG. LTD.</span>
        </h1>
      </div>
      <div className="container">
        <div className="cover-bar" />
        <div className="cover-media">
          <HeroCarousel />
        </div>
      </div>

      <div className="cover-bottom">
        <svg className="cover-shape" viewBox="0 0 260 330" aria-hidden="true" preserveAspectRatio="xMinYMax meet">
          <path d="M0 0 L176 176 Q206 206 176 236 L82 330 L0 330 Z" fill="var(--navy)" />
          <path d="M0 58 L208 270 Q236 300 214 330" stroke="var(--yellow)" strokeWidth="6" fill="none" />
        </svg>
        <div className="container cover-bottom-inner">
          <div className="cover-id">
            <strong>
              QUAD PRODUCTION
              <br />
              TECHNOLOGIES
              <br />
              CO. NIG. LTD.
            </strong>
            <span>
              Intelligent Monitoring.
              <br />
              Complete Safety &amp; Security
            </span>
          </div>
          <div className="cover-profile">COMPANY PROFILE</div>
          <div className="cover-actions">
            <a href={COMPANY.profilePdf} className="btn btn-yellow" download>
              <Download size={16} /> Download Company Profile
            </a>
            <Link to="/contact" className="btn btn-navy">
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      <ServiceStrip />
    </section>
  );
}
