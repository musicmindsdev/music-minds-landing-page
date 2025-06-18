
import {  Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer";
import Hero from "./_components/Hero";
import Support from "./_components/Support";



export default function Home() {
  return (
   <Main >
    <Section >
      <Container >
        <Hero/>
        <Support/>
       <Footer />
      </Container>
    </Section>
   </Main>
  );
}
