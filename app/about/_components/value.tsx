"use client";

import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { JSX } from "react";
import Image from "next/image";
import Comfort from "@/public/Comfort.svg";
import True from "@/public/True.svg";
import Justice from "@/public/Justice.svg";
import Face from "@/public/Face.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type FeatureText = {
  title: JSX.Element;
  description: JSX.Element;
  img: JSX.Element;
};

export default function Value({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  console.log(`Value: locale=${locale}, t is function: ${typeof t === "function"}`);

  useEffect(() => {
    try {
      AOS.init({
        duration: 1000,
        offset: 50,
        once: false,
        mirror: true,
      });
      console.log("Value: AOS initialized");
      return () => {
        AOS.refreshHard();
        console.log("Value: AOS cleaned up");
      };
    } catch (error) {
      console.error("Value: AOS initialization error:", error);
    }
  }, []);

  if (typeof t !== "function") {
    console.warn(`Value: t is not a function for locale ${locale}`);
    return null;
  }

  const featureText2: FeatureText[] = [
    {
      title: <h3 className="font-semibold text-black">{t("value.empowerment_title")}</h3>,
      description: (
        <p className="text-xs w-[80%] line-clamp-3 text-black">
          {t("value.empowerment_description")}
        </p>
      ),
      img: <Image src={Comfort} alt={t("value.empowerment_alt")} className="w-50 h-50" />,
    },
    {
      title: <h3 className="font-semibold text-black">{t("value.diversity_title")}</h3>,
      description: (
        <p className="text-xs w-[80%] line-clamp-3 text-black">
          {t("value.diversity_description")}
        </p>
      ),
      img: <Image src={True} alt={t("value.diversity_alt")} className="w-50 h-50" />,
    },
  ];

  const featureText: FeatureText[] = [
    {
      title: <h3 className="font-semibold text-black">{t("value.community_title")}</h3>,
      description: (
        <p className="text-xs w-[80%] line-clamp-3 text-black">
          {t("value.community_description")}
        </p>
      ),
      img: <Image src={Justice} alt={t("value.community_alt")} className="w-50 h-50" />,
    },
    {
      title: <h3 className="font-semibold text-black">{t("value.learning_title")}</h3>,
      description: (
        <p className="text-xs w-[80%] line-clamp-3 text-black">
          {t("value.learning_description")}
        </p>
      ),
      img: <Image src={Face} alt={t("value.learning_alt")} className="w-50 h-50" />,
    },
  ];

  return (
    <Section
      className="py-12 bg-card dark:bg-background"
      data-aos="fade-in"
    >
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-bold"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Balancer>
                {t("value.main_title")}{" "}
                <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                  {t("value.main_title_highlight")}
                </span>
              </Balancer>
            </h1>
            <h4
              className="text-sm font-light opacity-70"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Balancer>
                {t("value.sub_title")}
              </Balancer>
            </h4>
          </div>
          <div
            className="flex gap-[20px] justify-start"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {featureText2.map(({ title, description, img }, index) => (
              <div
                key={index}
                className="w-[350px] flex flex-col items-end p-5 pb-0 rounded-lg bg-gradient-to-r from-[#F2F1FF] to-[#FFF0FD]"
                data-aos="fade-up"
                data-aos-delay={`${500 + index * 100}`}
              >
                <div>
                  {title}
                  {description}
                </div>
                <div className="">{img}</div>
              </div>
            ))}
          </div>
          <div
            className="flex gap-[20px] justify-end"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {featureText.map(({ title, description, img }, index) => (
              <div
                key={index}
                className="w-[350px] flex flex-col items-end p-5 pb-0 rounded-lg bg-gradient-to-r from-[#F2F1FF] to-[#FFF0FD]"
                data-aos="fade-up"
                data-aos-delay={`${500 + index * 100}`}
              >
                <div>
                  {title}
                  {description}
                </div>
                <div className="">{img}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}