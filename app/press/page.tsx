
import {  Container, Main, Section } from "@/components/craft";
import { Footer } from "@/components/home-page/footer";
import { cookies } from "next/headers";
import Heropr from "./_components/Hero";
import StoryPr from "./_components/storypr";
import CTAPr from "./_components/ctapr";
import Featurepr from "./_components/featurepr";
import Team from "./_components/team";

const supportedLngs = ["de", "en", "fr"];
const defaultLocale = "en";

function getServerLocale(): string {
  try {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cookieStore:any =  cookies();
    const locale = cookieStore.get("locale")?.value;
    
    if (locale && supportedLngs.includes(locale)) {
      return locale;
    }
  } catch (error) {
    console.log("Could not access cookies:", error);
  }
  
  return defaultLocale;
}

export default function Home() {
  const locale = getServerLocale();

  return (
   <Main >
    <Section >
      <Container >
        <Heropr locale={locale} />
        <StoryPr locale={locale} />
        <Team locale={locale}/>
        <Featurepr locale={locale} />
        <CTAPr locale={locale}/>
        <Footer locale={locale} />
      </Container>
    </Section>
   </Main>
  );
}
