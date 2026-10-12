import type { ReactNode } from "react";

interface BandProps {
  /** Green "FEATURED PRODUCTS" style tag shown above the band (optional). */
  kicker?: string;
  /** Yellow label box text. */
  label: string;
  title?: string;
  text?: ReactNode;
  image?: string;
  id?: string;
}

/** Navy banner with yellow label box — the section header style of the profile. */
export default function Band({ kicker, label, title, text, image, id }: BandProps) {
  return (
    <div className="band-wrap" id={id}>
      {kicker && (
        <div className="container">
          <div className="band-kicker">{kicker}</div>
        </div>
      )}
      <div className="band">
        {image && <img src={image} alt="" className="band-bg" aria-hidden="true" />}
        <div className="container band-inner">
          <h2 className="band-label">{label}</h2>
          {title && <h3 className="band-title">{title}</h3>}
          {text && <p className="band-text">{text}</p>}
        </div>
      </div>
    </div>
  );
}
