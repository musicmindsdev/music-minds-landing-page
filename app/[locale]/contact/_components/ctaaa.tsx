"use client";

import { DownloadAppButton } from "@/components/download-app-button";
import Balancer from "react-wrap-balancer";
import { Container, Section } from "@/components/craft";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function CTAC() {
  const t = useTranslations();

  useEffect(() => {
    try {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
      });
      AOS.refresh();
      console.log("CTAC: AOS initialized");
      return () => {
        AOS.refreshHard();
        console.log("CTAC: AOS cleaned up");
      };
    } catch (error) {
      console.error("CTAC: AOS initialization error:", error);
    }
  }, []);


  return (
    <Section className="bg-[url(/bg.png)] rounded-2xl" data-aos="fade-in">
      <Container className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6 md:w-1/2">
          <h1 className="!my-0 font-bold text-4xl text-center" data-aos="fade-up" data-aos-delay="100">
            <Balancer>{t("ctac.main_title")}</Balancer>
          </h1>
          <h4 className="text-muted-foreground w-full md:w-[60%] text-center" data-aos="fade-up" data-aos-delay="200">
            <Balancer>{t("ctac.sub_title")}</Balancer>
          </h4>
          <div className="not-prose flex w-full max-w-md flex-col" data-aos="fade-up" data-aos-delay="300">
            <DownloadAppButton />
          </div>
        </div>
      </Container>
    </Section>
  );
}