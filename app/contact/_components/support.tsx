"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { ArrowRight } from "lucide-react";
import { JSX, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

type FeatureText = {
  title: string;
  description: string;
  href?: string;
  buttons: JSX.Element;
  cta?: string;
};

export default function Support({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  console.log(`Support: locale=${locale}, t is function: ${typeof t === "function"}`);

  useEffect(() => {
    try {
      AOS.init({
        duration: 1000,
        offset: 50,
        once: false,
        mirror: true,
      });
      console.log("Support: AOS initialized");
      return () => {
        AOS.refreshHard();
        console.log("Support: AOS cleaned up");
      };
    } catch (error) {
      console.error("Support: AOS initialization error:", error);
    }
  }, []);

  if (typeof t !== "function") {
    console.warn(`Support: t is not a function for locale ${locale}`);
    return null;
  }

  const featureText: FeatureText[] = [
    {
      title: t("support.feature1_title"),
      href: "/",
      description: t("support.feature1_description"),
      buttons: (
        <div className="flex gap-2 flex-wrap">
          <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
            {t("support.feature1_button1")}
          </Button>
          <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
            {t("support.feature1_button2")}
          </Button>
          <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
            {t("support.feature1_button3")}
          </Button>
        </div>
      ),
      cta: t("support.feature1_cta"),
    },
    {
      title: t("support.feature2_title"),
      href: "/",
      description: t("support.feature2_description"),
      buttons: (
        <div className="flex gap-2 flex-wrap">
          <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
            {t("support.feature2_button1")}
          </Button>
          <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
            {t("support.feature2_button2")}
          </Button>
          <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
            {t("support.feature2_button3")}
          </Button>
        </div>
      ),
      cta: t("support.feature2_cta"),
    },
    {
      title: t("support.feature3_title"),
      href: "/",
      description: t("support.feature3_description"),
      buttons: (
        <div className="flex gap-2 flex-wrap">
          <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
            {t("support.feature3_button1")}
          </Button>
          <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
            {t("support.feature3_button2")}
          </Button>
          <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
            {t("support.feature3_button3")}
          </Button>
        </div>
      ),
      cta: t("support.feature3_cta"),
    },
  ];

  return (
    <Section
      className="py-12 bg-card"
      data-aos="fade-in"
    >
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3
            className="text-4xl font-bold w-[52%]"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Balancer>
              {t("support.main_title")}{" "}
              <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                {t("support.main_title_highlight")}
              </span>{" "}
              {t("support.main_title_part2")}
            </Balancer>
          </h3>

          <div
            className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {featureText.map(({ title, description, href, buttons, cta }, index) => (
              <Link
                href={`${href}`}
                className="flex flex-col justify-between gap-6 rounded-lg p-6 transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg shadow-lg"
                key={index}
                data-aos="fade-right"
                data-aos-delay={`${400 + index * 100}`}
              >
                <div className="grid gap-4">
                  <h4 className="text-xl text-primary font-semibold">{title}</h4>
                  <p className="text-base opacity-75">{description}</p>
                </div>
                {buttons}
                {cta && (
                  <div className="flex h-fit items-center text-sm font-semibold text-[#5243FE]">
                    <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}