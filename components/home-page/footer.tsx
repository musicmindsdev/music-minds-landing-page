
import Image from "next/image";
import Link from "next/link";

import Balancer from "react-wrap-balancer";

import { Button } from "../ui/button";

import {  Twitter, Facebook, Instagram, Youtube } from "lucide-react";

import { Section, Container } from "../craft";

import Logo from "@/public/Musicmindlogo.svg";

export default function Footer() {
  return (
    <footer>
      <Section>
      <Container className="flex flex-col items-start md:flex-row md:items-center md:justify-between gap-7 p-4">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
              ></Image>
            </Link>
            <p className="leading-4 w-[240px] font-light">
              <Balancer >
              Connecting aspiring musicians with world-class coaches for a transformative musical journey.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-bold">Company</h5>
            <Link href="/">About Us</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Blog</Link>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-center">
            <h5 className="font-bold">Resources</h5>
            <Link href="/">Help Center</Link>
            <Link href="/">Community</Link>
            <Link href="/">Tutorials</Link>
            <Link href="/">Events</Link>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h5 className="font-bold">Legal</h5>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Cookie policy</Link>
            <Link href="/">Compliance</Link>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h5 className="font-bold">Contact</h5>
            <Link href="/privacy-policy">HQ @ No 15, Street 150 Jankule Road, Abuja Nig. </Link>
            <Link href="/terms-of-service">help@musicminds.com</Link>
            <Link href="/cookie-policy">+234 709-679 0893</Link>
            <Link href="/">Events</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
            <Twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Instagram />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook />
            </Button>
            <Button variant="outline" size="icon">
              <Youtube />
            </Button>
          </div>
          <p className="text-muted-foreground">
            ©{" "}
            2025 Music Minds. All rights reserved
          </p>
        </Container>
      </Section>
    </footer>
  );
}
