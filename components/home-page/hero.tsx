"use client";

import NextLink from "next/link";
import Image from "next/image";
import { Link as I18nLink } from "@/i18n/navigation";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/hero1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const WEB_APP_LOGIN = "https://app.music-minds.io/auth/login";
const WEB_APP_REGISTER = "https://app.music-minds.io/auth/register";

const Hero = () => {
  const t = useTranslations();
  const [isAppleDevice, setIsAppleDevice] = useState<boolean | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      startEvent: "DOMContentLoaded",
      once: false,
      mirror: true,
    });
    const t = setTimeout(() => AOS.refresh(), 100);
    return () => {
      clearTimeout(t);
      AOS.refreshHard();
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const apple = /iPad|iPhone|iPod|Macintosh/.test(userAgent);
    setIsAppleDevice(apple);
  }, []);

  const appStoreURL = "https://apps.apple.com/us/app/music-minds/id6755591778";
  const playStoreURL = "https://play.google.com/store/apps/details?id=com.ims.mminds";

  const getAppStoreURL = () => {
    if (isAppleDevice === null) return "/";
    return isAppleDevice ? appStoreURL : playStoreURL;
  };

  const storeHref = getAppStoreURL();

  const downloadButton = (
    <>
      <FaApple className="text-lg shrink-0" aria-hidden />
      <span className="opacity-80" aria-hidden>
        |
      </span>
      <IoLogoGooglePlaystore className="text-lg shrink-0" aria-hidden />
      <span className="truncate">{t("cta.download_app")}</span>
    </>
  );

  return (
    <Section className="bg-[url(/bg.png)] p-4 sm:p-6 md:p-8 pb-0 overflow-x-hidden" data-aos="fade-in">
      <Container className="grid items-stretch gap-6 md:grid-cols-2 md:gap-12 pb-0 max-w-full">
        <div className="flex min-w-0 flex-col items-start justify-center gap-4 py-4 sm:gap-6 sm:py-6">
          <div className="flex w-full min-w-0 flex-col text-left justify-center">
            <h1
              className="break-words text-4xl font-bold sm:text-5xl md:text-7xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("hero.title_part1")}
            </h1>
            <h1
              className="break-words text-4xl font-bold sm:text-5xl md:text-7xl bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("hero.title_part2")}
            </h1>
            <h1
              className="break-words text-4xl font-bold sm:text-5xl md:text-7xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {t("hero.title_part3")}
            </h1>
          </div>
          <p
            className="text-left w-full max-w-full break-words sm:max-w-[70%] md:max-w-[80%] text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {t("hero.description")}
          </p>
          <div className="w-full max-w-full min-w-0" data-aos="fade-up" data-aos-delay="500">
            {/* Mobile & small tablet: app store */}
            <div className="flex w-full flex-col gap-3 sm:max-w-md md:hidden">
              {storeHref.startsWith("http") ? (
                <NextLink href={storeHref} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="h-12 min-h-[48px] w-full px-4 text-white flex items-center justify-center gap-2">
                    {downloadButton}
                  </Button>
                </NextLink>
              ) : (
                <I18nLink href={storeHref} className="w-full">
                  <Button className="h-12 min-h-[48px] w-full px-4 text-white flex items-center justify-center gap-2">
                    {downloadButton}
                  </Button>
                </I18nLink>
              )}
            </div>
            {/* md+: web app login / sign up */}
            <div className="hidden md:flex md:flex-row md:flex-wrap md:items-stretch md:gap-3">
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
        <div className="flex min-w-0 justify-center md:justify-end" data-aos="zoom-in" data-aos-delay="600">
          <Image
            src={HeroImage}
            alt=""
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full max-w-[600px] sm:mb-[-56px]"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
