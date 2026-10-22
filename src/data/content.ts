import {
  Camera, Radio, Cpu, Waves, Wrench, ShieldCheck, Truck, Bell,
} from "lucide-react";
import type {
  ExpertiseItem, CapabilityBlock, ProjectGroup, Office, ProductItem, EPCIBlock,
} from "../types";

/* ------------------------------------------------------------------
 * All copy below is taken from the client's Company Profile PDF.
 * ------------------------------------------------------------------ */

export const COMPANY = {
  name: "Quad Production Technologies Co. Nig. Ltd.",
  tagline: "Intelligent Asset Monitoring. Complete Safety & Security",
  services:
    "Hazardous-Area Telecommunication - CCTV, PAGA, PABX * Tank Gauging & Metering System * Fabrication * SURF - Subsea Engineering * Security Solution",
  website: "https://quad-prod.vercel.app/",
  profilePdf: "/Quad-Production-Technologies-Company-Profile.pdf",
};

export const SERVICE_STRIP = [
  "Hazardous-Area Telecommunication - CCTV, PAGA, PABX",
  "Tank Gauging & Metering System",
  "Fabrication",
  "SURF - Subsea Engineering",
  "Security Solution",
];

/* ---------- Introduction ---------- */
export const INTRODUCTION =
  "uad Production Technologies, a Technical Service Integrator (TSI) Company Designs, Procures, Provides Installation & Commissioning Services for Oil & Gas Production Facilities. Provisions of Hazardous Area Telecommunication Products, Fabrication of Platform Frames, Support Structures and Process Piping. The Company also offers High Grade Automatic Tank Gauging & Metering System (TGS) providing radar level, pressure and temperature measurement for real-time inventory control and software interface.";

export const INTRO_POINTS: { title: string; text: string }[] = [
  {
    title: "Our Reach:",
    text: "Hazardous-Zone Ex CCTV and Telecom products installed across the majority of the world's production platforms, FPSOs, drilling rigs/vessels and refineries.",
  },
  {
    title: "Our Partners:",
    text: "Local equipment distributor and service representative for Eaton's Hazardous Area Telecommunication Equipment-Ex CCTV cameras (Crouse-Hinds/Hernis HAC).",
  },
  {
    title: "Our Services:",
    text: "Procurement, Installation and After-sales preventive & corrective maintenance services for our products across Nigeria and West Africa.",
  },
];

/* ---------- About ---------- */
export const ABOUT = {
  whoWeAreTitle: "Engineering trust into every hazardous area system;",
  whoWeAreText:
    "From a hazardous-area telecommunications specialist to a full-service EPCIC contractor - built in Lagos, trusted across offshore West Africa.",
  company: [
    "Quad Production Technologies is an integrated EPCIC, offshore brownfield topside modification, fabrication, construction, hook-up, commissioning and CCTV-security service provider. The company has grown into a full-service engineering partner for Oil and Gas operators across marine and shore-base facilities - including FPSOs, FSOs, production platforms and drilling vessels.",
    "As the authorised OEM representative for Eaton's Crouse-Hinds/Hernis Hazardous-area communication range, Sidus Solutions (USA) and Lexington Engineering Group (Dallas), Quad Production Technologies supplies products recognized as the world leader in process safety and security video management installed across the majority of the world's production platforms, FPSOs, drilling rigs and refineries.",
  ],
};

/* ---------- Our Expertise ---------- */
const EXP = (n: number) => `/images/profile/expertise/exp-${String(n).padStart(2, "0")}.jpg`;

export const EXPERTISE: ExpertiseItem[] = [
  { icon: Camera, title: "CCTV & Telecom Systems", text: "Hazardous-area CCTV, thermal imaging and videomanagement for FPSOs, platforms and terminals.", accent: "navy", image: EXP(1) },
  { icon: Bell, title: "PA/GA Systems", text: "Public address and general alarm systems for emergency communication on hazardous sites.", accent: "coral", image: EXP(2) },
  { icon: Cpu, title: "Tank Gauging & Metering System", text: "A high-performance automatic tank gauging system delivering accurate net volume and mass inventory calculations.", accent: "gold", image: EXP(3) },
  { icon: Wrench, title: "EPCI Services", text: "Engineering, procurement, construction and installation delivered turnkey, concept to commissioning.", accent: "ocean", image: EXP(4) },
  { icon: Waves, title: "Subsea Video Monitoring", text: "ROV-integrated camera solutions for SURF umbilicals, risers and flowlines.", accent: "coral", image: EXP(5) },
  { icon: Cpu, title: "Asset Integrity Management", text: "Engineering and instrumentation for integrated process solutions across oil & gas assets.", accent: "gold", image: EXP(6) },
  { icon: Truck, title: "Procurement & Logistics", text: "Global sourcing, vendor qualification, expediting and supply-chain management.", accent: "gold", image: EXP(7) },
  { icon: Radio, title: "Radar Tracking Systems", text: "WAN/LAN radar tracking for perimeter awareness on marine and offshore assets.", accent: "teal", image: EXP(8) },
  { icon: Radio, title: "Fire & Gas Safety Equipment System", text: "Hazardous area alarm, detection and communication equipment designed to support reliable evacuation signaling, manual alarm activation and operational communication across industrial and offshore environments.", accent: "teal", image: EXP(9) },
  { icon: ShieldCheck, title: "QA/QC Services", text: "Quality assurance and quality control across fabrication, installation and commissioning.", accent: "teal", image: EXP(10) },
  { icon: Wrench, title: "Other Services", text: "We render other services.", accent: "ocean", image: EXP(11) },
];

/* ---------- Featured Products: Hazardous-Area CCTV ---------- */
export const CCTV_PRODUCTS: ProductItem[] = [
  {
    name: "HERNIS Ex286",
    image: "/images/systems/hernis-ex286.png",
    text: [
      "Hernis Ex286 Ex PTZ cameras are designed for upraised and hanging installation. These explosion-protected IP cameras from Eaton Crouse-Hinds offers 360° horizontal and 180° vertical view, achieving unrestricted vision for monitoring the safety of people and processes.",
      "Ex286 Ex PTZ cameras are compact, balanced and lightweight. They have been tested for operation in the most demanding locations, withstanding physical environment challenges like vibration, humidity, corrosion and extreme temperature variations - these characteristics makes them suitable for wide range of applications, including marine and offshore.",
    ],
  },
  {
    name: "PTZ Explosion-Proof Camera",
    image: "/images/systems/camera-02.jpg",
    text: ["Explosion-proof PTZ camera solution for monitoring large offshore, industrial and oil & gas environments"],
  },
  {
    name: "XP40 Thermal IP Camera",
    image: "/images/systems/xp40.png",
    text: ["The Oxalis XP40 is an explosion protected PTZ camera station for use in hazardous areas in onshore, offshore, marine and heavy industrial environments. The camera stations are designed for longevity in harsh environment with minimal maintenance."],
  },
  {
    name: "HERNIS PT9W",
    image: "/images/systems/camera-05.png",
    text: ["HERNIS PT9 safe area PTZ cameras from Eaton Crouse-Hinds can withstand extremes of weather, from freezing snow and driving rain to the heat and dust of the desert. Whether hanging or upraised, Eaton PT9 IP camera stations provide reliable monitoring of people and processes in any safe area. The weatherproof PT9 IP range can withstand extreme temperature variations, humidity, vibration and corrosion. Applications include oil & gas, chemical processing, marine and defence, and renewable energy. Depending on available power and cabling infrastructure, PT9 safe area cameras may be set up without the need for additional junction boxes, simplifying installation. They also allow audio monitoring and PIR detectors to connect directly to the camera station, further reducing complexity and cost."],
  },
  {
    name: "HERNIS S35",
    image: "/images/systems/s35.png",
    text: [
      "For safe area surveillance day or night, Eaton Crouse-Hinds offers the HERNIS S35W camera range. This dual optical/thermal IP camera eliminates the need for two separate cameras and is also an ideal choice for monitoring areas with permanent low light levels. S35W cameras features a zoomable, infrared light option that requires no additional light and achieves a coverage of up to 250m. Potential applications include gas and leakage detection, flare stack monitoring and tracking of people or objects. In configurations including thermal camera module you can include additional features like temperature measurements in the picture, tripwire detection and more.",
      "Weatherproof and resistant to vibration, humidity, extremes of temperature and corrosion, the S35 range is designed to withstand the rigours of harsh operating environments. Each camera comes equipped with a wiper and offers the option of an integral or separate washer tank.",
    ],
  },
  {
    name: "Compact Camera Station",
    image: "/images/systems/camera-04.jpg",
    text: ["Compact hazardous-area camera station designed for reliable surveillance where space and installation flexibility matter."],
  },
];

/* ---------- Fire & Gas Safety Equipment ---------- */
export const FIRE_GAS_PRODUCTS: ProductItem[] = [
  { name: "Loudspeakers", image: "/images/systems/loudspeakers.png", text: ["Hazardous, heavy duty industrial and commercial speaker range built for public address, voice alarm (evacuation) and background music."] },
  { name: "PAGA System (Sonix)", image: "/images/systems/paga-system.png", text: ["Sonix PAGA System with a simplified architecture that removes the need for lengthy engineering cycles, bespoke software or costly onsite support."] },
  { name: "Call Points", image: "/images/systems/call-points.png", text: ["Manual alarm call points for raising an alarm once a fire or emergency condition is verified, via push button or break-glass operation."] },
  { name: "Audible Alarms", image: "/images/systems/audible-alarms.png", text: ["Audible alarm range with variety of tone settings, designed to raise the alarm in dangerous situations. Traditional bells also available."] },
  { name: "Telephones", image: "/images/systems/telephones.png", text: ["Automatic and sound-powered telephones for IP and analogue applications, weatherproof and explosion protected, with optional audio and optical devices."] },
  { name: "Status Lights & Combination Units", image: "/images/systems/status-lights.png", text: ["Customised audible and visual combination units built from sounders and beacons, for situations requiring simultaneous audible and visual alerting."] },
  { name: "Control & Distribution", image: "/images/systems/control-distribution.png", text: ["Standard and bespoke control and distribution units for harsh and hazardous environments, available in a range of dimensions to suit your specification."] },
  { name: "Visual Alarms", image: "/images/systems/visual-alarms.png", text: ["Beacons and combination units offering flashing, steady-state and rotating indication, used to warn of hazards or indicate plant, fire and gas status."] },
];

/* ---------- Fabrication Capabilities ---------- */
export const FABRICATION: ProductItem[] = [
  { name: "Subsea Equipment Tubing Fabrication", image: "/images/welding/subsea-tubing.jpg", text: ["Corrosion-resistant tubing fabricated for deep-water and offshore environments, using precision orbital welding for reliable performance under extreme pressure."] },
  { name: "Piping Fabrication", image: "/images/welding/piping-fabrication.jpg", text: ["Custom piping solutions built with certified materials and precise welding techniques, constructed to withstand operational pressures and environmental conditions."] },
  { name: "Structural Fabrication", image: "/images/welding/structural-fabrication.jpg", text: ["Structural components essential for oil and gas infrastructure, such as platforms and frames, built to the highest standards of strength and durability."] },
  { name: "Pipeline Construction", image: "/images/welding/pipeline-construction.jpg", text: ["End-to-end pipeline construction from design to deployment, using automated and semi-automated welding for high-quality, leak-proof joints."] },
  { name: "Pressure Vessel Fabrication", image: "/images/welding/pressure-vessel.jpg", text: ["Pressure vessels fabricated to ASME and international standards, using advanced techniques like submerged arc welding for safe, high-pressure operation."] },
  { name: "Tank Fabrication", image: "/images/welding/tank-fabrication.jpg", text: ["Above-ground and underground storage tanks built to exact specifications, with materials and coatings that resist corrosion and environmental impact."] },
];

/* ---------- Subsea Engineering ---------- */
export const SUBSEA: ProductItem[] = [
  { name: "Riser Bundle Installation & Touchdown Monitoring", image: "/images/surf/riser-bundle.jpg", text: ["Field installation and touchdown point survey of flexible riser bundles running from the platform deck to the seabed, supporting accurate positioning and route verification during offshore deployment."] },
  { name: "Chemical & Water Injection, Hot Lines & High Powered Hydraulic", image: "/images/surf/surf-hoses.png", text: ["Specialized flexible hose and line systems designed for demanding chemical and water injection, high-temperature service and high-powered hydraulic applications in offshore and subsea operations"] },
  { name: "Flexible Flowline & Riser Pipes", image: "/images/surf/surf-03.jpg", text: ["Subsea flexible flowline and riser pipe systems for hydrocarbon production, water injection, gas lift, chemical and methanol injection, as well as selected renewable applications."] },
  { name: "Subsea Umbilicals, Risers & Flowlines (SURF)", image: "/images/surf/surf-01.jpg", text: ["Supply of flexible pipe systems including dynamic and static risers, static flowlines, subsea jumpers, topside jumpers and expansion joints for demanding offshore oil and gas applications."] },
];

/* ---------- Security & Access Control ---------- */
export const SECURITY: ProductItem[] = [
  { name: "Biometric Access Control", image: "/images/security/biometric-01.jpeg", text: ["Comprehensive biometric access control solutions using unique physiological or behavioral characteristics such as fingerprints, iris patterns, palm geometry and voice recognition to provide secure, non-transferable authentication for restricted facilities and sensitive zones."] },
  { name: "Face Detection and Recognition Access Control", image: "/images/security/face-recognition-01.jpeg", text: ["Advanced face detection and recognition systems that use computer vision and AI to identify and verify individuals in real time, providing rapid authentication and seamless access to secured areas."] },
  { name: "Intrusion Detection and Prevention Systems", image: "/images/security/intrusion-01.png", text: ["Integrated intrusion detection and prevention systems using sensor networks, motion detection and real-time threat assessment to identify unauthorized access attempts and suspicious activity across secured facilities."] },
  { name: "Perimeter Intrusion Systems", image: "/images/security/perimeter-01.jpeg", text: ["Sophisticated perimeter security systems combining fence-mounted sensors, fiber-optic detection, microwave barriers and CCTV surveillance to monitor boundary integrity and provide early detection of intrusion attempts."] },
];

/* ---------- CCTV & Security Capability ---------- */
export const CAPABILITIES: CapabilityBlock[] = [
  {
    title: "Security Engineering & Procurement",
    points: [
      "Site security assessment and surveillance system design",
      "CCTV system engineering, layout drawings and coverage analysis",
      "Procurement of cameras, NVRs, DVRs, servers, monitors and accessories",
      "Access control, biometric devices and smart locks",
      "Intrusion detection, perimeter protection and alarm systems",
      "Network infrastructure - switches, fibre optic cable, wireless links",
    ],
  },
  {
    title: "Fabrication & Assembly",
    points: [
      "CCTV poles, camera mounting brackets and support structures",
      "Control panels, equipment racks and surveillance cabinets",
      "Equipment shelters and security control rooms",
      "Cable trays, ladders and support systems, with load-out JSA",
      "Assembly and integration of CCTV, access control and alarm systems",
      "Perimeter fencing, security gates and anti-intrusion barriers",
    ],
  },
  {
    title: "Installation & Commissioning",
    points: [
      "CCTV camera installation and alignment",
      "Network cabling and fibre optic installation",
      "Access control and biometric system installation",
      "PA and emergency communication systems",
      "Intrusion alarm installation and integration",
      "System testing, commissioning and client acceptance support",
    ],
  },
  {
    title: "Monitoring & Maintenance",
    points: [
      "24/7 remote monitoring solutions",
      "Preventive and corrective maintenance services",
      "CCTV health checks and performance audits",
      "Camera cleaning, calibration and replacement",
      "Software upgrades and cybersecurity enhancements",
      "Annual maintenance contracts (AMC)",
    ],
  },
];

export const OFFSHORE_SECURITY: CapabilityBlock = {
  title: "Industrial, Offshore & Subsea Security Solutions",
  points: [
    "Security systems for oil & gas production facilities, flow stations, terminals and processing plants.",
    "Offshore platform CCTV surveillance and remote monitoring systems.",
    "Subsea observation and monitoring camera systems for offshore operations.",
    "ROV-integrated underwater inspection and surveillance camera solutions.",
    "Marine, jetty, port and vessel security monitoring systems.",
    "Pipeline right-of-way (ROW) surveillance and intrusion detection systems.",
    "Explosion-proof (Ex-rated) CCTV systems for hazardous and classified areas.",
    "Fibre optic and wireless communication networks for offshore and subsea monitoring.",
    "Remote monitoring solutions for unmanned offshore platforms and wellhead facilities.",
    "Thermal imaging and intelligent video analytics for asset protection and threat detection.",
    "Security integration with SCADA, control rooms and central monitoring stations.",
    "Solar-powered surveillance systems for remote and inaccessible locations.",
    "Emergency response, incident recording and operational monitoring for offshore and subsea environments.",
  ],
};

/* ---------- EPCI ---------- */
export const EPCI_BLOCKS: EPCIBlock[] = [
  {
    title: "Logistics & Procurement",
    image: "/images/profile/epci-engineering.jpg",
    points: [
      "Conceptual, Front-End Engineering Design (FEED) and Detailed Engineering Design.",
      "Process, Mechanical, Civil, Structural, Electrical and Instrumentation Engineering.",
      "Pipeline, piping, equipment and structural design.",
      "Construction work-pack preparation, method statements and technical procedures.",
      "Project planning, scheduling and constructability assessments.",
      "Preparation of technical specifications, datasheets and bill of materials.",
    ],
  },
  {
    title: "Procurement",
    image: "/images/profile/epci-procurement.jpg",
    points: [
      "Global sourcing and procurement of equipment, materials and consumables.",
      "Vendor identification, qualification and performance evaluation.",
      "Procurement of mechanical, electrical, instrumentation and security equipment.",
      "Expediting, logistics coordination and materials management.",
      "Vendor inspection, factory acceptance testing (FAT) and quality assurance.",
      "Supply chain management and inventory optimization.",
      "Procurement support for offshore, marine and industrial projects.",
      "Contract administration and supplier relationship management.",
    ],
  },
  {
    title: "Construction",
    image: "/images/profile/epci-construction.jpg",
    points: [
      "Fabrication and construction of industrial, oil & gas and infrastructure facilities.",
      "Structural steel fabrication and erection.",
      "Piping fabrication, welding and installation.",
      "Mechanical equipment installation and alignment.",
      "Electrical and instrumentation installation works.",
      "Fabrication and installation of equipment supports, platforms and access structures.",
    ],
  },
  {
    title: "Installation & Commissioning",
    image: "/images/profile/epci-installation.jpg",
    points: [
      "Mechanical equipment installation and commissioning.",
      "Process piping pressure testing, flushing and cleaning.",
      "Offshore and onshore equipment hook-up works.",
      "Electrical and instrumentation testing and commissioning.",
      "Operations and maintenance personnel training.",
      "Turnkey project delivery from concept to commissioning.",
      "Offshore facilities construction and maintenance.",
      "Contract administration and supplier relationship management",
    ],
  },
];

/* ---------- Safety ---------- */
export const SAFETY = [
  "We reject the notion that workplace accidents are inevitable.",
  "Management is fully committed to safeguarding the physical wellbeing of every individual on our worksites and within all operational facilities.",
  "A steadfast commitment to zero-accident goals.",
  "Every worksite operates under strict permit-to-work, risk-assessment and toolbox-talk discipline. Our safety record speaks for itself: accident-free operations across offshore campaigns since 2020.",
];

/* ---------- Our People ---------- */
export const TEAM_PHOTOS = [
  { label: "Offshore Instrumentation", image: "/images/about/team-01.png" },
  { label: "Field Technician At Work", image: "/images/about/team-02.png" },
  { label: "Night Shift Operations", image: "/images/about/team-03.png" },
  { label: "Valve & Piping Systems", image: "/images/about/team-04.png" },
];

/* ---------- Track Record ---------- */
export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    key: "exxon", label: "ExxonMobil/PACE",
    rows: [
      ["USAN FPSO", "Installation and commissioning for USAN FPSO CCTV system upgrade", "2025"],
      ["USAN", "Procurement and upgrade of USAN FPSO CCTV system", "2024"],
      ["USAN", "Procurement of pipe and fittings for utility station lines", "2024"],
      ["EAST AREA PLATFORM", "Revamping and installation of CCTV monitoring systems at berth operating platform", "2021"],
      ["", "Procurement of CCTV cameras & accessories", "2008-2019"],
      ["BOP", "Procurement and installation of additional CCTV security monitoring system", "2005"],
    ],
  },
  {
    key: "total", label: "Total Energies",
    note: "Multi Year Preventive & Corrective Maintenance Contract (Ongoing)",
    rows: [
      ["OML 99", "Maintenance and troubleshooting of CCTV camera system", "2026"],
      ["EGINA FPSO/OML130", "Hernis CCTV troubleshooting and equipment upgrade survey", "2025"],
      ["FSO UNITY", "Offshore design and upgrade of CCTV thermal camera systems — OML 102", "2023-2025"],
      ["OML 99/OML100/OML102", "Thermal camera installation and commissioning with support fabrication and cable routing", "2022"],
      ["OFD2", "Configuration of camera station and replacement", "2022"],
      ["IKD1", "Termination of cables, installation and configuration of CCTV camera systems", "2021-2022"],
      ["IKIKE", "Integration of security CCTV equipment system", "2020"],
      ["IKIKE", "CCTV design and procurement", "2019–20"],
      ["FSO UNITY / ODP / IME", "Remote CCTV system installation survey", "2019"],
    ],
  },
  {
    key: "amni", label: "Amni & Afren",
    rows: [
      ["PRINCESS AWENI FPSO", "Redesign and upgrade of production storage tank gauging system to remote, fully automated system", "2021"],
      ["TUBU FIELD", "Design and procurement for upgrade of CCTV equipment, Langley MOPU integration and controls", "2017"],
      ["OKORO (Afren)", "Engineering design, deployment and operation of subsea camera systems for SURF umbilicals, risers and flowline", "2016"],
    ],
  },
  {
    key: "chevron", label: "Chevron",
    rows: [
      ["AGBAMI / EGTL", "Design and procurement of upgraded CCTV equipment", "2021"],
      ["AGBAMI", "Procurement and supply of Hernis CCTV tank and pump spares", "2017"],
      ["AGBAMI", "Hernis CCTV monitor spares and explosion-proof camera (EX 286W) spares", "2016"],
      ["AGBAMI", "Maintenance services of CCTV system on Agbami FPSO", "2012"],
      ["BOP", "Procurement and installation of CCTV camera system", "2011"],
      ["AGBAMI", "Procurement & supply of Hernis explosion-proof cameras, monitors & spares", "2010"],
      ["BOURBON AMILCAR", "Installation of thermal imaging systems on Chevron security vessel", "2009"],
    ],
  },
  {
    key: "west-africa", label: "West Africa & Others",
    rows: [
      ["PROSPECTUS 5 RIG — Congo", "Flex CCTV upgrade for Borr Drilling", "2025"],
      ["GOLAR HILL-Cameroon", "Maintenance of Hernis CCTV system", "2021"],
      ["BOP — Angola", "Commissioning of Hernis CCTV system on Ben Rinnes marine/drilling jackup rig", "2019–2020"],
    ],
  },
  {
    key: "addax", label: "Addax, Moni Pulo & Intl.",
    rows: [
      ["ADANGA / EBUGHU / MIMBO / AKAM", "Procurement and installation of CCTV security monitoring on production platforms", "2008"],
      ["MARC LORENCEAU", "Installation of SeaTouch system", "2009"],
      ["OFFSHORE (Addax)", "Data & video transmission (LAN) via wireless link, relocation & maintenance of CCTV", "2008-2011"],
      ["AGBANI / ABANA (Moni Pulo)", "Security monitoring system and wireless LAN video transmission", "2007-2008"],
    ],
  },
  {
    key: "construction", label: "Construction & EPCIC",
    rows: [
      ["MYSTRAS FPSO", "Installation of new superheater; HP scrubber demister works; valve servicing rehabilitation", "2023-2024"],
      ["ODIDI", "1.2km TFP weld pipe sectional replacement", "2023"],
      ["PORT HARCOURT", "Fabrication of offshore platform structure and components", "2021-2022"],
      ["EDO STATE", "Azura 459MW maintenance project; inspection of bottom-hole assembly equipment", "2020-2022"],
      ["OLORUNSOGO NIPP PLANT", "Surface preparation and grit blasting of ST12 steam turbine parts", "2022"],
    ],
  },
];

export interface PartnerLogo {
  name: string;
  color: string;
  /** Path to the logo image in /public. Falls back to a text wordmark if it fails to load. */
  logo: string;
}

// Order follows the "Our Clients" / "Our Partners" page of the Company Profile.
export const CLIENT_LOGOS: PartnerLogo[] = [
  { name: "TotalEnergies", color: "#CC0000", logo: "/logos/totalenergies.png" },
  { name: "NNPC", color: "#0B7A3B", logo: "/logos/nnpc.png" },
  { name: "Seplat Energy", color: "#2E9E4F", logo: "/logos/seplat-energy.png" },
  { name: "NLNG", color: "#1E9E4A", logo: "/logos/nlng.png" },
  { name: "Baker Hughes", color: "#00A19A", logo: "/logos/baker-hughes.png" },
  { name: "Borr Drilling", color: "#0A72C4", logo: "/logos/borr-drilling.png" },
  { name: "Chevron", color: "#1E5AA8", logo: "/logos/chevron.png" },
  { name: "Weatherford", color: "#B5122E", logo: "/logos/weatherford.png" },
  { name: "ExxonMobil", color: "#D91B21", logo: "/logos/exxonmobil.png" },
  { name: "Golar LNG", color: "#0A2E5C", logo: "/logos/golar-lng.png" },
  { name: "PACE", color: "#C8102E", logo: "/logos/pace.png" },
  { name: "AMNI", color: "#E8720C", logo: "/logos/amni.png" },
  { name: "Shell", color: "#DD1D21", logo: "/logos/shell.png" },
  { name: "Esso", color: "#004B93", logo: "/logos/esso.png" },
  { name: "BW Offshore", color: "#1D2D7A", logo: "/logos/bw-offshore.png" },
  { name: "Seadrill", color: "#1B2A6B", logo: "/logos/seadrill.png" },
  { name: "Pacific Drilling", color: "#0B5FA5", logo: "/logos/pacific-drilling.png" },
  { name: "Transocean", color: "#C8102E", logo: "/logos/transocean.png" },
];

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: "Eaton", color: "#0033A0", logo: "/logos/eaton.png" },
  { name: "Sidus", color: "#5FAE3E", logo: "/logos/sidus.png" },
  { name: "Crouse-Hinds", color: "#111111", logo: "/logos/crouse-hinds.png" },
  { name: "Hernis", color: "#111111", logo: "/logos/hernis.png" },
];

/* ---------- Contact ---------- */
export const OFFICES: Office[] = [
  {
    tag: "HQ — LAGOS",
    name: "Lagos Office",
    lines: ["8-10 Broad Street, Western House, 8th Floor, Suite #802", "Lagos Island, Lagos, Nigeria"],
    phones: ["+234 803 322 4979", "+234 803 333 6016", "+234 911 204 0002", "+234 911 204 0001"],
    emails: ["quad@quadproductiontechnologies.com", "yetunde.kayode@quadproductiontechnologies.com"],
  },
  {
    tag: "FABRICATION YARD",
    name: "Port Harcourt Yard",
    lines: ["Km 16, No.1 Gladex Close, off Spanner Road", "Opp. Intels, Aba Road, Port Harcourt, Nigeria", "9,000 sqm yard · 500T/yr capacity"],
  },
];

export const CONTACT_EMAILS = ["quad@quadproductiontechnologies.com", "yetunde.kayode@quadproductiontechnologies.com"];
export const CONTACT_PHONES = ["+234 803 322 4979", "+234 803 333 6016", "+234 911 204 0002", "+234 911 204 0001"];
