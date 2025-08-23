import { AnimatedSection, AnimatedWrapper } from "@/shared/ui/animations";
import {
  Briefcase,
  PenSquare,
  Factory,
  Crown,
  Truck,
  Phone,
} from "lucide-react";
import Link from "next/link";

export const StagesSection = () => {
  const stages = [
    {
      icon: <Briefcase className="text-blue-600" size={48} strokeWidth={1.5} />,
      title: "Первичная консультация и заказ",
      step: "Шаг 1",
      description:
        "Наши специалисты детально проконсультируют вас по всем вопросам, помогут выбрать оптимальный тип голограммы и оформят заявку. Свяжитесь с нами любым удобным способом: телефон, email или онлайн-чат.",
    },
    {
      icon: <PenSquare className="text-blue-600" size={48} strokeWidth={1.5} />,
      title: "Создание индивидуального дизайна",
      step: "Шаг 2",
      description:
        "Наши дизайнеры разработают для вас 2-3 варианта макета голографической защиты бесплатно. Возможна интеграция скрытых маркеров, серийных номеров и других элементов защиты.",
    },
    {
      icon: <Factory className="text-blue-600" size={48} strokeWidth={1.5} />,
      title: "Профессиональное изготовление",
      step: "Шаг 3",
      description:
        "На современном оборудовании мы производим голограммы сроком от 3 рабочих дней. Для сложных многослойных защитных элементов срок может увеличиться до 4 недель.",
    },
    {
      icon: <Crown className="text-blue-600" size={48} strokeWidth={1.5} />,
      title: "Многоуровневый контроль качества",
      step: "Шаг 4",
      description:
        "Каждая партия проходит 5-ступенчатую проверку: визуальный осмотр, тестирование на адгезию, проверку оптических свойств, тест на износостойкость и финальную верификацию.",
    },
    {
      icon: <Truck className="text-blue-600" size={48} strokeWidth={1.5} />,
      title: "Быстрая и надежная доставка",
      step: "Шаг 5",
      description:
        "Готовые голографические защитные элементы упаковываются в защитную пленку и отправляются проверенными транспортными компаниями с возможностью отслеживания.",
    },
  ];

  return (
    <AnimatedSection>
      <section id="stages" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedWrapper delay={0.1} translateY={10} scale>
            <h2 className="text-4xl md:text-5xl font-bold mb-20 relative text-center font-heading">
              Шаги создания голограмм
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-lg holo-bar"></div>
            </h2>
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.3} translateY={20}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 p-4 rounded-full holographic-circle">
                    {stage.icon}
                  </div>
                  <span className="text-blue-600 font-semibold font-sans">
                    {stage.step}
                  </span>
                  <h3 className="text-xl font-bold my-2 font-heading">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 font-sans">{stage.description}</p>
                </div>
              ))}
            </div>
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.3} translateY={20}>
            {/* Блок с телефоном и дополнительным текстом */}
            <div className="p-8 max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center">
                <div className="mb-6 p-4 bg-blue-50 rounded-full holographic-circle">
                  <Phone
                    className="text-blue-600"
                    size={48}
                    strokeWidth={1.5}
                  />
                </div>

                <Link
                  href="tel:+78432585503"
                  className="text-3xl md:text-4xl font-bold text-blue-600 hover:text-blue-800 transition-colors mb-4 font-heading"
                  aria-label="Позвонить по номеру +7 (843) 258-55-03"
                >
                  +7 (843) 258-55-03
                </Link>

                <h3 className="text-xl font-semibold mb-4 font-sans">
                  Закажите голограммы с защитой за 1 звонок!
                </h3>

                <div className="space-y-2 text-gray-600 max-w-2xl font-sans">
                  <p>
                    <strong>Горячая линия</strong> для заказа голографических
                    защитных элементов работает <strong>с 8:00 до 20:00</strong>{" "}
                    без выходных.
                  </p>
                  <p>
                    Консультация по подбору типа голограммы, расчет стоимости и
                    оформление заявки
                    <strong> за 7 минут</strong>.
                  </p>
                  <p>
                    Специалисты с <strong>12-летним опытом</strong> помогут
                    разработать индивидуальную защиту для вашей продукции.
                  </p>
                </div>

                <button
                  className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md font-sans"
                  aria-label="Заказать звонок"
                >
                  Бесплатная консультация
                </button>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    </AnimatedSection>
  );
};
