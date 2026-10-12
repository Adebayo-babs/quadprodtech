import type { ReactNode } from "react";
import TitleBox from "../ui/TitleBox";
import { OFFICES } from "../../data/content";
import { IMG } from "../../data/media";

export default function ContactInfoSection({ children }: { children?: ReactNode }) {
  return (
    <section className="contact-info">
      <div className="contact-topbar" />
      <div className="container contact-grid">
        <div className="contact-copy">
          <TitleBox variant="contact" top="CONTACT" main="INFORMATION" />
          {OFFICES.map((o) => (
            <address className="office" key={o.name}>
              <span className="office-tag">{o.tag}</span>
              <span>{o.name}</span>
              {o.lines.map((l) => <span key={l}>{l}</span>)}
              {o.phones && (
                <span>
                  {o.phones.map((p, i) => (
                    <span key={p}>
                      {i > 0 && ", "}
                      <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
                    </span>
                  ))}
                </span>
              )}
              {o.email && (
                <span>
                  E-mail: <a href={`mailto:${o.email}`}>{o.email}</a>
                </span>
              )}
            </address>
          ))}
        </div>
        <div className="contact-side">
          {children ?? <img src={IMG.contactCamera} alt="CCTV camera on a glass building" className="contact-camera" loading="lazy" />}
        </div>
      </div>
    </section>
  );
}
