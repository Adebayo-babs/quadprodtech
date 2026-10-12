import Band from "../ui/Band";
import ProductSheet from "../ui/ProductSheet";
import { SUBSEA } from "../../data/content";

export default function SubseaSection() {
  return (
    <section className="block" id="subsea">
      <Band
        label="Subsea Engineering"
        title="Subsea Umbilicals, Risers & Flowlines"
        text="Reliable SURF solutions for offshore oil and gas operations, covering flexible risers, flowlines, jumper hoses, umbilicals and subsea cable systems supplied in partnership with qualified OEMs."
      />
      <ProductSheet items={SUBSEA} variant="photo" columns={2} />
    </section>
  );
}
