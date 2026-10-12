import Band from "../ui/Band";
import ProductSheet from "../ui/ProductSheet";
import { SECURITY } from "../../data/content";

export default function SecuritySection() {
  return (
    <section className="block" id="security">
      <Band
        label="Security & Access Control"
        title="Intelligent security solutions for critical environments"
        text="From biometric authentication and facial recognition to intrusion detection and perimeter protection, we provide integrated security technologies designed for demanding industrial, offshore and critical infrastructure environments."
      />
      <ProductSheet items={SECURITY} variant="photo" columns={2} />
    </section>
  );
}
