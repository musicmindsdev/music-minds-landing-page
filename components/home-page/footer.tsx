"use client"

import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@/i18n/navigation";
import Balancer from "react-wrap-balancer";
import { Button } from "../ui/button";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Section, Container } from "../craft";
import Logo from "@/public/Musicmindlogo.svg";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations();
  return (
    <footer>
      <Section className="">
        <Container className="flex flex-col items-start md:flex-row md:items-center md:justify-between gap-4 md:gap-2 lg:gap-7 p-4 w-full max-w-full">
          <div className="not-prose flex flex-col gap-6 w-full max-w-[200px] md:max-w-[180px] lg:max-w-[240px]">
            <Link href="/">
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
            <Link href={`/about`}>{t("footer.about_us")}</Link>
            <Link href={`/contact`}>{t("footer.contact")}</Link>
            {/*<Link href={``}>{t("footer.careers")}</Link>*/}
            {/*<Link href={``}>{t("footer.blog")}</Link>*/}
          </div>
          <div className="flex flex-col items-start gap-2 md:items-center min-w-[100px]">
            <h5 className="font-bold">{t("footer.resources")}</h5>
            {/*<Link href={``}>{t("footer.help_center")}</Link>*/}
            {/*<Link href={``}>{t("footer.community")}</Link>*/}
            {/*<Link href={``}>{t("footer.tutorials")}</Link>*/}
            {/*<Link href={``}>{t("footer.events")}</Link>*/}
            <Link href={`/conduct`}>{t("footer.code_of_conduct")}</Link>
            <NextLink
              href={`https://www.google.com/maps/place/Reichsstra%C3%9Fe+99,+14052+Berlin,+Germany/@52.5118569,13.2644961,17z/data=!3m1!4b1!4m6!3m5!1s0x47a857291d55130b:0xfdae2534a72974d3!8m2!3d52.5118569!4d13.267071!16s%2Fg%2F11b8v674cx?entry=ttu&g_ep=EgoyMDI1MDcwNi4wIKXMDSoASAFQAw%3D%3D`}
              className="break-words"
            >
              {t("footer.address")}
            </NextLink>
          </div>
          <div className="flex flex-col items-start gap-2 min-w-[100px]">
            <h5 className="font-bold">{t("footer.legal")}</h5>
            <Link href={`/privacy`}>{t("footer.privacy_policy")}</Link>
            <Link href={`/terms`}>{t("footer.terms_conditions")}</Link>
            {/*<Link href={`/conduct`}>{t("footer.code_of_conduct")}</Link>*/}
            {/*<Link href={``}>{t("footer.compliance")}</Link>*/}
          </div>
          <div className="flex flex-col items-start gap-2 w-full max-w-[200px] md:max-w-[180px] lg:max-w-[240px] text-sm">
            <h5 className="font-bold">{t("footer.contact")}</h5>
            <NextLink href={`mailto:support@music-minds.io`}>{t("footer.email")}</NextLink>
            <NextLink href={`tel:+4915733927104`}>{t("footer.phone")}</NextLink>
            {/*<Link href={``}>{t("footer.events")}</Link>*/}
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2 w-full max-w-full">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <NextLink href="https://www.instagram.com/musicminds.io">
                <Instagram />
              </NextLink>
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