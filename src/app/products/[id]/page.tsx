import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/shared/data/products-data";
import Breadcrumbs from "@/shared/components/breadcrumbs";

import { Badge } from "@/shared/components/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/shared/shadcn/ui/button";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black holo-bg pt-24">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Продукция", href: "/products" },
            { label: product.name, href: `/products/${product.id}` },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          {/* Изображение продукта */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-cyan-500/20 overflow-hidden group">
              {/* Holographic border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-magenta-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />

              <Image
                src={product.image || "/sticker.png"}
                alt={product.name}
                fill
                className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute top-4 right-4">
                <Badge
                  variant="secondary"
                  className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm"
                >
                  {product.category}
                </Badge>
              </div>

              {/* Holographic glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Дополнительные изображения */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-gray-900/50 to-black/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 overflow-hidden group cursor-pointer transition-all duration-300"
                >
                  <Image
                    src={product.image || "/sticker.png"}
                    alt={`${product.name} вид ${i}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Информация о продукте */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-white to-magenta-400 bg-clip-text text-transparent mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-300">({product.rating})</span>
                <span className="text-gray-600">•</span>
                <span className="text-gray-300">127 отзывов</span>
              </div>
            </div>

            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              от {product.price} ₽
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg">
                {product.description}
              </p>
              <p className="text-cyan-400 font-medium mt-4">
                {product.subtitle}
              </p>
            </div>

            {/* Характеристики */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-lg border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="font-semibold text-white mb-4 text-lg">
                Характеристики:
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Размер:</span>
                  <span className="text-cyan-400 font-medium">10x10 см</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Материал:</span>
                  <span className="text-cyan-400 font-medium">
                    Голографический
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Эффект:</span>
                  <span className="text-cyan-400 font-medium">3D/2D</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Стойкость:</span>
                  <span className="text-cyan-400 font-medium">5+ лет</span>
                </div>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white font-medium transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Заказать сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 p-4 rounded-lg border border-cyan-500/20">
              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <span>🚚</span>
                <span>Бесплатная доставка при заказе от 2000 ₽</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
