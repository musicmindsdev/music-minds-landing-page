"use client";

import * as Craft from "@/components/craft";
import { GoArrowDownLeft, GoArrowDownRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function StoryPr() {
    const t = useTranslations();

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

    return (
        <Craft.Section
            data-aos="fade-in"
            className="w-full py-12 bg-card dark:bg-background"
        >
            <Craft.Container className="flex flex-col">
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
                            {t("storypr.modern_music_description")}
                        </span>
                        <span
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            {t("storypr.modern_music_descriptionb")}
                        </span>
                        <span
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            {t("storypr.modern_music_descriptionc")}
                        </span>
                    </div>
                    <div className="flex gap-2 items-start justify-center">
                    <GoArrowDownLeft className="text-3xl sm:text-4xl md:text-6xl font-bold "/>
                    <h1
                        className="text-2xl sm:text-3xl md:text-5xl font-bold "
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        {t("storypr.modern_music")}
                        <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                            {t("storypr.modern_music_highlight")}
                        </span>
                        {t("storypr.modern_musicb")}
                    </h1>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-12 md:items-stretch md:justify-between mt-8 mb-8"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className="flex gap-2 items-start justify-center">
                    <h1
                        className="text-2xl sm:text-3xl md:text-5xl font-bold "
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                            {t("storypr.press_inquiries_highlight")}
                        </span>{" "}
                        {t("storypr.press_inquiries")}{" "}
                        <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                            {t("storypr.press_inquiries_highlightb")}
                        </span>
                    </h1><GoArrowDownRight className="text-3xl sm:text-4xl md:text-6xl font-bold "/>
                    </div>
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
                            {t("storypr.press_inquiries_description")}
                        </span>
                        <ul className="list-disc ml-5">
                            <li> {t("storypr.press_inquiries_li1")}</li>
                            <li> {t("storypr.press_inquiries_li2")}</li>
                            <li> {t("storypr.press_inquiries_li3")}</li>
                            <li> {t("storypr.press_inquiries_li4")}</li>
                        </ul>
                        <span
                        className="flex gap-1"
                            data-aos="fade-up"
                            data-aos-delay="600">
                            {t("storypr.press_inquiries_descriptionb")} <p className="text-[#5243FE]">{t("storypr.press_inquiries_descriptionb_highlight")}</p>
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
                            {t("storypr.description_short_description")}
                        </span>
                        <span
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="font-medium"
                        >
                            {t("storypr.description_short_descriptionb")}
                        </span>
                    </div>
                    <div className="flex gap-2 items-start justify-center">
                    <GoArrowDownLeft className="text-3xl sm:text-4xl md:text-6xl font-bold"/>
                    <h1
                        className="text-2xl sm:text-3xl md:text-5xl font-bold"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                            {t("storypr.description_short_highlight")}{" "}
                        </span>
                        {t("storypr.description_short")}{" "}
                        <span className="text-[#C3C3C3] font-light">
                        {t("storypr.description_shortb")}  
                        </span>
                    </h1>
                    </div>
                </div>
            </Craft.Container>
        </Craft.Section>
    );
}