import Band from "../ui/Band";
import ProductSheet from "../ui/ProductSheet";
import { CCTV_PRODUCTS } from "../../data/content";
import { IMG } from "../../data/media";

export default function CCTVProductsSection() {
  return (
    <section className="block" id="cctv">
      <Band
        kicker="FEATURED PRODUCTS"
        label="Hazardous-Area CCTV Camera Solutions"
        text="Explore our range of explosion-proof and industrial CCTV camera solutions designed for surveillance across offshore, marine, oil & gas and other demanding environments."
        image={IMG.cctvBanner}
      />
      <ProductSheet items={CCTV_PRODUCTS} variant="catalogue" />
    </section>
  );
}
