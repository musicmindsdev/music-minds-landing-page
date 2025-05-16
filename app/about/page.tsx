
import {  Container, Main, Section } from "@/components/craft";
import Hero from "./_components/HeroA";
import Story from "./_components/story";
import Feature from "./_components/Feature";
import Value from "./_components/value";
import Footer from "@/components/home-page/footer";
import CTAA from "./_components/ctaa";

export default function Home() {
  return (
   <Main >
    <Section >
      <Container >
        <Hero/>
        <Story/>
        <Feature/>
        <Value/>
        <CTAA/>
        <Footer/>
      </Container>
    </Section>
   </Main>
  );
}
