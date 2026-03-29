import { Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import CTAPr from "../press/_components/ctapr";
import HeroKit from "../press-kit/_components/herokit";
import PressKitInterface from "./_components/presskit";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function LogoBrandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <HeroKit />
          <PressKitInterface />
          <CTAPr />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
