"use client";

import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import Image from "next/image";
import { JSX } from "react";
import Ceo from "@/public/marshall.jpg";
import Coo from "@/public/Bartek.jpeg";
import Vp from "@/public/Aisha.jpeg";
import Cmo from "@/public/fidelis1.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type FeatureText = {
  img: JSX.Element;
  title: JSX.Element;
  description: string;
  href?: string;
};

export default function Feature1({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  console.log(`Feature1: locale=${locale}, t is function: ${typeof t === "function"}`);

  useEffect(() => {
    try {
      AOS.init({
        duration: 1000,
        offset: 50,
        once: false,
        mirror: true,
      });
      console.log("Feature1: AOS initialized");
      return () => {
        AOS.refreshHard();
        console.log("Feature1: AOS cleaned up");
      };
    } catch (error) {
      console.error("Feature1: AOS initialization error:", error);
    }
  }, []);

  if (typeof t !== "function") {
    console.warn(`Feature1: t is not a function for locale ${locale}`);
    return null;
  }

  const featureText: FeatureText[] = [
    {
      img: (
        <Image
          src={Cmo}
          alt={t("feature1.cmo_alt")}
          className="mx-auto block w-50 h-50 rounded-full object-cover"
        />
      ),
      title: (
        <div>
          <h3 className="text-sm">{t("feature1.cmo_name")}</h3>
          <p className="text-xs">{t("feature1.cmo_role")}</p>
        </div>
      ),
     // href: "/",
      description: t("feature1.cmo_description"),
    },
    {
      img: (
        <Image
          src={Coo}
          alt={t("feature1.coo_alt")}
          className="mx-auto block w-50 h-50 rounded-full "
        />
      ),
      title: (
        <div>
          <h3 className="text-sm">{t("feature1.coo_name")}</h3>
          <p className="text-xs">{t("feature1.coo_role")}</p>
        </div>
      ),
      // href: "/",
      description: t("feature1.coo_description"),
    },
    {
      img: (
        <Image
          src={Ceo}
          alt={t("feature1.ceo_alt")}
          className="mx-auto block w-50 h-50 rounded-full"
        />
      ),
      title: (
        <div>
          <h3 className="text-sm">{t("feature1.ceo_name")}</h3>
          <p className="text-xs">{t("feature1.ceo_role")}</p>
        </div>
      ),
      //href: "/",
      description: t("feature1.ceo_description"),
    },
    {
      img: (
        <Image
          src={Vp}
          alt={t("feature1.vp_alt")}
          className="mx-auto block rounded-full w-50 h-50 object-fill"
        />
      ),
      title: (
        <div>
          <h3 className="text-sm">{t("feature1.vp_name")}</h3>
          <p className="text-xs">{t("feature1.vp_role")}</p>
        </div>
      ),
     /// href: "/",
      description: t("feature1.vp_description"),
    },
  ];

  return (
    <Section
      className="border-b bg-[#F4F3FF] dark:bg-[#1E1B2B]"
      data-aos="fade-in"
    >
      <Container className="not-prose">
        <div className="flex flex-col items-center gap-6">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold w-[60%] line-clamp-2 text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Balancer>
              {t("feature1.main_title")}{" "}
              <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                {t("feature1.main_title_highlight")}
              </span>{" "}
              {t("feature1.main_title_part2")}
            </Balancer>
          </h1>
          <h4
            className="text-sm line-clamp-2 w-[50%] text-center font-light opacity-70"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Balancer>
              {t("feature1.sub_title")}
            </Balancer>
          </h4>

          <div
            className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {featureText.map(({ img, title, description }, index) => (
              <Container
                // href={`${href}`}
                className="flex flex-col justify-between items-center gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg bg-card border-card border-opacity-20 shadow-lg"
                key={index}
                data-aos="fade-right"
                data-aos-delay={`${500 + index * 100}`}
              >
                <div className="grid gap-4 items-center justify-center">
                  {img}
                  <h4 className="text-xl text-primary text-center">{title}</h4>
                  <hr />
                  <p className="text-base opacity-75 text-center">{description}</p>
                </div>
              </Container>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}