interface TitleBoxProps {
  /** Smaller line shown above the main line (e.g. "ABOUT", "OUR"). */
  top?: string;
  main: string;
  variant: "about" | "expertise" | "track" | "clients" | "people" | "contact";
  as?: "h1" | "h2";
}

/** The outlined title boxes used throughout the company profile. */
export default function TitleBox({ top, main, variant, as: Tag = "h2" }: TitleBoxProps) {
  return (
    <Tag className={`title-box title-box-${variant}`}>
      {top && <span className="tb-top">{top}</span>}
      <span className="tb-main">{main}</span>
    </Tag>
  );
}
