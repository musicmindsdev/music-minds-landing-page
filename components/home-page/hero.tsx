"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import HeroImage from "@/public/hero1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

const Hero = ({ locale }: { locale: string }) => {
  const { t } = useTranslation("common");
  const [isAppleDevice, setIsAppleDevice] = useState<boolean | null>(null);

  console.log(`Hero locale: ${locale}, t is function: ${typeof t === "function"}`);

  useEffect(() => {
    console.log("Initializing AOS");
    AOS.init({
      duration: 1000,
      offset: 0,
      startEvent: "DOMContentLoaded",
      once: false,
      mirror: true,
    });
    setTimeout(() => {
      AOS.refresh();
      console.log("AOS refreshed after delay");
    }, 100);
    return () => {
      AOS.refreshHard();
      console.log("AOS refreshed hard on cleanup");
    };
  }, []);

  // Detect user's device type
  useEffect(() => {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    // Check if it's an Apple device (iOS, iPad, Mac)
    const apple = /iPad|iPhone|iPod|Macintosh/.test(userAgent);
    setIsAppleDevice(apple);
  }, []);

  // App store URLs
  const appStoreURL = "https://apps.apple.com/us/app/music-minds/id6755591778";
  const playStoreURL = "https://play.google.com/store/apps/details?id=com.ims.mminds";

  // Determine which URL to use based on device
  const getAppStoreURL = () => {
    if (isAppleDevice === null) return `/${locale}`; // Default while detecting
    return isAppleDevice ? appStoreURL : playStoreURL;
  };

  // Determine button text based on device
  const getButtonText = () => {
    if (isAppleDevice === null) return t("cta.download_app") || "Download App";
    return isAppleDevice ? (t("Download on iOS")) : (t("Download for andriod"));
  };

  if (typeof t !== "function") {
    console.warn(`Hero: t is not a function for locale ${locale}`);
    return null;
  }

  return (
    <Section className="bg-[url(/bg.png)] p-4 sm:p-6 md:p-8 pb-0" data-aos="fade-in">
      <Container className="grid items-stretch gap-6 md:grid-cols-2 md:gap-12 pb-0">
        <div className="flex flex-col items-start justify-center gap-4 py-4 sm:gap-6 sm:py-6">
          <div className="flex flex-col text-left justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold" data-aos="fade-up" data-aos-delay="100">
              {t("hero.title_part1")}
            </h1>
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {t("hero.title_part2")}
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold" data-aos="fade-up" data-aos-delay="300">
              {t("hero.title_part3")}
            </h1>
          </div>
          <p className="text-left w-full sm:w-[70%] md:w-[80%] line-clamp-3" data-aos="fade-up" data-aos-delay="400">
            {t("hero.description")}
          </p>
          <div className="w-full" data-aos="fade-up" data-aos-delay="500">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Replaced waitlist button with smart app store button */}
              <Link href={getAppStoreURL()} target="_blank" rel="noopener noreferrer">
                <Button className="w-full h-[50px] p-3 text-white flex items-center justify-center gap-2">
                  <FaApple className="text-lg" /> 
                  <span>|</span>
                  <IoLogoGooglePlaystore className="text-lg" /> 
                  {getButtonText()}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end" data-aos="zoom-in" data-aos-delay="600">
          <Image
            src={HeroImage}
            alt="Hero section image"
            width={600}
            height={400}
            className="w-full max-w-[600px] h-auto sm:mb-[-56px]"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;