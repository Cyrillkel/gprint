import { AnimatedSection, AnimatedWrapper } from "@/shared/ui/animations";
import { SectionDivider } from "../../shared/components/section-divider";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const StagesSection = () => {
  const stages = [
    {
      image: "/img/stages/step1-consultation.png",
      title: "Консультация",
      step: "Шаг 1",
      description:
        "Согласовываем количество, размер и тип голограммы. Свяжитесь с нами — поможем подобрать оптимальный вариант под ваш заказ.",
    },
    {
      image: "/img/stages/step2-design.png",
      title: "Дизайн голограммы",
      step: "Шаг 2",
      description:
        "Отправляете логотип в CDR 16 или редактируемом PDF — отрисовываем дизайн и согласовываем. Если есть образец — работаем по нему. Если логотип в векторе — отрисовываем макет по вашим материалам.",
    },
    {
      image: "/img/stages/step3-payment.png",
      title: "Оплата и документы",
      step: "Шаг 3",
      description:
        "Подписываем договор и утверждённый дизайн. Оплата по счёту — после этого запускаем производство голограмм.",
    },
    {
      image: "/img/stages/step4-delivery.png",
      title: "Получение голограмм",
      step: "Шаг 4",
      description:
        "Готовые голограммы упаковываем и отправляем по указанному адресу. Доставка почтой или курьерскими службами по всей России.",
    },
  ];

  return (
    <AnimatedSection>
      <section id="stages" className="relative overflow-hidden scroll-mt-24">
        <SectionDivider height="md" />
        <div className="absolute inset-0 holo-bg opacity-20" />
        <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
          <AnimatedWrapper delay={0.1} translateY={10} scale>
            <div className="text-center mb-16">
              <h2 className="holo-text-primary text-4xl md:text-5xl font-bold mb-6 text-glow">
                Шаги создания голограмм
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                От консультации до получения голограмм — простой и понятный
                процесс заказа
              </p>

              <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto w-32 animate-pulse"></div>
            </div>
          </AnimatedWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 items-stretch">
            {stages.map((stage, index) => (
              <AnimatedWrapper
                key={index}
                delay={0.2 + index * 0.1}
                translateY={20}
                scale
                className="h-full"
              >
                <div className="glass-card flex flex-col items-center text-center p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="mb-6 w-40 h-40 relative rounded-2xl overflow-hidden flex items-center justify-center p-5 glass-card border border-cyan-500/20 bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-cyan-500/40 transition-all duration-300">
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      width={140}
                      height={140}
                      className="object-contain drop-shadow-[0_0_12px_rgba(0,255,255,0.4)]"
                    />
                  </div>
                  <span className="text-cyan-400 font-semibold font-sans">
                    {stage.step}
                  </span>
                  <h3 className="text-xl font-bold my-2 font-heading text-white">
                    {stage.title}
                  </h3>
                  <p className="text-gray-200 font-sans leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </AnimatedWrapper>
            ))}
          </div>
          <AnimatedWrapper delay={0.3} translateY={20}>
            <div className="w-full text-center px-0 sm:px-8">
              <div className="flex flex-col items-center glass-card p-6 sm:p-8 border border-cyan-500/20">
                <div className="mb-6 p-4 glass-card rounded-full border border-cyan-500/20 w-20 h-20 flex items-center justify-center">
                  <Phone className="text-cyan-400" size={48} strokeWidth={1.5} />
                </div>

                <Link
                  href="tel:+79992193501"
                  className="text-3xl md:text-4xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors mb-4 font-heading"
                  aria-label="Позвонить по номеру +7 (999) 219-35-01"
                >
                  +7 (999) 219-35-01
                </Link>

                <h3 className="text-xl font-semibold mb-4 font-sans text-white">
                  Закажите голограммы с защитой за 1 звонок!
                </h3>

                <div className="space-y-2 text-gray-200 max-w-2xl font-sans">
                  <p>
                    <strong className="text-white">Горячая линия</strong> для заказа голографических
                    защитных элементов работает <strong className="text-white">с 8:00 до 20:00</strong>{" "}
                    без выходных.
                  </p>
                  <p>
                    Консультация по подбору типа голограммы, расчет стоимости и
                    оформление заявки <strong className="text-white"> за 7 минут</strong>.
                  </p>
                  <p>
                    Специалисты с <strong className="text-white">12-летним опытом</strong> помогут
                    разработать индивидуальную защиту для вашей продукции.
                  </p>
                </div>

                <Link
                  href="https://t.me/io112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-magenta-500 hover:from-cyan-600 hover:to-magenta-600 text-white font-medium rounded-lg transition-colors shadow-md font-sans"
                  aria-label="Бесплатная консультация в Telegram"
                >
                  Бесплатная консультация
                </Link>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>
    </AnimatedSection>
  );
};
