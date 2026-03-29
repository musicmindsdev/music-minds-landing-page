import { Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import PrivacyPolicy from "./_components/privacypolicy";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <PrivacyPolicy />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
