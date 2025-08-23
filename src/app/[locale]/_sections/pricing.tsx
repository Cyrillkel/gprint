import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatedSection, AnimatedWrapper } from "@/shared/ui/animations";
import { Button } from "@/shared/shadcn/ui/button";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const PricingSection: React.FC<Props> = ({ className }) => {
  const t = useTranslations();

  return (
    <AnimatedSection
      id="pricing"
      className={cn(
        "relative mx-auto w-full  overflow-hidden md:pt-28 xl:overflow-visible xl:pt-0 px-4 pb-40",
        className
      )}
    >
      <div className="container mx-auto">
        <div className="mx-auto min-h-[600px]  flex-col pb-8  2xl:min-h-[900px]">
          <div className="">
            <AnimatedWrapper delay={0.1} translateY={10} scale>
              <h2 className="font-onest rainbow-text z-10 mb-8 word-wrap bg-clip-text pb-2 text-left text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold font-heading">
                {t("sections.pricing.title")}
              </h2>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.2} translateY={20}>
              <p className="mb-12 max-w-[387px] xl:mb-0 font-sans">
                {t("sections.pricing.description")}
              </p>
            </AnimatedWrapper>
          </div>

          <div className="grid grid-cols-1 place-items-center content-center gap-5 xl:grid-cols-3 xl:items-end">
            {/* Card 1 - Free */}
            <AnimatedWrapper
              delay={0.3}
              translateY={20}
              scale
              className="w-full"
            >
              <div
                className={cn(
                  "glass-card glass-card-free holographic-border glass-card:hover",
                  "flex h-auto w-full flex-col justify-between rounded-3xl p-6 sm:p-8",
                  "relative"
                )}
              >
                <div className="mb-2.5 flex justify-center xl:mb-7">
                  <Image
                    src="/img/icons/star.svg"
                    alt="figure"
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0"
                  />
                </div>
                <div className="md:flex md:items-end md:gap-4 xl:block">
                  <div className="md:w-1/2 xl:w-full">
                    <h3 className="mb-2 text-center text-3xl font-medium sm:text-left xl:mb-3 xl:sm:text-center font-heading">
                      {t("sections.pricing.itemFree.title")}
                    </h3>
                    <p className="line-break-anywhere sm:line-break-normal mb-7 text-center sm:text-left md:mb-6 xl:text-center font-sans">
                      {t("sections.pricing.itemFree.description")}
                    </p>
                  </div>
                  <div className="ml-auto xl:w-full">
                    <p className="mb-6 md:mb-2 xl:mb-7">
                      {t("sections.pricing.price")}{" "}
                      <span className="text-[40px] font-medium md:text-[36px] xl:text-[40px]">
                        {t("sections.pricing.itemFree.tariff")}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="group mb-10 flex md:mb-6 xl:mb-10">
                  <div className="flex w-full cursor-pointer items-center justify-center gap-3">
                    <Button asChild className={cn("w-full")}>
                      <Link href="#" className="z-10 flex justify-center py-5">
                        <span className="text-sm font-semibold sm:text-lg">
                          {t("sections.pricing.itemFree.button")}
                        </span>
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                          <ArrowRight className="h-6 w-6 text-white" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="md:flex md:gap-4 md:text-base xl:block xl:text-xl">
                  <div className="grid w-full sm:grid-cols-2 sm:gap-x-1 xl:grid-cols-1">
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.templates")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.blocks")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.analytics")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>
                        {t("sections.pricing.itemFree.features.scheduling")}
                      </p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.support")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.forms")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Card 2 - Standard (главная карточка) */}
            <AnimatedWrapper
              delay={0.4}
              translateY={20}
              scale
              className="w-full xl:-mt-20"
            >
              <div
                className={cn(
                  "glass-card glass-card-standard holographic-border",
                  "flex h-auto flex-col justify-between rounded-3xl p-6 sm:p-8",
                  "relative"
                )}
              >
                <div className="mb-2.5 flex justify-center xl:mb-7">
                  <Image
                    src="/img/icons/star-yellow.svg"
                    alt="figure"
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0"
                  />
                  <Image
                    src="/img/icons/star-yellow.svg"
                    alt="figure"
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0"
                  />
                </div>
                <div className="md:flex md:items-end md:gap-4 xl:block">
                  <div className="md:w-1/2 xl:w-full">
                    <h3 className="mb-2 text-center text-3xl font-medium sm:text-left xl:mb-3 xl:sm:text-center font-heading">
                      {t("sections.pricing.itemStandart.title")}
                    </h3>
                    <p className="line-break-anywhere sm:line-break-normal mb-7 text-center sm:text-left md:mb-6 xl:text-center font-sans">
                      {t("sections.pricing.itemStandart.description")}
                    </p>
                  </div>
                  <div className="ml-auto xl:w-full">
                    <p className="mb-6 md:mb-8 xl:mb-7">
                      {t("sections.pricing.price")}{" "}
                      <span className="text-[40px] font-medium md:text-[36px] xl:text-[40px]">
                        {t("sections.pricing.itemStandart.tariff")}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="group mb-10 flex md:mb-6 xl:mb-10">
                  <div className="flex w-full cursor-pointer items-center justify-center gap-3">
                    <Button asChild className={cn("w-full")}>
                      <Link href="#" className="z-10 flex justify-center py-5">
                        <span className="text-sm font-semibold sm:text-lg">
                          {t("sections.pricing.button")}
                        </span>
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                          <ArrowRight className="h-6 w-6 text-white" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="md:flex md:gap-4 md:text-base xl:block xl:text-xl">
                  <div className="grid w-full sm:grid-cols-2 sm:gap-x-1 xl:grid-cols-1">
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.templates")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.blocks")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.analytics")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>
                        {t("sections.pricing.itemFree.features.scheduling")}
                      </p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.support")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>
                        {t("sections.pricing.itemFree.features.minQuontity")}
                      </p>
                    </div>
                    <AnimatedWrapper delay={0.6} translateX={-20}>
                      <div className="mb-4 flex items-start gap-2 text-lg">
                        <Image
                          src="/img/icons/star-yellow.svg"
                          alt="star"
                          width={16}
                          height={16}
                        />
                        <p>
                          {t("sections.pricing.itemStandart.features.language")}
                        </p>
                      </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper delay={0.65} translateX={-20}>
                      <div className="mb-4 flex items-start gap-2 text-lg">
                        <Image
                          src="/img/icons/star-yellow.svg"
                          alt="star"
                          width={16}
                          height={16}
                        />
                        <p>
                          {t("sections.pricing.itemStandart.features.taplink")}
                        </p>
                      </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper delay={0.75} translateX={-20}>
                      <div className="mb-4 flex items-start gap-2 text-lg">
                        <Image
                          src="/img/icons/star-yellow.svg"
                          alt="star"
                          width={16}
                          height={16}
                        />
                        <p>
                          {t("sections.pricing.itemStandart.features.analytic")}
                        </p>
                      </div>
                    </AnimatedWrapper>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>

            {/* Card 3 - Pro */}
            <AnimatedWrapper
              delay={0.5}
              translateY={20}
              scale
              className="w-full xl:-mt-80"
            >
              <div
                className={cn(
                  "glass-card glass-card-pro holographic-border",
                  "flex h-auto w-full flex-col justify-between rounded-3xl p-6 sm:p-8",
                  "relative"
                )}
              >
                <div className="mb-2.5 flex justify-center xl:mb-7">
                  <Image
                    src="/img/icons/star-red.svg"
                    alt="star"
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0"
                  />
                  <Image
                    src="/img/icons/star-red.svg"
                    alt="star"
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0"
                  />
                  <Image
                    src="/img/icons/star-red.svg"
                    alt="star"
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0"
                  />
                </div>
                <div className="md:flex md:items-end md:gap-4 xl:block">
                  <div className="md:w-1/2 xl:w-full">
                    <h3 className="mb-2 text-center text-3xl font-medium sm:text-left xl:mb-3 xl:sm:text-center font-heading">
                      {t("sections.pricing.itemPro.title")}
                    </h3>
                    <p className="line-break-anywhere sm:line-break-normal mb-7 text-center sm:text-left md:mb-6 xl:text-center font-sans">
                      {t("sections.pricing.itemPro.description")}
                    </p>
                  </div>
                  <div className="ml-auto xl:w-full">
                    <p className="mb-6 md:mb-8 xl:mb-7">
                      {t("sections.pricing.price")}
                      <span className="text-[40px] font-medium md:text-[36px] xl:text-[40px]">
                        {t("sections.pricing.itemPro.tariff")}
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="group mb-10 flex md:mb-6 xl:mb-10">
                  <div className="flex w-full cursor-pointer items-center justify-center gap-3">
                    <Button asChild className={cn("w-full")}>
                      <Link href="#" className="z-10 flex justify-center py-5">
                        <span className="text-sm font-semibold sm:text-lg">
                          {t("sections.pricing.button")}
                        </span>
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                          <ArrowRight className="h-6 w-6 text-white" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="md:flex md:gap-4 md:text-base xl:block xl:text-xl">
                  <div className="grid w-full sm:grid-cols-2 sm:gap-x-1 xl:grid-cols-1">
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>
                        {t("sections.pricing.itemFree.features.masterMatrix")}
                      </p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemPro.background")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.analytics")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>
                        {t("sections.pricing.itemFree.features.scheduling")}
                      </p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>{t("sections.pricing.itemFree.features.support")}</p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>
                        {t("sections.pricing.itemFree.features.minQuontity")}
                      </p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star-yellow.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>
                        {t("sections.pricing.itemStandart.features.language")}
                      </p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star-yellow.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>
                        {t("sections.pricing.itemStandart.features.taplink")}
                      </p>
                    </div>
                    <div className="mb-4 flex items-start gap-2 text-lg">
                      <Image
                        src="/img/icons/star-yellow.svg"
                        alt="star"
                        width={16}
                        height={16}
                      />
                      <p>
                        {t("sections.pricing.itemStandart.features.analytic")}
                      </p>
                    </div>
                    <AnimatedWrapper delay={0.85} translateX={20}>
                      <div className="mb-4 flex items-start gap-2 text-lg">
                        <Image
                          src="/img/icons/star-red.svg"
                          alt="star"
                          width={16}
                          height={16}
                        />
                        <p>
                          {t("sections.pricing.itemStandart.features.domain")}
                        </p>
                      </div>
                    </AnimatedWrapper>

                    <AnimatedWrapper delay={0.85} translateX={20}>
                      <div className="mb-4 flex items-start gap-2 text-lg">
                        <Image
                          src="/img/icons/star-red.svg"
                          alt="star"
                          width={16}
                          height={16}
                        />
                        <p>{t("sections.pricing.itemPro.features.payment")}</p>
                      </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper delay={0.9} translateX={20}>
                      <div className="mb-4 flex items-start gap-2 text-lg">
                        <Image
                          src="/img/icons/star-red.svg"
                          alt="star"
                          width={16}
                          height={16}
                        />
                        <p>
                          {t("sections.pricing.itemPro.features.numeration")}
                        </p>
                      </div>
                    </AnimatedWrapper>
                    <AnimatedWrapper delay={0.9} translateX={20}>
                      <div className="mb-4 flex items-start gap-2 text-lg">
                        <Image
                          src="/img/icons/star-red.svg"
                          alt="star"
                          width={16}
                          height={16}
                        />
                        <p>{t("sections.pricing.itemPro.features.effect")}</p>
                      </div>
                    </AnimatedWrapper>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
