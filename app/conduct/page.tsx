
import {  Container, Main, Section } from "@/components/craft";
import { cookies } from "next/headers";
import { Footer } from "@/components/home-page/footer";
import CodeOfConduct from "./_components/cookiepolicy";


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
        <CodeOfConduct locale={locale}/>
        <Footer locale={locale} />
      </Container>
    </Section>
   </Main>
  );
}
