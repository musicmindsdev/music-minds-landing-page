
import {  Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer";
import CookiePolicy from "./_components/cookiepolicy";



export default function Home() {
  return (
   <Main >
    <Section >
      <Container >
        <CookiePolicy/>
       <Footer />
      </Container>
    </Section>
   </Main>
  );
}
