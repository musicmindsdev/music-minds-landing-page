"use client";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { JSX, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Help from "@/public/help.svg";
import Support from "@/public/support.svg";
import Answers from "@/public/answers.svg";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Image src={Help} alt="Get Help Icon" className="h-15 w-15" />,
    title: "Get Help",
    href: "/request",
    description: "Experiencing problem? Talk to us about it and we will get right on it",
    cta: "Submit an Issue",
  },
  {
    icon: <Image src={Support} alt="Engage Support Icon" className="h-15 w-15" />,
    title: "Engage Support",
    href: "/",
    description: "Experiencing problem? Talk to us about it and we will get right on it",
    cta: "Chat with us",
  },
  {
    icon: <Image src={Answers} alt="Find Answers Icon" className="h-15 w-15" />,
    title: "Find Answers",
    href: "/",
    description: "Experiencing problem? Talk to us about it and we will get right on it",
    cta: "Visit help centre",
  },
];

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations (in milliseconds)
      offset: 50, // Start animation 50px before the element is in view
      once: false, // Allow animations to replay on scroll
      mirror: true, // Replay animations when scrolling back up
    });

    return () => {
      AOS.refreshHard(); // Clean up AOS on component unmount
    };
  }, []);

  return (
    <Section
      className="w-full bg-[url('/bg1.png')] bg-no-repeat bg-cover p-4 sm:p-6 md:p-8 pb-0"
      data-aos="fade-in"
    >
      <Container className="flex items-center justify-center gap-6 md:grid-cols-2 md:gap-12 pb-0 mt-9">
        <div className="flex flex-col justify-end items-center gap-4 py-4 sm:gap-6 sm:py-6">
          <div className="h-[50px]"></div>
          <Button
            variant={"outline"}
            className="rounded-full"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Contact Us
          </Button>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold w-[80%] text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            We&apos;re always{" "}
            <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              available
            </span>{" "}
            to answer your questions
          </h1>

          <div className="w-full" data-aos="fade-up" data-aos-delay="400">
            {/* Placeholder div, can be removed if not needed */}
          </div>
          <div
            className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {featureText.map(({ icon, title, description, href, cta }, index) => (
              <Link
                href={`${href}`}
                className="flex flex-col justify-between gap-6 rounded-lg p-6 backdrop-filter backdrop-blur-lg shadow-lg"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${600 + index * 100}`} // Staggered animation for each card
              >
                <div className="grid gap-4">
                  {icon}
                  <h4 className="text-xl text-primary font-semibold">{title}</h4>
                  <p className="text-sm opacity-75">{description}</p>
                </div>
                {cta && (
                  <div className="flex h-fit items-center text-sm font-semibold text-[#5243FE]">
                    <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;