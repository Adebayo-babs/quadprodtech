import Band from "../ui/Band";
import ProductSheet from "../ui/ProductSheet";
import { FABRICATION } from "../../data/content";
import { IMG } from "../../data/media";

export default function FabricationSection() {
  return (
    <section className="block" id="fabrication">
      <Band
        label="Fabrication Capabilities"
        title="Welding & Fabrication Services"
        text="From subsea tubing to above-ground storage tanks, our certified welding teams deliver fabrication work that meets ASME, API and international standards across every stage of oil and gas infrastructure."
        image={IMG.fabricationBanner}
      />
      <ProductSheet items={FABRICATION} variant="photo" />
    </section>
  );
}
