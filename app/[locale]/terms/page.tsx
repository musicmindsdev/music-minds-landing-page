import { Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import TermsOfUse from "./_components/termsofuse";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <TermsOfUse />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
