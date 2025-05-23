"use client";

import Link from "next/link";

import Balancer from "react-wrap-balancer";

import { Button } from "@/components/ui/button";

import { Container, Section } from "@/components/craft";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Logo from "@/public/Musicmindlogo.svg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const CTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  return (
    <Section className="bg-[url(/bg.png)] rounded-2xl" data-aos="fade-in">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="!my-0 font-bold text-4xl" data-aos="fade-up" data-aos-delay="100">
            Ready to Start Your Musical Journey?
          </h1>
          <h4 className="text-muted-foreground w-full md:w-[60%]" data-aos="fade-up" data-aos-delay="200">
            <Balancer>
              Join Music Minds today and connect with top music coaches, track your progress, and become the musician you&apos;ve always wanted to be.
            </Balancer>
          </h4>
          <div className="not-prose flex items-center gap-2" data-aos="fade-up" data-aos-delay="300">
            <Link href="/">
              <Button className="text-white">
                <FaApple /> | <IoLogoGooglePlaystore /> Download App
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2" data-aos="zoom-in" data-aos-delay="400">
          <Image src={Logo} alt="" width={150} height={150} />
        </div>
      </Container>
    </Section>
  );
};

export default CTA;