"use client";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { JSX, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Help from "@/public/help.svg";
import Support from "@/public/support.svg";
import Answers from "@/public/answers.svg";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

export default function Herob({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  console.log(`Herob: locale=${locale}, t is function: ${typeof t === "function"}`);

  useEffect(() => {
    try {
      AOS.init({
        duration: 1000,
        offset: 50,
        once: false,
        mirror: true,
      });
      console.log("Herob: AOS initialized");
      return () => {
        AOS.refreshHard();
        console.log("Herob: AOS cleaned up");
      };
    } catch (error) {
      console.error("Herob: AOS initialization error:", error);
    }
  }, []);


  if (typeof t !== "function") {
    console.warn(`Herob: t is not a function for locale ${locale}`);
    return null;
  }

  const featureText: FeatureText[] = [
    {
      icon: <Image src={Help} alt={t("herob.feature1_alt")} className="h-15 w-15" />,
      title: t("herob.feature1_title"),
      href: "/request",
      description: t("herob.feature1_description"),
      cta: t("herob.feature1_cta"),
    },
    {
      icon: <Image src={Support} alt={t("herob.feature2_alt")} className="h-15 w-15" />,
      title: t("herob.feature2_title"),
      href: "/",
      description: t("herob.feature2_description"),
      cta: t("herob.feature2_cta"),
    },
    {
      icon: <Image src={Answers} alt={t("herob.feature3_alt")} className="h-15 w-15" />,
      title: t("herob.feature3_title"),
      href: "/",
      description: t("herob.feature3_description"),
      cta: t("herob.feature3_cta"),
    },
  ];

  return (
    <Section
      className="w-full bg-[url('/bg1.png')] dark:bg-[url('/darkbg1.png')] bg-no-repeat bg-cover p-4 sm:p-6 md:p-8 pb-0"
      data-aos="fade-in"
    >
      <Container className="flex items-center justify-center gap-6 md:grid-cols-2 md:gap-12 pb-0 mt-9">
        <div className="flex flex-col justify-end items-center gap-4 py-4 sm:gap-6 sm:py-6">
          <div className="h-[50px]"></div>
          <Button
            variant={"outline"}
            className="rounded-full"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {t("herob.contact_button")}
          </Button>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold w-[80%] text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            {t("herob.main_title")}{" "}
            <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              {t("herob.main_title_highlight")}
            </span>{" "}
            {t("herob.main_title_part2")}
          </h1>

          <div className="w-full" data-aos="fade-up" data-aos-delay="400">
            {/* Placeholder div, can be removed if not needed */}
          </div>
          <div
            className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {featureText.map(({ icon, title, description, href, cta }, index) => (
              <Link
                href={`${href}`}
                className="flex flex-col justify-between gap-6 rounded-lg p-6 backdrop-filter backdrop-blur-lg shadow-lg"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${600 + index * 100}`}
              >
                <div className="grid gap-4">
                  {icon}
                  <h4 className="text-xl text-primary font-semibold">{title}</h4>
                  <p className="text-sm opacity-75">{description}</p>
                </div>
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