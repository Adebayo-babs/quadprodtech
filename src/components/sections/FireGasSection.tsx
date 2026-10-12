import Band from "../ui/Band";
import ProductSheet from "../ui/ProductSheet";
import { FIRE_GAS_PRODUCTS } from "../../data/content";
import { IMG } from "../../data/media";

export default function FireGasSection() {
  return (
    <section className="block" id="fire-gas">
      <Band
        label="Fire & Gas Safety Equipment"
        title="Alarm, Detection & Communication Equipment"
        text="Hazardous area alarm, detection and communication equipment designed to support reliable evacuation signaling, manual alarm activation and operational communication across industrial and offshore environments."
        image={IMG.fireGasBanner}
      />
      <ProductSheet items={FIRE_GAS_PRODUCTS} variant="catalogue" />
    </section>
  );
}
