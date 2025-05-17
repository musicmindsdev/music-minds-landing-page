
import {  Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer";
import PrivacyPolicy from "./_components/privacypolicy";



export default function Home() {
  return (
   <Main >
    <Section >
      <Container >
        <PrivacyPolicy/>
       <Footer />
      </Container>
    </Section>
   </Main>
  );
}
