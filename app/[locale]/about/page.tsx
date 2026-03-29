import { Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import CTAA from "./_components/ctaa";
import Feature1 from "./_components/Feature";
import Heroc from "./_components/Hero";
import Story from "./_components/story";
import Value from "./_components/value";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <Heroc />
          <Story />
          <Feature1 />
          <Value />
          <CTAA />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
