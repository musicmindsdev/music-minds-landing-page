"use client";

import { DownloadAppButton } from "@/components/download-app-button";
import Balancer from "react-wrap-balancer";
import { Container, Section } from "@/components/craft";
import Logo from "@/public/Musicmindlogo.svg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function CTAPr() {
  const t = useTranslations();

  useEffect(() => {
    try {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
      });
      AOS.refresh();
      console.log("CTAA: AOS initialized");
      return () => {
        AOS.refreshHard();
        console.log("CTAA: AOS cleaned up");
      };
    } catch (error) {
      console.error("CTAA: AOS initialization error:", error);
    }
  }, []);


  return (
    <Section className="bg-[url(/bg.png)] rounded-2xl" data-aos="fade-in">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="!my-0 font-bold text-4xl" data-aos="fade-up" data-aos-delay="100">
            {t("ctapr.main_title")}
          </h1>
          <h4 className="text-muted-foreground w-full" data-aos="fade-up" data-aos-delay="200">
            <Balancer>
              {t("ctapr.sub_title")}
            </Balancer>
          </h4>
          <div className="not-prose flex w-full max-w-md flex-col" data-aos="fade-up" data-aos-delay="300">
            <DownloadAppButton />
          </div>
        </div>
        <div className="flex justify-center md:w-1/2" data-aos="zoom-in" data-aos-delay="400">
          <Image src={Logo} alt={t("ctaa.logo_alt")} width={150} height={150} />
        </div>
      </Container>
    </Section>
  );
}