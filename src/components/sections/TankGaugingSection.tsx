import Band from "../ui/Band";
import { IMG } from "../../data/media";

export default function TankGaugingSection() {
  return (
    <section className="block" id="tgs">
      <Band
        label="Tank Gauging and Metering System (TGS)"
        text="A high-performance automatic tank gauging system delivering accurate net volume and mass inventory calculations-combining radar level, pressure and temperature measurement with tank and system hubs for real-time inventory control through an easy-to-use software interface."
      />
      <div className="container tgs">
        <img
          src={IMG.tankGauging}
          alt="Tank gauging and metering system: radar level, pressure and temperature sensors, SIS panels, system hub and DCS/PLC/SCADA connection"
          loading="lazy"
        />
        <p className="tgs-caption">Ideal for Oil &amp; Gas, Petrochemical, refining, food &amp; beverage applications.</p>
      </div>
    </section>
  );
}
