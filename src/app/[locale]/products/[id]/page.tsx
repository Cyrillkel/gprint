import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/shared/data/products-data";
import Breadcrumbs from "@/shared/components/breadcrumbs";

import { Badge } from "@/shared/components/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/shared/shadcn/ui/button";

interface ProductPageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-40">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: `/${locale}` },
            { label: product.name, href: `/${locale}/products/${product.id}` },
          ]}
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          {/* Изображение продукта */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={product.image || "/sticker.png"}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  {product.category}
                </Badge>
              </div>
            </div>

            {/* Дополнительные изображения */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Image
                    src="/sticker.png"
                    alt={`${product.name} вид ${i}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Информация о продукте */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
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
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.rating})</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">127 отзывов</span>
              </div>
            </div>

            <div className="text-3xl font-bold text-purple-600">
              {product.price} ₽
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Характеристики */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-800 mb-4">
                Характеристики:
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Размер:</span>
                  <span className="ml-2 font-medium">10x10 см</span>
                </div>
                <div>
                  <span className="text-gray-600">Материал:</span>
                  <span className="ml-2 font-medium">Винил</span>
                </div>
                <div>
                  <span className="text-gray-600">Эффект:</span>
                  <span className="ml-2 font-medium">Голографический</span>
                </div>
                <div>
                  <span className="text-gray-600">Стойкость:</span>
                  <span className="ml-2 font-medium">5+ лет</span>
                </div>
              </div>
            </div>

            {/* Кнопки действий */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 bg-purple-600 hover:bg-purple-700"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Добавить в корзину
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Дополнительная информация */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-purple-800">
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
