import { SAFETY } from "../../data/content";
import { IMG } from "../../data/media";

export default function SafetySection() {
  return (
    <section className="safety">
      <div className="safety-photo">
        <img src={IMG.safetyPPE} alt="Personal protective equipment: hard hat, ear defenders, goggles and respirator" loading="lazy" />
      </div>
      <div className="safety-panel">
        <div className="container safety-body">
          <h2>Safety, Health &amp; Environment</h2>
          {SAFETY.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}
