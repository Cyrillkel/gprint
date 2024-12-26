import { ReactNode } from "react";
import Image from "next/image";

interface AboutSectionProps {
  children?: ReactNode;
}

interface InfoBlockProps {
  imageSrc: string;
  iconSrc: string;
  title: string;
  description: string;
  imageOnLeft?: boolean;
}

interface InfoCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className="">
      <Image
        src={iconSrc}
        alt="Иконка"
        width={40}
        height={40}
        style={{ objectFit: "contain" }}
        className="mb-4"
      />
      <h3 className="mb-2 text-lg font-semibold text-nowrap">{title}</h3>
      <p className="text-sm leading-relaxed min-w-48  max-w-80">
        {description}
      </p>
    </div>
  );
};

const InfoBlock: React.FC<InfoBlockProps> = ({
  imageSrc,
  iconSrc,
  title,
  description,
  imageOnLeft = true,
}) => {
  const imageBlock = (
    <div className="relative w-full aspect-[16/9] max-w-2xl mx-auto">
      <Image
        src={imageSrc}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="rounded-lg"
      />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <Image
        src={iconSrc}
        alt="Иконка"
        width={40}
        height={40}
        style={{ objectFit: "contain" }}
        className="mb-3"
      />
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
  );

  return (
    <div
      className={`grid gap-6 items-center mb-12 ${
        imageOnLeft ? "lg:grid-cols-[1fr,1.5fr]" : "lg:grid-cols-[1.5fr,1fr]"
      }`}
    >
      {imageOnLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
};

const AboutSection: React.FC<AboutSectionProps> = ({ children }) => {
  const infoCards = [
    {
      iconSrc: "/icon-3.svg",
      title: "Индвидуальный подход",
      description:
        "Разрабатываем уникальные решения, учитывая специфику вашего бизнеса и продукции.",
    },
    {
      iconSrc: "/icon-4.svg",
      title: "Высокое качество",
      description:
        "Используем современное оборудование и материалы для создания долговечных голограмм.",
    },
    {
      iconSrc: "/icon-5.svg",
      title: "Бесплатная консультация",
      description:
        "Предоставляем экспертную консультацию по выбору оптимального решения для вашей задачи",
    },
    {
      iconSrc: "/icon-6.svg",
      title: "Доставка во все регионы",
      description:
        "Обеспечиваем быструю и надежную доставку вашего заказа в любую точку страны.",
    },
  ];

  return (
    <section className="px-4 py-8">
      <div className="container mx-auto">
        {children}
        <InfoBlock
          imageSrc="/sticker.png"
          iconSrc="/icon-1.svg"
          title="Стандартные голограммы"
          description="Абстрактные рисунки, стандартные фоны которые у нас уже сделаны, на них можем изобразить ваш логотип краской, напечатанной на термотрансферном принтере или сделать лазерную гравировку вашего логотипа."
        />
        <InfoBlock
          imageSrc="/sticker.png"
          iconSrc="/icon-2.svg"
          title="Индивидуальные голограммы"
          description="Изготовим индивидуальные голограммы с разработкой мастер-матрицы, с высокой степенью защиты от подделок по вашему макету в Corel Draw, расширение файла cdr до 16 версии или в pdf редактируемый формат. Для более детальной информации обращайтесь к нашему менеджеру."
          imageOnLeft={false}
        />
        <div className="w-full overflow-x-auto scrollbar-hide lg:overflow-x-visible px-4 lg:px-0">
          <div className="flex flex-nowrap lg:flex-wrap justify-between gap-4 pb-4 lg:pb-0">
            {infoCards.map((element, index) => (
              <InfoCard key={index} {...element} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
