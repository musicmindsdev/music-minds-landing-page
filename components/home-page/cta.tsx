
import Link from "next/link";

import Balancer from "react-wrap-balancer";

import { Button } from "@/components/ui/button";

import { Container, Section } from "@/components/craft";

const CTA = () => {
  return (
    <Section>
      <Container className="flex justify-between">
        <div className="flex flex-col gap-6">
        <h1 className="!my-0 font-bold text-4xl">Lorem ipsum dolor sit amet</h1>
        <h4 className="text-muted-foreground">
          <Balancer>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Balancer>
        </h4>
        <div className="not-prose flex items-center gap-2">
          <Button asChild>
            <Link href="#">Get Started</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#">Learn More {"->"}</Link>
          </Button>
        </div>
        </div>
        <img src="/Musicmindlogo.svg"/>
      </Container>
    </Section>
  );
};

export default CTA;
