"use client";

import React from "react";
import Link from "next/link";
import { Shield, Zap, Clock, Palette, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Долговечные голограммы",
      description:
        "Производим голографические наклейки на современном оборудовании. Защитный слой устойчив к влаге, УФ и механическим воздействиям, сохраняет эффектность годами.",
      color: "cyan",
      delay: 0.1,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Быстрое изготовление",
      description:
        "Срок производства голограмм — от 10 рабочих дней. Обрабатываем заказы любой сложности: от стандартных узоров до индивидуальных решений с лазерной гравировкой.",
      color: "rose",
      delay: 0.2,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Индивидуальный дизайн",
      description:
        "Разрабатываем голограммы по вашему макету. Скрытые изображения, нумерация, 3D-эффекты — создаём уникальную защиту для вашей продукции.",
      color: "yellow",
      delay: 0.3,
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Консультация специалистов",
      description:
        "Менеджеры подберут тип голограммы и степень защиты под специфику вашего бизнеса. Помогаем с выбором формата, тиража и варианта нанесения.",
      color: "green",
      delay: 0.4,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Опыт производителя",
      description:
        "Более 9 лет на рынке голографических решений. Десятки миллионов голограмм защищают продукцию компаний по России и странам СНГ.",
      color: "blue",
      delay: 0.5,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Поддержка клиентов",
      description:
        "Отвечаем на вопросы и помогаем с заказом голограмм в рабочее время. Доставка в любую точку России — почтой или курьерскими службами.",
      color: "purple",
      delay: 0.6,
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "from-cyan-400 to-blue-500 border-cyan-500/20",
      magenta: "from-magenta-400 to-purple-500 border-magenta-500/20",
      amber: "from-amber-400 to-orange-400 border-amber-500/20",
      rose: "from-rose-400 to-pink-500 border-rose-500/20",
      yellow: "from-yellow-400 to-orange-500 border-yellow-500/20",
      green: "from-green-400 to-emerald-500 border-green-500/20",
      blue: "from-blue-400 to-indigo-500 border-blue-500/20",
      purple: "from-purple-400 to-pink-500 border-purple-500/20",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <section id="benefits" className="w-full py-20 relative overflow-hidden scroll-mt-28">
      {/* Background decorative elements */}
      <div className="absolute inset-0 holo-bg opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="holo-text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow">
            Почему выбирают GPrint?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Почему выбирают производство голограмм у нас — качество, сроки
            и индивидуальный подход к каждому заказу
          </p>

          {/* Decorative line */}
          <motion.div
            className="mt-8 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto w-32"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: benefit.delay,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="glass-card p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(
                    benefit.color
                  )} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Holographic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-magenta-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="glass-card p-8 border border-cyan-500/20 max-w-2xl mx-auto">
            <h3 className="holo-text-secondary text-2xl md:text-3xl font-bold mb-4 text-glow">
              Готовы защитить свою продукцию?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Закажите голографические наклейки у производителя с многолетним
              опытом. Рассчитаем стоимость и сроки под ваш тираж.
            </p>
            <Link
              href="/#contact"
              className="inline-block"
            >
              <button className="holo-button text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                Заказать голограммы
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </div>
    </section>
  );
};
