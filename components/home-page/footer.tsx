"use client"

import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "../ui/button";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Section, Container } from "../craft";
import Logo from "@/public/Musicmindlogo.svg";
import { useTranslation } from "react-i18next";

export  function Footer({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  console.log(`Footer locale: ${locale}, t is function: ${typeof t === "function"}`);

  if (typeof t !== "function") {
    console.warn(`Footer: t is not a function for locale ${locale}`);
    return null;
  }
  return (
    <footer>
      <Section className="">
        <Container className="flex flex-col items-start md:flex-row md:items-center md:justify-between gap-4 md:gap-2 lg:gap-7 p-4 w-full max-w-full">
          <div className="not-prose flex flex-col gap-6 w-full max-w-[200px] md:max-w-[180px] lg:max-w-[240px]">
            <Link href={`/${locale}`}>
              <h3 className="sr-only">Music Minds</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="w-24 md:w-28 lg:w-32 h-auto"
              />
            </Link>
            <p className="leading-4 font-light">
              <Balancer>{t("footer.description")}</Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 min-w-[100px]">
            <h5 className="font-bold">{t("footer.company")}</h5>
            <Link href={`/${locale}/about`}>{t("footer.about_us")}</Link>
            <Link href={`/${locale}/contact`}>{t("footer.contact")}</Link>
            <Link href={`/${locale}`}>{t("footer.careers")}</Link>
            <Link href={`/${locale}`}>{t("footer.blog")}</Link>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-center min-w-[100px]">
            <h5 className="font-bold">{t("footer.resources")}</h5>
            <Link href={`/${locale}`}>{t("footer.help_center")}</Link>
            <Link href={`/${locale}`}>{t("footer.community")}</Link>
            <Link href={`/${locale}`}>{t("footer.tutorials")}</Link>
            <Link href={`/${locale}`}>{t("footer.events")}</Link>
          </div>
          <div className="flex flex-col items-start gap-2 min-w-[100px]">
            <h5 className="font-bold">{t("footer.legal")}</h5>
            <Link href={`/${locale}/privacy`}>{t("footer.privacy_policy")}</Link>
            <Link href={`/${locale}/terms`}>{t("footer.terms_conditions")}</Link>
            <Link href={`/${locale}/conduct`}>{t("footer.code_of_conduct")}</Link>
            <Link href={`/${locale}`}>{t("footer.compliance")}</Link>
          </div>
          <div className="flex flex-col items-start gap-2 w-full max-w-[200px] md:max-w-[180px] lg:max-w-[240px] text-sm">
            <h5 className="font-bold">{t("footer.contact")}</h5>
            <Link href={`/${locale}/privacy-policy`} className="break-words">
              {t("footer.address")}
            </Link>
            <Link href={`/${locale}/terms-of-service`}>{t("footer.email")}</Link>
            <Link href={`/${locale}/cookie-policy`}>{t("footer.phone")}</Link>
            <Link href={`/${locale}`}>{t("footer.events")}</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2 w-full max-w-full">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Link href="https://www.instagram.com/musicminds.io">
                <Instagram />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
            <Button variant="outline" size="icon">
              <Youtube />
            </Button>
          </div>
          <p className="text-muted-foreground">{t("footer.copyright")}</p>
        </Container>
      </Section>
    </footer>
  );
}