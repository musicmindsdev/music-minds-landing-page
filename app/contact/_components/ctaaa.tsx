"use client";

import Link from "next/link";

import Balancer from "react-wrap-balancer";

import { Button } from "@/components/ui/button";

import { Container, Section } from "@/components/craft";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
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
      <Container className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6 md:w-1/2">
          <h1 className="!my-0 font-bold text-4xl text-center" data-aos="fade-up" data-aos-delay="100">
          We&apos;re powering the dreams of millions of businesses
          </h1>
          <h4 className="text-muted-foreground w-full md:w-[60%] text-center" data-aos="fade-up" data-aos-delay="200">
            <Balancer>
            Let  power yours too.
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
      </Container>
    </Section>
  );
};

export default CTA;