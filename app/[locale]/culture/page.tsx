import { Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import CTACu from "./_components/ctacu";
import FeatureCu from "./_components/Featurecu";
import HeroCu from "./_components/HeroCu";
import StoryCu from "./_components/story";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function CulturePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <HeroCu />
          <FeatureCu />
          <StoryCu />
          <CTACu />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
