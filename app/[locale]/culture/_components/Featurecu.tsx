"use client";

import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import Image from "next/image";
import { JSX } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Remote from "@/public/remote.png";
import Team from "@/public/team.png";
import Learning from "@/public/learning.png";
import Tech from "@/public/tech.png";
import { Link } from "@/i18n/navigation";


type FeatureText1 = {
    icon: JSX.Element;
    title: JSX.Element;
    description: string;
    href?: string;
}
export default function FeatureCu() {
    const t = useTranslations();

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

  
    const featureText1: FeatureText1[] = [
        {
            icon: <Image src={Remote} alt={t("herob.feature1_alt")} className="h-15 w-15" />,
            title: <p>{t("featurecu.card_title")}</p>,
            description: t("featurecu.card_description"),
            href: ""
        },
        {
            icon: <Image src={Team} alt={t("herob.feature1_alt")} className="h-15 w-15" />,
            title: <p>{t("featurecu.card_title1")}</p>,
            description: t("featurecu.card_description1"),
            href: ""
        },
        {
            icon: <Image src={Learning} alt={t("herob.feature1_alt")} className="h-15 w-15" />,
            title: <p>{t("featurecu.card_title2")}</p>,
            description: t("featurecu.card_description2"),
            href: ""
        },
        {
            icon: <Image src={Tech} alt={t("herob.feature1_alt")} className="h-15 w-15" />,
            title: <p>{t("featurecu.card_title3")}</p>,
            description: t("featurecu.card_description3"),
            href: ""
        },

    ]

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
                            {t("featurecu.main_title")}{" "}
                            <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                                {t("featurecu.main_title_highlight")}
                            </span>
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
                        className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2 lg:w-[70%]"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        {featureText1.map(({ icon, title, description, href }, index) => (
                            <Link
                                href={`${href}`}
                                className="flex flex-col justify-between gap-6 rounded-lg p-6 backdrop-filter backdrop-blur-lg shadow-lg bg-card "
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={`${600 + index * 100}`}
                            >
                                <div className="grid gap-4">
                                    {icon}
                                    <h4 className="text-xl text-primary font-semibold">{title}</h4>
                                    <p className="text-sm opacity-75 line-clamp-3">{description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}