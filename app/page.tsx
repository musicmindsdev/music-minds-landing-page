import Image from "next/image";
import { Layout, Container, Main, Section } from "@/components/craft";
import Hero from "@/components/home-page/hero";
import Feature from "@/components/home-page/feature";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureAction from "@/components/home-page/featureaction";
import FeatureRight from "@/components/home-page/feature-right";
import CTA from "@/components/home-page/cta";
import Footer from "@/components/home-page/footer";

export default function Home() {
  return (
   <Main>
    <Section>
      <Container>
        <Hero/>
        <Feature />
        <FeatureLeft />
        <FeatureAction />
        <FeatureRight/>
        <CTA />
        <Footer/>
      </Container>
    </Section>
   </Main>
  );
}
