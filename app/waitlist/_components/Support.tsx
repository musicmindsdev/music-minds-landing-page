"use client";

import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { JSX, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Users from "@/public/users.png";
import Image from "next/image";
import Providers from "@/components/svg/Providers";
import Book from "@/components/svg/Book";
import Iphone11 from "@/public/iphone.png";
import Iphone21 from "@/public/iphone21.png";
import Iphone33 from "@/public/iphone33.png";
import Build from "@/components/svg/Build";
import { useTranslation } from "react-i18next";

type Unlock = {
  icon: JSX.Element;
  title: string;
  description: string;
  img: JSX.Element;
};

export default function Support1({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  console.log(`Support1: locale=${locale}, t is function: ${typeof t === "function"}`);

  const unlock: Unlock[] = [
    {
      icon: <Providers />,
      title: t("support1.unlock.find_providers.title"),
      description: t("support1.unlock.find_providers.description"),
      img: <Image src={Iphone11} alt={t("support1.unlock.find_providers.img_alt")} />,
    },
    {
      icon: <Book />,
      title: t("support1.unlock.book_seamlessly.title"),
      description: t("support1.unlock.book_seamlessly.description"),
      img: <Image src={Iphone21} alt={t("support1.unlock.book_seamlessly.img_alt")} />,
    },
    {
      icon: <Build />,
      title: t("support1.unlock.build_networks.title"),
      description: t("support1.unlock.build_networks.description"),
      img: <Image src={Iphone33} alt={t("support1.unlock.build_networks.img_alt")} />,
    },
  ];

  useEffect(() => {
    try {
      AOS.init({
        duration: 1000,
        offset: 50,
        once: false,
        mirror: true,
      });
      console.log("Support1: AOS initialized");
      return () => {
        AOS.refreshHard();
        console.log("Support1: AOS cleaned up");
      };
    } catch (error) {
      console.error("Support1: AOS initialization error:", error);
    }
  }, []);

  if (typeof t !== "function") {
    console.warn(`Support1: t is not a function for locale ${locale}`);
    return null;
  }
  
  return (
    <Section className="py-12 bg-card" data-aos="fade-in">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3
            className="text-4xl align-start font-bold w-[48%]"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Balancer>
              {t("support1.main_title")}{" "}
              <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                {t("support1.main_title_highlight")}
              </span>
            </Balancer>
          </h3>

          <div
            className="mt-6 grid gap-6 md:mt-12 items-center justify-center md:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {unlock.map(({ icon, title, description, img }, index) => (
              <div
                className="flex flex-col gap-3 rounded-lg pb-0 p-4 snap-center min-w-[300px] md:min-w-[calc(33.333%-1.5rem)] transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg shadow-lg dark:bg-background"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
              >
                <div className="flex items-center gap-3">
                  {icon}
                  <h2 className="text-2lg font-semibold">{title}</h2>
                </div>
                <p className="opacity-75 text-sm line-clamp-3">{description}</p>
                <div className="flex justify-end pb-0">{img}</div>
              </div>
            ))}
          </div>

          {/* <div className="w-full flex flex-col gap-4 items-center mt-4 justify-center">
            <Image src={Users} alt={t("support1.users_img_alt")} className="" />
            <p className="text-center italic">
              {t("support1.users_text", { count: 578 })}
            </p>
          </div> */}
        </div>
      </Container>
    </Section>
  );
}