import { Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import CTAPr from "./_components/ctapr";
import Featurepr from "./_components/featurepr";
import Heropr from "./_components/Hero";
import StoryPr from "./_components/storypr";
import Team from "./_components/team";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PressPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <Heropr />
          <StoryPr />
          <Team />
          <Featurepr />
          <CTAPr />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
