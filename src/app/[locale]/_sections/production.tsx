import ProductSlider from "@/shared/components/product-slider";
import { products } from "@/shared/data/products-data";

export const ProductionSection = () => {
  return (
    <section id="production">
      <div className="container mx-auto">
        <div>
          <ProductSlider products={products} />
        </div>
      </div>
    </section>
  );
};
