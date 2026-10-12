import type { ProductItem } from "../../types";

interface ProductSheetProps {
  items: ProductItem[];
  /** "catalogue" = cut-out product shots on white columns with grey margins;
   *  "photo" = full-bleed photographs above the text. */
  variant?: "catalogue" | "photo";
  columns?: 2 | 3;
}

export default function ProductSheet({ items, variant = "catalogue", columns = 3 }: ProductSheetProps) {
  return (
    <div className={`sheet sheet-${variant}`}>
      <div className="container">
        <div className={`sheet-grid sheet-cols-${columns}`}>
          {items.map((item) => (
            <article className="sheet-item" key={item.name}>
              <div className="sheet-media">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <h3 className="sheet-name">{item.name}</h3>
              {item.text.map((para, i) => (
                <p className="sheet-text" key={i}>{para}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
