import { Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import CTAC from "./_components/ctaaa";
import Herob from "./_components/HeroB";
import Support from "./_components/support";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <Herob />
          <Support />
          <CTAC />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
