"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { JSX, useEffect } from "react";
import Image from "next/image";
import Music from "@/public/music.svg";
import Calendar from "@/public/calendar.svg";
import Play from "@/public/play.svg";
import MessageText from "@/public/message-text.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Coo from "@/public/Bartek.jpeg";

type FeatureText = {
  avartar?: JSX.Element;
  name: string;
  position: string;
  description: string;
  href?: string;
};

const Team = ({ locale }: { locale: string }) => {
  const { t } = useTranslation("common");
  console.log(`Hero locale: ${locale}, t is function: ${typeof t === "function"}`);

  const featureText: FeatureText[] = [
    {
      avartar: <Avatar className="w-10 h-10"><AvatarImage src="/Bartek.jpeg" alt="coo"/></Avatar>,
      name: t("team.team_member1_name"),
      position: t("team.team_member1_position"),
      href: `/${locale}`,
      description: t("team.team_quote1"),
    },
    {
      avartar: <Avatar className="w-10 h-10"><AvatarImage src="/Aisha.jpeg" alt="coo"/></Avatar>,
      name: t("team.team_member2_name"),
      position: t("team.team_member1_position"),
      href: `/${locale}`,
      description: t("team.team_quote2"),
    },
    {
      avartar: <Avatar className="w-10 h-10"><AvatarImage src="/fidelis1.jpeg" alt="coo"/></Avatar>,
      name: t("team.team_member3_name"),
      position: t("team.team_member1_position"),
       href: `/${locale}`,
      description: t("team.team_quote3"),
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  if (typeof t !== "function") {
    console.warn(`Hero: t is not a function for locale ${locale}`);
    return null;
  }

  return (
    <Section className="bg-card w-[100%]" data-aos="fade-up">
      <Container className="flex-col">

        <div className="flex flex-col gap-6 pt-7">
          <h3
            className="text-4xl font-bold text-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {t("team.main_title")}{" "}
            <span className=" bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent ">
              <Balancer>{t("team.main_title_highlight")}</Balancer></span>
          </h3>
          <p
            className="text-sm text-center line-clamp-2 font-light opacity-70"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <Balancer>{t("team.team_description")}</Balancer>
          </p>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3 ">
            {featureText.map(({ avartar, name, position, description, href }, index) => (
              <Link
                href={href || `/${locale}`}
                className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg bg-card border-card border-opacity-20 shadow-lg"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${800 + index * 100}`}
              >
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    {avartar}
                    <div>
                    <h4 className="font-medium">{name}</h4>
                    <p className="text-xs">{position}</p>
                    </div>
                  </div>
                  <p className="text-base opacity-75 line-clamp-4 italic">"{description}"</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Team;