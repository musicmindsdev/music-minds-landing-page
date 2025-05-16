
import {  Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer";
import TermsOfUse from "./_components/termsofuse";



export default function Home() {
  return (
   <Main >
    <Section >
      <Container >
        <TermsOfUse />
       <Footer />
      </Container>
    </Section>
   </Main>
  );
}
