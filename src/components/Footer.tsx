import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import ServiceStrip from "./ui/ServiceStrip";
import { COMPANY, CONTACT_EMAILS, CONTACT_PHONES } from "../data/content";

const QUICK_LINKS: [string, string][] = [
  ["About Us", "/about"], ["Our Expertise", "/expertise"], ["Products", "/products"],
  ["Capabilities & EPCI", "/capabilities"], ["Safety", "/safety"], ["Track Record", "/track-record"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/quad-logo.png" alt="Quad Production Technologies" className="brand-mark" />
            <div>
              <div className="brand-name">QUAD PRODUCTION</div>
              <div className="brand-sub">TECHNOLOGIES CO. NIG. LTD.</div>
            </div>
          </div>
          <p className="footer-tagline">{COMPANY.tagline}</p>
          <a href={COMPANY.profilePdf} className="footer-download" download>
            <Download size={15} /> Company Profile (PDF)
          </a>
        </div>

        <div>
          <div className="footer-heading">Quick Links</div>
          <ul className="footer-links">
            {QUICK_LINKS.map(([label, to]) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-heading">Contact Information</div>
          <div className="footer-contact-item">
            <MapPin size={16} />
            <span>8-10 Broad Street, Western House, 8th Floor, Suite #802, Lagos Island, Lagos, Nigeria</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={16} />
            <span>{CONTACT_PHONES.join(", ")}</span>
          </div>
          {CONTACT_EMAILS.map((e) => (
            <div className="footer-contact-item" key={e}>
              <Mail size={16} />
              <a href={`mailto:${e}`}>{e}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <ServiceStrip dark />
        <div className="container footer-legal">
          © {new Date().getFullYear()} Quad Production Technologies Co. Nig. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
