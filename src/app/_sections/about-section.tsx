"use client"

import type React from "react"

import { type ReactNode, useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedSection, AnimatedWrapper } from "@/shared/ui/animations"

interface AboutSectionProps {
  children?: ReactNode
}

interface InfoBlockProps {
  imageSrc: string
  iconSrc: string
  title: string
  description: string
  imageOnLeft?: boolean
}

interface StatProps {
  value: string
  label: string
  description: string
}

const InfoBlock: React.FC<InfoBlockProps> = ({ imageSrc, iconSrc, title, description, imageOnLeft = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`grid gap-6 md:gap-8 items-center mb-12 md:mb-16 min-w-0 ${
        imageOnLeft ? "lg:grid-cols-[1fr,1.5fr]" : "lg:grid-cols-[1.5fr,1fr]"
      }`}
    >
      {imageOnLeft ? (
        <>
          <div className="relative w-full min-w-0 aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10 mix-blend-overlay" />
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="flex flex-col items-start min-w-0">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 shrink-0">
              <Image
                src={iconSrc || "/placeholder.svg"}
                alt="Иконка"
                width={24}
                height={24}
                style={{ objectFit: "contain" }}
                className="brightness-0 invert"
              />
            </div>
            <h3 className="mb-4 text-xl md:text-2xl font-bold bg-gradient-to-br from-blue-400 to-purple-800 bg-clip-text text-transparent break-words">{title}</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 font-sans break-words">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-start min-w-0">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Image
                src={iconSrc || "/placeholder.svg"}
                alt="Иконка"
                width={24}
                height={24}
                style={{ objectFit: "contain" }}
                className="brightness-0 invert"
              />
            </div>
            <h3 className="mb-4 text-xl md:text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-800 bg-clip-text text-transparent break-words">{title}</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 font-sans break-words">{description}</p>
          </div>
          <div className="relative w-full min-w-0 aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10 mix-blend-overlay" />
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl transition-transform duration-700 hover:scale-105"
            />
          </div>
        </>
      )}
    </motion.div>
  )
}

const StatCounter: React.FC<StatProps> = ({ value, label, description }) => {
  const [count, setCount] = useState(0)
  const numericValue = Number.parseInt(value.replace(/\s+/g, ""))
  const displayValue = isNaN(numericValue) ? value : count.toLocaleString("ru-RU")

  useEffect(() => {
    if (isNaN(numericValue)) return

    const duration = 2000
    const frameDuration = 1000 / 60
    const totalFrames = Math.round(duration / frameDuration)
    // const counterIncrement = numericValue / totalFrames

    let frame = 0
    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      setCount(Math.floor(numericValue * Math.min(progress, 1)))

      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)

    return () => clearInterval(counter)
  }, [numericValue])

  return (
    <motion.div
      className="flex flex-col items-center min-w-0 px-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 font-heading">
        {displayValue}
      </h3>
      <p className="text-lg md:text-xl font-semibold mb-2 font-heading bg-gradient-to-br from-blue-500 to-purple-800 bg-clip-text text-transparent text-center break-words">{label}</p>
      <p className="text-sm text-gray-600 text-center max-w-xs font-sans">{description}</p>
    </motion.div>
  )
}

export const AboutSection: React.FC<AboutSectionProps> = ({ children }) => {
  const stats = [
    {
      value: "9",
      label: "лет",
      description: "Огромный опыт и новые технологии позволяют нам не останавливаться на достигнутом.",
    },
    {
      value: "30",
      label: "степеней защиты",
      description: "Мы разработали 30 степеней защиты голограмм под любые сферы деятельности.",
    },
    {
      value: "1 500",
      label: "клиентов",
      description: "Более 1500 клиентов уже используют наши голограммы, как средство защиты бизнеса",
    },
    {
      value: "90 000 000",
      label: "голограмм",
      description: "Более 90 миллионов изготовленных нами голограмм. По всей России и странам СНГ.",
    },
  ]

  const capabilities = [
    {
      description:
        "Наше оборудование позволяет изготовить голограмму любого размера в пределах от 5х5 мм. до 140х140 мм. или рулонную фольгу с голографическим изображением шириной до 140 мм.",
    },
    {
      description: "Изготовление от 10 рабочих дней до 1 месяца в зависимости от типа голограммы и объема заказа",
    },
    {
      description: "Доставка в любую точку России и мира, Почтой России или курьерскими службами.",
    },
  ]

  return (
    <AnimatedSection>
      <section id="about" className="py-16 bg-gray-50 relative overflow-hidden scroll-mt-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 px-2">
            <AnimatedWrapper delay={0.3} translateY={20}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative inline-block font-heading holo-text-secondary">
                О Нас
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-lg holo-bar"></div>
              </h2>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.8} translateY={20}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans px-2">
                Наша компания занимается продажей голографических наклеек отпом
              </p>
            </AnimatedWrapper>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
            {stats.map((stat, index) => (
              <StatCounter key={index} {...stat} />
            ))}
          </div>

          {/* Main Content */}
          {children}

          <InfoBlock
            imageSrc="/img/manufactory.jpg"
            iconSrc="/icon-1.svg"
            title="Стандартные голограммы"
            description="Абстрактные рисунки, стандартные фоны которые у нас уже сделаны, на них можем изобразить ваш логотип краской, напечатанной на термотрансферном принтере или сделать лазерную гравировку вашего логотипа."
          />

          <InfoBlock
            imageSrc="/img/stickers-2.jpg"
            iconSrc="/icon-2.svg"
            title="Индивидуальные голограммы"
            description="Изготовим индивидуальные голограммы с разработкой мастер-матрицы, с высокой степенью защиты от подделок по вашему макету в Corel Draw, расширение файла cdr до 16 версии или в pdf редактируемый формат. Для более детальной информации обращайтесь к нашему менеджеру."
            imageOnLeft={false}
          />

          {/* Capabilities Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 md:p-6 rounded-xl shadow-md min-w-0"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600 font-sans text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Info Cards block removed by request */}
        </div>
      </section>
    </AnimatedSection>

  )
}

export default AboutSection
