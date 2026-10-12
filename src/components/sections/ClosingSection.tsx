import { IMG } from "../../data/media";

/** Back cover of the profile. */
export default function ClosingSection() {
  return (
    <section className="closing" aria-hidden="true">
      <div className="container closing-inner">
        <div className="closing-bar" />
        <img src={IMG.closingContainers} alt="" className="closing-photo" loading="lazy" />
        <img src="/quad-logo.png" alt="" className="closing-logo" loading="lazy" />
        <svg className="closing-shape" viewBox="0 0 200 330" preserveAspectRatio="xMaxYMax meet">
          <path d="M200 0 L200 330 L110 330 L20 240 Q-6 214 20 188 Z" fill="var(--navy)" />
          <path d="M200 50 L40 250 Q20 280 48 320" stroke="var(--yellow)" strokeWidth="5" fill="none" />
        </svg>
      </div>
    </section>
  );
}
