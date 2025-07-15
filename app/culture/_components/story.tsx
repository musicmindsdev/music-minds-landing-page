"use client";

import * as Craft from "@/components/craft";
import { GoArrowDownLeft, GoArrowDownRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function StoryCu({ locale }: { locale: string }) {
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
            className="w-full py-12 bg-card"
        >
            <Craft.Container className="flex flex-col">


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
                        <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                            {t("storycu.why_we_do_this_highlight")}
                        </span>{" "}
                        {t("storycu.why_we_do_this")}{" "}
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
                            className="font-medium"
                        >
                            {t("storycu.why_we_do_this_description")}
                        </span>
                        <span
                            data-aos="fade-up"
                            data-aos-delay="600">
                            {t("storycu.why_we_do_this_descriptionb")}
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
                            className="font-medium"
                        >
                            {t("storycu.what_drives_us_description")}
                        </span>
                    </div>
                    <h1
                        className="text-2xl sm:text-3xl md:text-5xl font-bold flex gap-2 items-start justify-center"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <GoArrowDownLeft />
                        
                        <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                            {t("storycu.what_drives_us_highlight")}
                        </span>
                        {t("storycu.what_drives_us")}{" "}
                    </h1>
                </div>
            </Craft.Container>
        </Craft.Section>
    );
}