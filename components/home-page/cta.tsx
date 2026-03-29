"use client";

import NextLink from "next/link";
import { DownloadAppButton } from "@/components/download-app-button";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/craft";
import Logo from "@/public/Musicmindlogo.svg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

const WEB_APP_LOGIN = "https://app.music-minds.io/auth/login";
const WEB_APP_REGISTER = "https://app.music-minds.io/auth/register";

const CTA = () => {
  const t = useTranslations();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <Section className="overflow-x-hidden bg-[url(/bg.png)] rounded-2xl px-4 sm:px-6" data-aos="fade-in">
      <Container className="flex max-w-full min-w-0 flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 w-full flex-col gap-6 md:w-1/2 md:items-start">
          <h1
            className="!my-0 break-words text-center text-3xl font-bold sm:text-4xl md:text-left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("cta.ready_to_start")}
          </h1>
          <h4
            className="text-muted-foreground w-full max-w-full break-words text-center text-base leading-relaxed md:w-[90%] md:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Balancer>{t("cta.ready_to_start_description")}</Balancer>
          </h4>
          <div
            className="not-prose flex w-full max-w-md flex-col gap-3 self-center md:max-w-none md:self-start"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-full md:hidden">
              <DownloadAppButton />
            </div>
            <div className="hidden w-full flex-row flex-wrap gap-3 md:flex">
              <NextLink
                href={WEB_APP_LOGIN}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[140px] flex-1 md:flex-none"
              >
                <Button
                  variant="outline"
                  className="h-12 min-h-[48px] w-full border-[#5243FE] text-[#5243FE] hover:bg-[#5243FE]/10"
                >
                  {t("cta.auth_login")}
                </Button>
              </NextLink>
              <NextLink
                href={WEB_APP_REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[140px] flex-1 md:flex-none"
              >
                <Button className="h-12 min-h-[48px] w-full text-white bg-[#5243FE] hover:bg-[#5243FE]/90">
                  {t("cta.auth_sign_up")}
                </Button>
              </NextLink>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 w-full justify-center md:w-1/2" data-aos="zoom-in" data-aos-delay="400">
          <Image src={Logo} alt="" width={150} height={150} className="h-auto w-[min(150px,40vw)] max-w-full" />
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
