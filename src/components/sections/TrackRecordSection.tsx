import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TitleBox from "../ui/TitleBox";
import { PROJECT_GROUPS } from "../../data/content";
import { IMG } from "../../data/media";
import type { ProjectGroup } from "../../types";

function Group({ group }: { group: ProjectGroup }) {
  return (
    <div className="tr-group">
      <h3 className="tr-client">{group.label}</h3>
      {group.note && <p className="tr-note">{group.note}</p>}
      <ol className="tr-list">
        {group.rows.map(([location, desc, year], i) => (
          <li key={`${location}-${year}-${i}`}>
            <span className="tr-year">{year}</span>
            <div className="tr-body">
              {location && <span className="tr-loc">{location}</span>}
              <span className="tr-desc">{desc}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function TrackRecordSection({ teaser = false }: { teaser?: boolean }) {
  const groups = teaser ? PROJECT_GROUPS.slice(0, 1) : PROJECT_GROUPS;

  return (
    <section className="track">
      <div className="track-hero" style={{ backgroundImage: `url(${IMG.trackRecordAerial})` }}>
        <div className="container">
          <h2 className="track-title">
            <span className="sm">OUR</span>
            TRACK RECORD
          </h2>
          <p className="track-headline">20+ years across TotalEnergies, Chevron and ExxonMobil.</p>
          <p className="track-sub">
            Selected work across TotalEnergies, Chevron, ExxonMobil, Amni and international offshore campaigns, 2005–2026.
          </p>
        </div>
      </div>

      <div className="track-body" style={{ backgroundImage: `url(${IMG.waveBg})` }}>
        <div className="container">
          {!teaser && (
            <div className="center" style={{ marginBottom: 40 }}>
              <TitleBox variant="track" top="OUR" main="TRACK RECORD" />
            </div>
          )}
          <div className={teaser ? "" : "tr-columns"}>
            {groups.map((g) => <Group key={g.key} group={g} />)}
          </div>
          {teaser && (
            <Link to="/track-record" className="btn btn-orange" style={{ marginTop: 32 }}>
              View Full Track Record <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
