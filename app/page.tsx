import { Container, Main, Section } from "@/components/craft";
import Hero from "@/components/home-page/hero";
import Feature from "@/components/home-page/feature";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureAction from "@/components/home-page/featureaction";
import FeatureRight from "@/components/home-page/feature-right";
import CTA from "@/components/home-page/cta";
import { Footer } from "@/components/home-page/footer";
import { getServerLocale } from "@/lib/i18n";

export default async function Home() {
  const locale = await getServerLocale();
  console.log(`Rendering landing page for locale: ${locale}`);

  return (
    <Main>
      <Section>
        <Container>
          <Hero locale={locale} />
          <Feature locale={locale} />
          <FeatureLeft locale={locale} />
          <FeatureAction locale={locale} />
          <FeatureRight locale={locale} />
          <CTA locale={locale} />
          <Footer locale={locale} />
        </Container>
      </Section>
    </Main>
  );
}