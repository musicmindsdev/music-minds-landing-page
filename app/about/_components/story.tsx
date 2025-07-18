"use client";

import Image from "next/image";
import * as Craft from "@/components/craft";
import { GoArrowDownLeft, GoArrowDownRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
// import Pic1 from "@/public/pic1.svg";
// import Pic2 from "@/public/pic2.svg";
import Pic3 from "@/public/pic3.jpeg";
import Pic4 from "@/public/pic4.jpeg";

export default function Story({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  console.log(`Story: locale=${locale}, t is function: ${typeof t === "function"}`);

  useEffect(() => {
    try {
      AOS.init({
        duration: 1000,
        offset: 50,
        once: false,
        mirror: true,
      });
      console.log("Story: AOS initialized");
      return () => {
        AOS.refreshHard();
        console.log("Story: AOS cleaned up");
      };
    } catch (error) {
      console.error("Story: AOS initialization error:", error);
    }
  }, []);

  if (typeof t !== "function") {
    console.warn(`Story: t is not a function for locale ${locale}`);
    return null;
  }

  return (
    <Craft.Section
      data-aos="fade-in"
      className="w-full py-12 bg-card dark:bg-background"
    >
      <Craft.Container className="flex flex-col">
        <div
          className="flex flex-col items-center sm:flex-row sm:justify-between sm:gap-6 md:gap-8 gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Image
            src={Pic4}
            alt={t("story.image1_alt")}
            className="w-full max-w-full sm:max-w-[60%] h-auto"
            width={780}
          />
          <Image
            src={Pic3}
            alt={t("story.image2_alt")}
            className="w-full max-w-full sm:max-w-[40%] h-auto mt-4 sm:mt-0"
            width={500}
          />
        </div>

        <div
          className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-12 md:items-stretch md:justify-between mt-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold flex gap-2 items-start justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {t("story.who_we_are_title")}{" "}
            <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              {t("story.who_we_are_highlight")}
            </span>{" "}
            <GoArrowDownRight />
          </h1>
          <div
            className="w-[80%] text-center md:text-justify flex flex-col gap-4"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <span
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {t("story.who_we_are_description")}
            </span>
          </div>
        </div>
        <div
          className="flex flex-col-reverse items-center md:grid md:grid-cols-2 md:gap-12 md:items-stretch md:justify-between mt-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className="w-[80%] text-center md:text-justify flex flex-col gap-4 justify"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <span
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {t("story.what_we_believe_description")}
            </span>
          </div>
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold flex gap-2 items-start justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <GoArrowDownLeft />
            {t("story.what_we_believe_title")}{" "}
            <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              {t("story.what_we_believe_highlight")}
            </span>
          </h1>
        </div>
        <div
          className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-12 md:items-stretch md:justify-between mt-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold flex gap-2 items-start justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {t("story.how_we_work_title")}{" "}
            <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              {t("story.how_we_work_highlight")}
            </span>{" "}
            <GoArrowDownRight />
          </h1>
          <div
            className="w-[80%] text-center md:text-justify flex flex-col gap-4"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <span
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {t("story.how_we_work_description")}
            </span>
          </div>
        </div>
        <div
          className="flex flex-col-reverse items-center md:grid md:grid-cols-2 md:gap-12 md:items-stretch md:justify-between mt-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className="w-[80%] text-center md:text-justify flex flex-col gap-4"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <span
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {t("story.what_drives_us_description1")}
            </span>
            <span>
              <span className="font-medium mr-2">{t("story.what_drives_us_goal_label")}</span>
              <span>{t("story.what_drives_us_goal")}</span>
            </span>
            <span>
              <span className="font-medium mr-2">{t("story.what_drives_us_join_label")}</span>
              {t("story.what_drives_us_join")}
            </span>
          </div>
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold flex gap-2 items-start justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <GoArrowDownLeft />
            {t("story.what_drives_us_title")}{" "}
            <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              {t("story.what_drives_us_highlight")}
            </span>
          </h1>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
}