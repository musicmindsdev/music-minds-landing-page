
import {  Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer";
import Hero from "./_components/HeroB";
import Support from "./_components/support";
import Cta from "./_components/ctaaa";


export default function Home() {
  return (
   <Main >
    <Section >
      <Container >
        <Hero/>
        <Support/>
        <Cta />
       <Footer />
      </Container>
    </Section>
   </Main>
  );
}
