import ProductSlider from "@/shared/components/product-slider";
import { products } from "@/shared/data/products-data";

export const ProductionSection = () => {
  return (
    <section id="production" className="scroll-mt-28">
      <div className="container mx-auto px-4">
        <div>
          <ProductSlider products={products} />
        </div>
      </div>
    </section>
  );
};
