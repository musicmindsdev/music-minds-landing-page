"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/craft";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Logo from "@/public/Musicmindlogo.svg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CTA = ({ locale }: { locale: string }) => {
  const { t } = useTranslation("common");
  const [isAppleDevice, setIsAppleDevice] = useState<boolean | null>(null);

  console.log(`CTA locale: ${locale}, t is function: ${typeof t === "function"}`);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
    AOS.refresh();
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
    if (isAppleDevice === null) return t("Download the App");
    return isAppleDevice ? t("Download for ios") : t("Download for andriod");
  };

  if (typeof t !== "function") {
    console.warn(`CTA: t is not a function for locale ${locale}`);
    return null;
  }

  return (
    <Section className="bg-[url(/bg.png)] rounded-2xl" data-aos="fade-in">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="!my-0 font-bold text-4xl" data-aos="fade-up" data-aos-delay="100">
            {t("cta.ready_to_start")}
          </h1>
          <h4 className="text-muted-foreground w-full md:w-[60%]" data-aos="fade-up" data-aos-delay="200">
            <Balancer>{t("cta.ready_to_start_description")}</Balancer>
          </h4>
          <div className="not-prose flex items-center gap-2" data-aos="fade-up" data-aos-delay="300">
            <Link href={getAppStoreURL()} target="_blank" rel="noopener noreferrer">
              <Button className="text-white">
                <FaApple /> | <IoLogoGooglePlaystore /> {getButtonText()}
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2" data-aos="zoom-in" data-aos-delay="400">
          <Image src={Logo} alt="" width={150} height={150} />
        </div>
      </Container>
    </Section>
  );
};

export default CTA;