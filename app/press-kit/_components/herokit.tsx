"use client";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import {  useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Kit from "@/public/kit copy.png";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

type FeatureText = {
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

export default function HeroKit({ locale }: { locale: string }) {
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
      title: t("herokit.feature1_title2"),
      href: "/",
      description: t("herokit.feature1_description2"),
      cta: t("herokit.feature1_cta"),
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
            {t("herokit.press_button")}
          </Button>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold w-[80%] text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
             <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              {t("herokit.main_title_highlight")}
            </span>{" "}
            {t("herokit.main_title")}{" "}
           
          </h1>
          <p
            className="w-[45%] text-center line-clamp-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {t("herokit.main_title_description")}
          </p>

          <div className="w-full" data-aos="fade-up" data-aos-delay="400">
            {/* Placeholder div, can be removed if not needed */}
          </div>
          <div
            className="mt-6 grid gap-6 md:mt-12 md:grid-cols-1 w-full"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {featureText.map(({  title, description, href, cta }, index) => (
              <Link
                href={`${href}`}
                className="flex flex-col justify-between gap-6 rounded-lg p-6 backdrop-filter backdrop-blur-lg shadow-lg "
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${600 + index * 100}`}
              >
                <div className="grid gap-4">
                  <h4 className="text-xl text-primary font-semibold">{title}</h4>
                  <p className="text-sm opacity-75 lg:w-[45%]">{description}</p>
                </div>
                {cta && (
                  <div className="flex h-fit items-center text-sm font-semibold text-[#5243FE]">
                    <Image src={Kit} alt={t("herob.feature1_alt")} className="scale-x-70 scale-y-70" />
                    <p>{cta}</p> <GoArrowUpRight  className="ml-2 h-4 w-4" />
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