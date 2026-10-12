import { ArrowRight } from "lucide-react";
import EPCICover from "./EPCICover";
import { EPCI_BLOCKS } from "../../data/content";

export default function EPCISection() {
  return (
    <div id="epci">
      <EPCICover />
      <section className="section epci">
        <div className="container epci-grid">
          {EPCI_BLOCKS.map((block) => (
            <article className="epci-block" key={block.title}>
              <div className="epci-photo">
                <img src={block.image} alt="" loading="lazy" />
              </div>
              <div className="epci-bar">
                <h3>{block.title}</h3>
                <span className="epci-arrow" aria-hidden="true"><ArrowRight size={22} /></span>
              </div>
              <ul className="dot-list">
                {block.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
