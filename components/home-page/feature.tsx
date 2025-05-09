"use client"

import Link from "next/link";

import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/craft";

import { JSX, useEffect } from "react";
import Image from "next/image";
import Music from "@/public/music.svg";
import Calendar from "@/public/calendar.svg";
import Play from "@/public/play.svg";
import MessageText from "@/public/message-text.svg";
import Image1 from "@/public/image46.png";
import Image2 from "@/public/image47.png";
import Image3 from "@/public/image48.png";
import Image4 from "@/public/image49.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Image src={Music} className="rounded-full p-3 bg-[#EAE9FF]" alt="" />,
    title: "Expert Service Providers",
    href: "/",
    description:
      "Connect with professional service providers across various areas in music ranging from songwriters to producers for personalized sessions tailored to you.",
  },
  {
    icon: <Image src={Calendar} className="rounded-full p-3 bg-[#EAE9FF]" alt="" />,
    title: "Easy Scheduling",
    href: "/",
    description:
      "Book and manage your sessions with service providers using our intuitive scheduling system. No more back-and-forth emails.",
  },
  {
    icon: <Image src={Play} className="rounded-full p-3 bg-[#EAE9FF]" alt="" />,
    title: "Progress Tracking",
    href: "/",
    description:
      "Record your sessions, track your progress, and share your improvements with friends, coaches and the community.",
  },
  {
    icon: <Image src={MessageText} className="rounded-full p-3 bg-[#EAE9FF]" alt="" />,
    title: "Community Support",
    href: "/",
    description:
      "Connect with fellow musicians, share experiences, and get inspiration from a supportive community.",
  },
];

const Feature = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50, // Trigger animations earlier
    });
    AOS.refresh(); // Ensure animations are applied after initialization
  }, []);

  return (
    <Section className="bg-card w-[100%]" data-aos="fade-up">
      <Container className="flex-col">
        <div className="flex flex-col text-center justify-center pb-7">
          <h3 data-aos="fade-up" data-aos-delay="100">TRUSTED BY ARTISTS WORLDWIDE</h3>
          <div className="grid grid-cols-2 gap-4 p-4 md:flex md:flex-row md:items-center md:justify-center md:gap-7">
            <Image src={Image1} alt="" className="filter grayscale w-auto h-auto md:w-auto md:h-auto" data-aos="fade-up" data-aos-delay="200" />
            <Image src={Image3} className="filter grayscale w-auto h-auto md:w-auto md:h-auto" alt="" data-aos="fade-up" data-aos-delay="300" />
            <Image src={Image4} alt="" className="filter grayscale w-auto h-auto md:w-auto md:h-auto" data-aos="fade-up" data-aos-delay="400" />
            <Image src={Image2} className="filter grayscale w-auto h-auto md:w-auto md:h-auto" alt="" data-aos="fade-up" data-aos-delay="500" />
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-7">
          <h3 className="text-4xl bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent font-bold text-center" data-aos="fade-up" data-aos-delay="600">
            <Balancer>
              Elevate your Musical Journey
            </Balancer>
          </h3>
          <p className="text-sm text-center line-clamp-2 font-light opacity-70" data-aos="fade-up" data-aos-delay="700">
            <Balancer>
              Music Minds provides all the tools you need to grow your musical talents with expert guidance.
            </Balancer>
          </p>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
            {featureText.map(
              ({ icon, title, description, href }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg bg-card border-white border-opacity-20 shadow-lg"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={`${800 + index * 100}`}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-primary font-semibold">{title}</h4>
                    <p className="text-base opacity-75 line-clamp-4">{description}</p>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;