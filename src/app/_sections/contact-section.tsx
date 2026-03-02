"use client";

import { AnimatedSection, AnimatedWrapper } from "@/shared/ui/animations";
import { ContactForm } from "@/shared/components/contact-form";
import { Mail, Phone,  Clock } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSuccess = () => {
    setShowSuccess(true);
    setErrorMessage("");
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleError = (error: string) => {
    setErrorMessage(error);
    setShowSuccess(false);
    setTimeout(() => setErrorMessage(""), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Телефон",
      value: "+7 (999) 219-35-01",
      description: "Горячая линия работает с 8:00 до 20:00",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "holotechlab@gmail.com",
      description: "Ответим в течение 2 часов",
      color: "from-purple-400 to-pink-500",
    },
    // {
    //   icon: <MapPin className="w-6 h-6" />,
    //   title: "Адрес",
    //   value: "г. Казань, ул. Примерная, 123",
    //   description: "Принимаем посетителей по записи",
    //   color: "from-green-400 to-emerald-500",
    // },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Режим работы",
      value: "Пн-Пт: 9:00-18:00",
      description: "Сб: 10:00-16:00, Вс: выходной",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <AnimatedSection>
      <section id="contact" className="py-20 relative overflow-hidden scroll-mt-28">
        {/* Background decorative elements */}
        <div className="absolute inset-0 holo-bg opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <AnimatedWrapper delay={0.1} translateY={10} scale>
            <div className="text-center mb-20">
              <h2 className="holo-text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow">
                Свяжитесь с нами
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                Готовы создать уникальные голографические решения для вашего
                бизнеса? Оставьте заявку и мы свяжемся с вами в ближайшее время
              </p>

              {/* Decorative line */}
              <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto w-32 animate-pulse"></div>
            </div>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <AnimatedWrapper delay={0.3} translateY={20}>
              <div className="space-y-6">
                <h3 className="holo-text-secondary text-2xl font-bold mb-6">
                  Контактная информация
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="glass-card p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {info.title}
                          </h4>
                          {info.title === "Телефон" ? (
                            <a
                              href="tel:+79992193501"
                              className="text-cyan-300 font-medium mb-1 inline-block hover:text-cyan-200 transition-colors"
                            >
                              +7 (999) 219-35-01
                            </a>
                          ) : info.title === "Email" ? (
                            <a
                              href="mailto:holotechlab@gmail.com"
                              className="text-cyan-300 font-medium mb-1 inline-block hover:text-cyan-200 transition-colors break-all"
                            >
                              holotechlab@gmail.com
                            </a>
                          ) : (
                            <p className="text-cyan-300 font-medium mb-1">
                              {info.value}
                            </p>
                          )}
                          <p className="text-gray-400 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

          
              </div>
            </AnimatedWrapper>

            {/* Contact Form */}
            <AnimatedWrapper delay={0.5} translateY={20}>
              <ContactForm onSuccess={handleSuccess} onError={handleError} />
            </AnimatedWrapper>
          </div>

          {/* Success/Error Messages */}
          {showSuccess && (
            <AnimatedWrapper delay={0} translateY={0}>
              <div className="fixed top-20 right-4 z-50">
                <div className="glass-card p-4 border border-green-500/30 bg-green-500/10">
                  <p className="text-green-300 font-medium">
                    ✅ Заявка успешно отправлена! Мы свяжемся с вами в течение
                    15 минут.
                  </p>
                </div>
              </div>
            </AnimatedWrapper>
          )}

          {errorMessage && (
            <AnimatedWrapper delay={0} translateY={0}>
              <div className="fixed top-20 right-4 z-50">
                <div className="glass-card p-4 border border-red-500/30 bg-red-500/10">
                  <p className="text-red-300 font-medium">❌ {errorMessage}</p>
                </div>
              </div>
            </AnimatedWrapper>
          )}
        </div>
      </section>
    </AnimatedSection>
  );
};
