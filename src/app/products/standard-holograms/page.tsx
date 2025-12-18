import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/shared/components/breadcrumbs";
import { Button } from "@/shared/shadcn/ui/button";
import {
  Phone,
  Mail,
  Download,
  Star,
  Clock,
  Palette,
  Layers,
} from "lucide-react";

export default function StandardHologramsPage() {
  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    { label: "Продукция", href: "/products" },
    { label: "Стандартные голограммы", href: "/products/standard-holograms" },
  ];

  const specifications = [
    {
      label: "Степень защиты",
      value: "Минимальная",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      label: "Применение",
      value: "Любой вид деятельности",
      icon: <Star className="w-4 h-4" />,
    },
    {
      label: "Формы",
      value: "Любая форма",
      icon: <Palette className="w-4 h-4" />,
    },
    {
      label: "Размеры",
      value: "(макс. 140х140 мм)",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      label: "Цвет",
      value: "Серебро, Золото, Бирюза, Медь, Прозрачный",
      icon: <Palette className="w-4 h-4" />,
    },
    {
      label: "Тип",
      value: "Разрушаемая, Не разрушаемая",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      label: "Нумерация",
      value: "По желанию",
      icon: <Star className="w-4 h-4" />,
    },
    {
      label: "Изготовление",
      value: "5-10 дней",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      label: "Упаковка",
      value: "Бумажная анти-адгезионная подложка",
      icon: <Layers className="w-4 h-4" />,
    },
  ];

  const advantages = [
    "Минимальная цена",
    "Минимальные сроки изготовления",
    "Многие варианты есть в наличии",
    "Любой размер и форма",
    "За дополнительную плату, возможно нанесение логотипа, названия, нумерации и т.п.",
    "Не требуют изготовления матрицы",
  ];

  const colors = ["Серебро", "Золото", "Бирюза", "Медь", "Прозрачный"];

  return (
    <div className="min-h-screen bg-black holo-bg pt-24">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="mt-8 mb-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-magenta-400 bg-clip-text text-transparent">
              Стандартные голограммы
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Абстрактные рисунки, не ассоциирующиеся с каким-либо продуктом.
              Подходят под любой вид деятельности. Возможно нанесение
              персональной информации (логотип, название, сквозная нумерация и
              т.д.) методом лазерной гравировки или флекспечатью.
            </p>
          </div>
        </section>

        {/* Main Hero Image */}
        <section className="mb-16">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-cyan-500/20 group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-magenta-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
            <Image
              src="/img/products/holograma_standart.jpg"
              alt="Стандартные голограммы - основное изображение с примерами различных дизайнов и эффектов"
              fill
              className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </section>

        {/* Specifications Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Технические характеристики
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-lg border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="text-cyan-400 mt-1">{spec.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      {spec.label}:
                    </h3>
                    <p className="text-cyan-400">{spec.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Преимущества
          </h2>
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                  <p className="text-gray-300">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section - Обойные голограммы */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Обойные голограммы
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Голограммы с непрерывным изображением. Из такой голограммы мы можем
            вырезать для Вас голограмму любой формы и любого размера в пределах
            140*140 мм.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative aspect-square rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 group transition-all duration-300"
              >
                <Image
                  src="/img/products/holograma_standart.jpg"
                  alt={`Обойная голограмма ${item} - пример непрерывного голографического рисунка`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section - Фиксированный размер */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Стандартные голограммы с фиксированным размером
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Специализированные голограммы для определенных сфер деятельности
            (медицинские учреждения, госорганы и т.д.).
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative aspect-square rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 group transition-all duration-300"
              >
                <Image
                  src="/img/products/holograma_standart.jpg"
                  alt={`Голограмма с фиксированным размером ${item} - специализированный дизайн`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Color Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Доступные цвета
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {colors.map((color, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 px-6 py-3 rounded-full border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
              >
                <span className="text-cyan-400 font-medium">{color}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center mt-4 text-sm">
            * При заказе от 50 000 шт. изготовим любой цвет по Вашему желанию
          </p>
        </section>

        {/* Detailed Description */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">
              Подробное описание
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Это голограммы со стандартным ни к чему не обязывающим
                изображением. Они хороши, когда необходимо срочное изготовление,
                для небольших тиражей и разовых маркетинговых акций. Для их
                покупки не нужно разрабатывать макет и оплачивать
                мастер-матрицу, они уже есть на складе.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Стандартные голограммы имеют среднюю степень защиты от подделки,
                так как находятся в свободной продаже, однако отлично
                справляются с имиджевой функцией. Стандартная голограмма может
                украсить упаковку Вашего продукта. Кроме того свойство
                саморазрушения позволяет использовать стандартную голограмму в
                качестве пломбы для защиты от несанкционированного вскрытия или
                переклеивания.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Стандартные голограммы делятся на обойные (с непрерывным
                изображением) и голограммы с фиксированным размером. Из
                голограммы с обойным дизайном мы можем вырезать для Вас
                голограмму любой формы и любого размера в пределах 140*140 мм.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Стандартная голограмма может быть как разрушаемая, так и не
                разрушаемая по Вашему желанию, стоимость от этого не меняется.
                Свойство саморазрушения защищает голограмму от
                несанкционированного переклеивания, позволяет использовать
                голограмму в качестве пломбы.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Голограммы поставляются на бумажной анти адгезионной подложке
                (как обычные наклейки). Поставка возможна в листах (фреймах) для
                ручного нанесения или в рулонах для нанесения с помощью
                аппликаторов. Кроме того стандартные голограммы могут
                поставляться в виде фольги для горячего тиснения.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-magenta-500/10 p-8 rounded-2xl border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Готовы заказать?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              *Дизайн в подарок для индивидуальных голограмм
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white font-medium transition-all duration-300 transform hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                Получить бесплатный буклет с образцами
              </Button>
            </div>

            <div className="border-t border-cyan-500/20 pt-6">
              <p className="text-gray-300 mb-4">
                Если Вы хотите внести свои изменения, пожалуйста свяжитесь с
                менеджером:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+78432585503"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +7 (843) 258-55-03
                </a>
                <span className="hidden sm:block text-gray-600">или</span>
                <a
                  href="mailto:zakaz@holograma.ru"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  zakaz@holograma.ru
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              Позвоните или напишите нам - мы подробно расскажем о продукции и
              вариантах взаимовыгодного сотрудничества:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="tel:+78432585503"
                className="flex items-center justify-center gap-2 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-cyan-400 hover:text-cyan-300"
              >
                <Phone className="w-5 h-5" />
                +7 (843) 258-55-03
              </a>

              <a
                href="tel:+79270466293"
                className="flex items-center justify-center gap-2 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-cyan-400 hover:text-cyan-300"
              >
                <Phone className="w-5 h-5" />
                +7 (927) 046-62-93
              </a>

              <a
                href="mailto:zakaz@holograma.ru"
                className="flex items-center justify-center gap-2 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-cyan-400 hover:text-cyan-300"
              >
                <Mail className="w-5 h-5" />
                zakaz@holograma.ru
              </a>

              <a
                href="mailto:office@holograma.ru"
                className="flex items-center justify-center gap-2 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-cyan-400 hover:text-cyan-300"
              >
                <Mail className="w-5 h-5" />
                office@holograma.ru
              </a>

              <a
                href="mailto:info@holograma.ru"
                className="flex items-center justify-center gap-2 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-cyan-400 hover:text-cyan-300 md:col-span-2 lg:col-span-1"
              >
                <Mail className="w-5 h-5" />
                info@holograma.ru
              </a>
            </div>
          </div>
        </section>

        {/* Back to Products */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300"
          >
            ← Вернуться к каталогу продукции
          </Link>
        </div>
      </div>
    </div>
  );
}
