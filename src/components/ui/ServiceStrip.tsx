import { SERVICE_STRIP } from "../../data/content";

export default function ServiceStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`service-strip${dark ? " service-strip-dark" : ""}`}>
      <div className="container">
        {SERVICE_STRIP.map((s, i) => (
          <span key={s}>
            {i > 0 && <i aria-hidden="true">*</i>}
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
