import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TitleBox from "../ui/TitleBox";
import { ABOUT } from "../../data/content";
import { IMG } from "../../data/media";

export default function AboutSection({ teaser = false }: { teaser?: boolean }) {
  return (
    <section className="about">
      <div className="about-visual">
        <svg className="about-curve" viewBox="0 0 300 330" aria-hidden="true">
          <path d="M0 40 L220 280 Q250 315 290 300" stroke="var(--yellow)" strokeWidth="7" fill="none" />
        </svg>
        <img src={IMG.aboutRig} alt="Semi-submersible rig at sea" className="about-rig" loading="lazy" />
      </div>

      <div className="container about-body">
        <TitleBox variant="about" top="ABOUT" main="US" />

        <div className="about-copy">
          <h3 className="label-green">Who We Are:</h3>
          <p className="about-tag">{ABOUT.whoWeAreTitle}</p>
          <p>{ABOUT.whoWeAreText}</p>

          <h3 className="label-green" style={{ marginTop: 28 }}>Our Company:</h3>
          {ABOUT.company.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          {teaser && (
            <Link to="/about" className="text-link">
              More about us <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
