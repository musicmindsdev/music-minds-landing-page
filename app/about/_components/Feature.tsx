"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import Image from "next/image";
import { JSX } from "react";
import Ceo from "@/public/Ellipse1.svg";
import Coo from "@/public/Ellipse2.svg";
import Vp from "@/public/Ellipse3.svg";
import Cmo from "@/public/Ellipse4.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import { useEffect } from "react";

type FeatureText = {
  img: JSX.Element;
  title: JSX.Element;
  description: string;
  href?: string;
};

const featureText: FeatureText[] = [
  {
    img: <Image src={Ceo} alt="CEO Image" className="mx-auto block" />,
    title: (
      <div>
        <h3 className="text-sm">Mike Simorankir</h3>
        <p className="text-xs">Founder & CEO</p>
      </div>
    ),
    href: "/",
    description:
      "Mike, MBA, has 15+years of experience serving as Head of Talent & Acquisition in Universal Music Group.",
  },
  {
    img: <Image src={Coo} alt="COO Image" className="mx-auto block" />,
    title: (
      <div>
        <h3 className="text-sm">Stanley George .L.</h3>
        <p className="text-xs">Co-founder & COO</p>
      </div>
    ),
    href: "/",
    description:
      "Stan, MBA, has 8+years of experience serving as Head of Talent & Acquisition in Universal Music Group.",
  },
  {
    img: <Image src={Vp} alt="VP Image" className="mx-auto block" />,
    title: (
      <div>
        <h3 className="text-sm">Ella Baker. J.</h3>
        <p className="text-xs">VP, Operations</p>
      </div>
    ),
    href: "/",
    description:
      "Ella, MBA, has 10 years of experience serving as Head of Talent & Acquisition in Universal Music Group.",
  },
  {
    img: <Image src={Cmo} alt="CMO Image" className="mx-auto block" />,
    title: (
      <div>
        <h3 className="text-sm">Sally Justine</h3>
        <p className="text-xs">Chief Marketing Officer</p>
      </div>
    ),
    href: "/",
    description:
      "Sally, MBA, has 15+years of experience serving as Head of Talent & Acquisition in Universal Music Group.",
  },
];

const Feature = () => {
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
      className="border-b bg-[#F4F3FF] dark:bg-[#1E1B2B]"
      data-aos="fade-in"
    >
      <Container className="not-prose">
        <div className="flex flex-col items-center gap-6">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold w-[60%] line-clamp-2 text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Balancer>
              Our{" "}
              <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                team
              </span>{" "}
              has over 100 years of combined experience!
            </Balancer>
          </h1>
          <h4
            className="text-sm line-clamp-2 w-[50%] text-center font-light opacity-70"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Balancer>
              Our team brings experience, innovation and creativity to the music marketing experience
              to ensure your plans are in good hands.
            </Balancer>
          </h4>

          <div
            className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {featureText.map(({ img, title, description, href }, index) => (
              <Link
                href={`${href}`}
                className="flex flex-col justify-between items-center gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg bg-card border-card border-opacity-20 shadow-lg"
                key={index}
                data-aos="fade-right"
                data-aos-delay={`${500 + index * 100}`} // Staggered animation for each card
              >
                <div className="grid gap-4 items-center justify-center">
                  {img}
                  <h4 className="text-xl text-primary text-center">{title}</h4>
                  <hr />
                  <p className="text-base opacity-75 text-center">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;