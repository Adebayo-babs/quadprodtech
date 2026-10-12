// All photography below is taken from the client's Company Profile PDF.
const P = (name: string) => `/images/profile/${name}`;

export const IMG = {
  coverRig: P("cover-rig.jpg"),
  introRefinery: P("intro-refinery.jpg"),
  aboutRig: P("about-rig.webp"),
  cctvBanner: P("cctv-banner.jpg"),
  fireGasBanner: P("fire-gas-banner.jpg"),
  fabricationBanner: P("fabrication-banner.jpg"),
  cctvCapabilityBg: P("cctv-capability-bg.jpg"),
  offshorePlatform: P("offshore-platform.jpg"),
  epciTunnel: P("epci-tunnel.jpg"),
  epciEngineering: P("epci-engineering.jpg"),
  epciProcurement: P("epci-procurement.jpg"),
  epciConstruction: P("epci-construction.jpg"),
  epciInstallation: P("epci-installation.jpg"),
  safetyPPE: P("safety-ppe.jpg"),
  trackRecordAerial: P("track-record-aerial.jpg"),
  waveBg: P("wave-bg.jpg"),
  contactCamera: P("contact-camera.webp"),
  closingContainers: P("closing-containers.webp"),
  tankGauging: "/images/products/tank-gauging-system.png",
};

export interface HeroImage {
  src: string;
  alt: string;
}

export const HERO_CAROUSEL: HeroImage[] = [
  { src: IMG.coverRig, alt: "Semi-submersible offshore rig lit up at night" },
  { src: IMG.offshorePlatform, alt: "Offshore production platform" },
  { src: IMG.epciProcurement, alt: "Jack-up drilling rig at sea" },
  { src: IMG.introRefinery, alt: "Refinery at night reflected on the water" },
];
