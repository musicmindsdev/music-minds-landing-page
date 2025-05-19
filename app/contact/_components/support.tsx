"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { ArrowRight } from "lucide-react";
import { JSX, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported

type FeatureText = {
  title: string;
  description: string;
  href?: string;
  buttons: JSX.Element;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    title: "Trouble signing in?",
    href: "/",
    description:
      "If you’ve got trouble signing in, you might need to reset your password or recover your username. Click learn more for a step-by-step guide on how to manage your account.",
    buttons: (
      <div className="flex gap-2">
        <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
          Account
        </Button>
        <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
          Sign in
        </Button>
        <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
          Dashboard
        </Button>
      </div>
    ),
    cta: "Learn More",
  },
  {
    title: "Need help with KYC?",
    href: "/",
    description:
      "Having trouble with the KYC verification process? Click below to learn about the different KYC levels, and the step-by-step requirements for each.",
    buttons: (
      <div className="flex gap-2">
        <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
          Verifications
        </Button>
        <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
          Bookings
        </Button>
        <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
          Security
        </Button>
      </div>
    ),
    cta: "Learn More",
  },
  {
    title: "Compromised account?",
    href: "/",
    description:
      "For any issues you’ve encountered, including fraud, click the link below to submit a request, and our support team will respond to you as soon as possible.",
    buttons: (
      <div className="flex gap-2">
        <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
          Fraud
        </Button>
        <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
          Security
        </Button>
        <Button className="bg-[#E5E3FF] text-[#5243FE] rounded-full hover:bg-[#E5E3FF]">
          Account
        </Button>
      </div>
    ),
    cta: "Learn More",
  },
];

const Support = () => {
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
      className="py-12 bg-card"
      data-aos="fade-in"
    >
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3
            className="text-4xl font-bold w-[52%]"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Balancer>
              Get{" "}
              <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                quick support
              </span>{" "}
              on popular issues
            </Balancer>
          </h3>

          <div
            className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {featureText.map(({ title, description, href, buttons, cta }, index) => (
              <Link
                href={`${href}`}
                className="flex flex-col justify-between gap-6 rounded-lg p-6 transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg shadow-lg"
                key={index}
                data-aos="fade-right"
                data-aos-delay={`${400 + index * 100}`} // Staggered animation for each card
              >
                <div className="grid gap-4">
                  <h4 className="text-xl text-primary font-semibold">{title}</h4>
                  <p className="text-base opacity-75">{description}</p>
                </div>
                {buttons}
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

export default Support;
