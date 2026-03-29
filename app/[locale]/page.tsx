import { Container, Main, Section } from "@/components/craft";
import CTA from "@/components/home-page/cta";
import Feature from "@/components/home-page/feature";
import FeatureAction from "@/components/home-page/featureaction";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";
import { Footer } from "@/components/home-page/footer";
import Hero from "@/components/home-page/hero";
import { getSiteUrl } from "@/lib/site-url";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const site = getSiteUrl();
  return {
    description: t("hero.description"),
    alternates: {
      canonical: `${site}/${locale}`,
      languages: {
        en: `${site}/en`,
        de: `${site}/de`,
      },
    },
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <Feature />
          <FeatureLeft />
          <FeatureAction />
          <FeatureRight />
          <CTA />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
