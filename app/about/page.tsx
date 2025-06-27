
import {  Container, Main, Section } from "@/components/craft";
import Heroc from "./_components/Hero";
import Story from "./_components/story";
import Value from "./_components/value";
import CTAA from "./_components/ctaa";
import { Footer } from "@/components/home-page/footer";
import { cookies } from "next/headers";
import Feature1 from "./_components/Feature";


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
        <Heroc locale={locale}/>
        <Story locale={locale}/>
        <Feature1 locale={locale}/>
        <Value locale={locale}/>
        <CTAA locale={locale}/>
        <Footer locale={locale} />
      </Container>
    </Section>
   </Main>
  );
}
