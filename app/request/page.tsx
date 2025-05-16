
import {  Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer";
import SubmitRequest from "./_components/form";



export default function Home() {
  return (
   <Main >
    <Section >
      <Container >
      <SubmitRequest/>
       <Footer />
      </Container>
    </Section>
   </Main>
  );
}
