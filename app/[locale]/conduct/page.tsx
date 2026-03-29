import { Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import CodeOfConduct from "./_components/cookiepolicy";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ConductPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <CodeOfConduct />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
