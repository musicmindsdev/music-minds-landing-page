import Image from "next/image";
import { Layout, Container, Main, Section } from "@/components/craft";
import Hero from "@/components/home-page/hero";
import Feature from "@/components/home-page/feature";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureAction from "@/components/home-page/featureaction";
import FeatureRight from "@/components/home-page/feature-right";
import CTA from "@/components/home-page/cta";
import Footer from "@/components/home-page/footer";
import Testimonials from "@/components/home-page/testimonials";

export default function Home() {
  return (
   <Main >
    <Section >
      <Container >
        <Hero/>
        <Feature/>
        <FeatureLeft />
        <FeatureAction />
        <FeatureRight/>
        <Testimonials />
        <CTA />
        <Footer/>
      </Container>
    </Section>
   </Main>
  );
}
