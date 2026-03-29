"use client";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { JSX, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";


type FeatureText1 = {
    description: JSX.Element;
    cta?: string;
    href?: string;
}
export default function HeroCu() {
    const t = useTranslations();

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


    const featureText1: FeatureText1[]= [
        {
            description: <p className="text-sm opacity-75"><span className="text-lg font-semibold">{t("herocu.description_title")}</span>{t("herocu.description_body")}</p>,
            cta: t("herocu.description_cta"),
            href: "/",
        },
        {
            description: <p className="text-sm opacity-75"><span className="text-lg font-semibold">{t("herocu.description_title1")}</span>{t("herocu.description_body1")}</p>,
            cta: t("herocu.description_cta1"),
            href: "/",
        }
    ]

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
                        {t("herocu.culture_button")}
                    </Button>
                    <h1
                        className="text-4xl sm:text-5xl md:text-7xl font-bold w-[80%] text-center"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        {t("herocu.main_title")}{" "}{" "}
                    </h1>
                    <span className="text-4xl sm:text-5xl md:text-7xl font-bold w-[80%] text-center bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent"
                        data-aos="zoom-in"
                        data-aos-delay="300">
                        {t("herocu.main_title_highlight")}
                    </span>

                    <p
                        className="w-[45%] text-center line-clamp-3"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        {t("herocu.description")}
                    </p>

                    <div className="w-full" data-aos="fade-up" data-aos-delay="400">
                        {/* Placeholder div, can be removed if not needed */}
                    </div>
                    <div
                        className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        {featureText1.map(({ description, cta, href }, index) => (
                            <Link
                                href={`${href}`}
                                className="flex flex-col justify-between gap-6 rounded-xl p-6 backdrop-filter backdrop-blur-lg shadow-lg bg-card"
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={`${600 + index * 100}`}
                            >
                                <div className="grid gap-4">
                                    {description}
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