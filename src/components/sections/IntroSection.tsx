import { INTRODUCTION, INTRO_POINTS } from "../../data/content";
import { IMG } from "../../data/media";

export default function IntroSection() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-panel">
          <div className="intro-photo">
            <img src={IMG.introRefinery} alt="Refinery at night reflected on the water" loading="lazy" />
          </div>
          <h2 className="intro-label">INTRODUCTION</h2>
          <p className="intro-text">
            <span className="intro-dropcap">Q</span>
            {INTRODUCTION}
          </p>
        </div>

        <div className="intro-points">
          {INTRO_POINTS.map((p) => (
            <div key={p.title}>
              <h3 className="label-olive">{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
