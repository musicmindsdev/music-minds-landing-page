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
import { useTranslations } from "next-intl";
import Collab from "@/components/collab";

type FeatureText = {
  title: JSX.Element;
  description: JSX.Element;
  img: JSX.Element;
};

export default function Value() {
  const t = useTranslations();

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

  const featureText2: FeatureText[] = [
    {
      title: <h3 className="font-semibold text-black">{t("valuecu.empowerment_title")}</h3>,
      description: (
        <p className="text-xs w-[80%] line-clamp-3 text-black">
          {t("valuecu.empowerment_description")}
        </p>
      ),
      img: <Image src={Comfort} alt={t("valuecu.empowerment_alt")} className="w-50 h-50" />,
    },
    {
      title: <h3 className="font-semibold text-black">{t("valuecu.diversity_title")}</h3>,
      description: (
        <p className="text-xs w-[80%] line-clamp-3 text-black">
          {t("valuecu.diversity_description")}
        </p>
      ),
      img: <Image src={True} alt={t("valuecu.diversity_alt")} className="w-50 h-50" />,
    },
  ];

  const featureText: FeatureText[] = [
    {
      title: <h3 className="font-semibold text-black">{t("valuecu.community_title")}</h3>,
      description: (
        <p className="text-xs w-[80%] line-clamp-3 text-black">
          {t("valuecu.community_description")}
        </p>
      ),
      img: <Image src={Justice} alt={t("valuecu.community_alt")} className="w-50 h-50" />,
    },
    {
      title: <h3 className="font-semibold text-black">{t("valuecu.learning_title")}</h3>,
      description: (
        <p className="text-xs w-[80%] line-clamp-3 text-black">
          {t("valuecu.learning_description")}
        </p>
      ),
      img: <Image src={Face} alt={t("valuecu.learning_alt")} className="w-50 h-50" />,
    },
  ];

  const featureText3: FeatureText[] = [
    {
        title: <h3 className="font-semibold text-black">{t("valuecu.learning_title3")}</h3>,
        description: (
          <p className="text-xs w-[80%] line-clamp-3 text-black">
            {t("valuecu.learning_description3")}
          </p>
        ),
        img: <Collab className="w-50 h-50"/>,
      },
  ]

  return (
    <Section
      className="py-12 bg-card"
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
                {t("valuecu.main_title")}{" "}
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
                {t("valuecu.sub_title")}
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
            {featureText3.map(({ title, description, img }, index) => (
              <div
                key={index}
                className="w-[100%] md:w-[75%] lg:w-[50%] flex flex-col items-end p-5 pb-0 rounded-lg bg-gradient-to-r from-[#F2F1FF] to-[#FFF0FD]"
                data-aos="fade-up"
                data-aos-delay={`${500 + index * 100}`}
              >
                <div className="absolute pl-4">
                  {title}
                  {description}
                </div>
                <div className="scale-x-50 scale-y-50 md:scale-x-75 md:scale-y-75 lg:scale-x-90 lg:scale-y-90 relative md:left-7.5 lg:left-8.5 left-28">{img}</div>
              </div>
            ))}
          </div>
          <div
            className="flex gap-[20px] justify-start"
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