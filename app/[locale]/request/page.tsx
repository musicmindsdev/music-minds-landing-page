import { Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import SubmitRequest from "./_components/form";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function RequestPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Main>
      <Section>
        <Container>
          <SubmitRequest />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
