import { CAPABILITIES, OFFSHORE_SECURITY } from "../../data/content";
import { IMG } from "../../data/media";

export default function CapabilitiesSection() {
  return (
    <>
      <section className="capability" style={{ backgroundImage: `url(${IMG.cctvCapabilityBg})` }}>
        <div className="container">
          <div className="capability-card">
            <h2 className="cap-heading">CCTV &amp; Security Capability</h2>
            <p>Full lifecycle capability from design to decommissioning.</p>
            <p>Security engineering, fabrication, installation and monitoring delivered turnkey by our own crews.</p>

            {CAPABILITIES.map((block) => (
              <div key={block.title} className="cap-block">
                <h3 className="cap-heading">{block.title}</h3>
                <ul className="dot-list">
                  {block.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offshore">
        <div className="offshore-photo">
          <img src={IMG.offshorePlatform} alt="Offshore production platform" loading="lazy" />
        </div>
        <div className="container offshore-body">
          <h2 className="cap-heading">{OFFSHORE_SECURITY.title}</h2>
          <ul className="dot-list dot-list-lg">
            {OFFSHORE_SECURITY.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
