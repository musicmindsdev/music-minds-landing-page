import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Button } from "../ui/button";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { Section, Container } from "../craft";
import Logo from "@/public/Musicmindlogo.svg";

export default function Footer() {
  return (
    <footer>
      <Section className="">
        <Container className="flex flex-col items-start md:flex-row md:items-center md:justify-between gap-4 md:gap-2 lg:gap-7 p-4 w-full max-w-full">
          <div className="not-prose flex flex-col gap-6 w-full max-w-[200px] md:max-w-[180px] lg:max-w-[240px]">
            <Link href="/">
              <h3 className="sr-only">brijr/components</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="w-24 md:w-28 lg:w-32 h-auto"
              />
            </Link>
            <p className="leading-4 font-light">
              <Balancer>
                Connecting aspiring musicians with world-class coaches for a transformative musical journey.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 min-w-[100px]">
            <h5 className="font-bold">Company</h5>
            <Link href="/">About Us</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Blog</Link>
          </div>
          <div className="flex flex-col items-start gap-2 md:items-center min-w-[100px]">
            <h5 className="font-bold">Resources</h5>
            <Link href="/">Help Center</Link>
            <Link href="/">Community</Link>
            <Link href="/">Tutorials</Link>
            <Link href="/">Events</Link>
          </div>
          <div className="flex flex-col items-start gap-2 min-w-[100px]">
            <h5 className="font-bold">Legal</h5>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookie">Cookie policy</Link>
            <Link href="/">Compliance</Link>
          </div>
          <div className="flex flex-col items-start gap-2 w-full max-w-[200px] md:max-w-[180px] lg:max-w-[240px] text-sm">
            <h5 className="font-bold">Contact</h5>
            <Link href="/privacy-policy" className="break-words">
              HQ @ No 15, Street 150 Jankule Road, Abuja Nig.
            </Link>
            <Link href="/terms-of-service">help@musicminds.com</Link>
            <Link href="/cookie-policy">+234 709-679 0893</Link>
            <Link href="/">Events</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2 w-full max-w-full">
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
            © 2025 Music Minds. All rights reserved
          </p>
        </Container>
      </Section>
    </footer>
  );
}