"use client";

import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CarouselComponent from "@/components/Carousel";



export default function Featurepr({ locale }: { locale: string }) {
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

 

  return (
    <Section
      className="border-b bg-[#F4F3FF] dark:bg-[#1E1B2B] mb-9 rounded-lg"
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
              {t("featurepr.main_title")}{" "}
              <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                {t("featurepr.main_title_highlight")}
              </span>{" "}
            </Balancer>
          </h1>
          <h4
            className="text-sm line-clamp-2 w-[50%] text-center font-light opacity-70"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Balancer>
              {t("featurepr.sub_title")}
            </Balancer>
          </h4>
          <div className="flex  items-center justify-center">
          <CarouselComponent/>
          </div>
        
        </div>
      </Container>
    </Section>
  );
}