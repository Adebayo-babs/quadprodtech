import TitleBox from "../ui/TitleBox";
import { EXPERTISE } from "../../data/content";

export default function ExpertiseSection() {
  return (
    <section className="section expertise">
      <div className="container">
        <div className="center">
          <TitleBox variant="expertise" main="OUR EXPERTISE" />
        </div>
        <div className="expertise-intro">
          <h3>PRODUCTS &amp; SERVICES ENGINEERED FOR HAZARDOUS ENVIRONMENTS</h3>
          <p>
            From CCTV and radar tracking to asset integrity and PAGA systems - Engineered for Zone 1 and
            Zone 2 classified sites
          </p>
        </div>

        <div className="exp-grid">
          {EXPERTISE.map(({ icon: Icon, title, text, accent, image }) => (
            <article className="exp-card" key={title}>
              <img src={image} alt="" className="exp-card-bg" loading="lazy" />
              <div className="exp-card-body">
                <span className={`exp-icon exp-icon-${accent}`}>
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
