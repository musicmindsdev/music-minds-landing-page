import { Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import Herod from "./_components/Hero";
import Support1 from "./_components/Support";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function WaitlistPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <Herod />
          <Support1 />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
