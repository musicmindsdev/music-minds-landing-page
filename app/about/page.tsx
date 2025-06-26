
import {  Container, Main, Section } from "@/components/craft";
import Hero from "./_components/HeroA";
import Story from "./_components/story";
import Feature from "./_components/Feature";
import Value from "./_components/value";
import CTAA from "./_components/ctaa";
import { Footer } from "@/components/home-page/footer";
import { cookies } from "next/headers";


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
        <Hero/>
        <Story/>
        <Feature/>
        <Value/>
        <CTAA/>
        <Footer locale={locale} />
      </Container>
    </Section>
   </Main>
  );
}
