import { useState } from "react";
import type { PartnerLogo as PartnerLogoData } from "../data/content";

interface PartnerLogoProps {
  logo: PartnerLogoData;
}

export default function PartnerLogo({ logo }: PartnerLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="marquee-logo" style={{ color: logo.color }}>
        {logo.name}
      </span>
    );
  }

  return (
    <img
      src={logo.logo}
      alt={`${logo.name} logo`}
      className="marquee-logo-img"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}