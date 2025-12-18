import { products } from "@/shared/data/products-data";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/shared/components/breadcrumbs";

export default function ProductsPage() {
  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Продукция", href: "/products" },
  ];

  return (
    <div className="min-h-screen bg-black holo-bg pt-24">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="text-center mt-8 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-magenta-400 bg-clip-text text-transparent">
            Наша продукция
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Полный каталог голографических решений для защиты и брендинга вашей
            продукции
          </p>
        </div>

        {/* Products Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={
                  index === 0
                    ? `/products/standard-holograms`
                    : `/products/${product.id}`
                }
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                {/* Product Image */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm rounded-lg px-3 py-1 border border-cyan-500/30">
                    <span className="text-cyan-400 font-medium text-sm">
                      от {product.price}₽
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-3">
                    {product.subtitle}
                  </p>

                  {/* Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-magenta-400 bg-magenta-500/10 px-2 py-1 rounded-full border border-magenta-500/20">
                      {product.category}
                    </span>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-300">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Holographic glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-magenta-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                {/* Border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-20" />
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-magenta-500/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Не нашли подходящий вариант?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Мы создаем индивидуальные решения под ваши потребности
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-magenta-600 transition-all duration-300 transform hover:scale-105"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  );
}
