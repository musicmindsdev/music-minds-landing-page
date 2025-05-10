"use client"

import React, { JSX, useState, useEffect, useRef } from "react";

import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import { Button } from "../ui/button";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Image from "next/image";
import Iphone1 from "@/public/iphone1.png";
import Iphone2 from "@/public/iphone2.png";
import Iphone3 from "@/public/iphone3.png";
import Iphone4 from "@/public/iphone4.png";
import AOS from "aos";
import "aos/dist/aos.css";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  img: JSX.Element;
};

const featureText: FeatureText[] = [
  {
    icon: <p className="text-2xl font-bold bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">01</p>,
    title: "Create Your Profile",
    description:
      "Sign up and create your music profile with your skills, goals, and preferences.",
    img: <Image src={Iphone1} className="w-42 h-45" alt="" />,
  },
  {
    icon: <p className="text-2xl font-bold bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">02</p>,
    title: "Find Your Service Provider",
    description:
      "Browse through verified coaches and musicians, filter by genre, location, and expertise.",
    img: <Image src={Iphone2} className="w-42 h-45" alt="" />,
  },
  {
    icon: <p className="text-2xl font-bold bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">03</p>,
    title: "Book Sessions",
    description:
      "Schedule sessions with your favorite providers at times that work for you.",
    img: <Image src={Iphone3} className="w-42 h-45" alt="" />,
  },
  {
    icon: <p className="text-2xl font-bold bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">04</p>,
    title: "Grow & Share",
    description:
      "Track your progress, share recordings, and connect with the music community.",
    img: <Image src={Iphone4} className="w-42 h-45" alt="" />,
  },
];

const FeatureAction = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const section = sectionRef.current;

    if (!scrollContainer || !section) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScroll = scrollWidth - clientWidth;
      const progressPercent = (scrollLeft / maxScroll) * 100;
      setProgress(progressPercent);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
          };
          window.addEventListener("wheel", onWheel);
          return () => window.removeEventListener("wheel", onWheel);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      observer.unobserve(section);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50, 
    });
    AOS.refresh(); 
  }, []);

  return (
    <Section className="" data-aos="fade-in">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent font-bold text-center" data-aos="fade-up" data-aos-delay="100">
            <Balancer>
              How Music Minds Works
            </Balancer>
          </h3>
          <h4 className="text-sm font-light opacity-70 text-center" data-aos="fade-up" data-aos-delay="200">
            <Balancer>
              A simple process to connect you with the musical guidance you need.
            </Balancer>
          </h4>

          <div
            className="mt-6 flex gap-6 overflow-x-auto snap-x snap-mandatory md:mt-12"
            ref={scrollContainerRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx>{`
              .snap-x::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {featureText.map(({ icon, title, description, img }, index) => (
              <div
                className="flex flex-col gap-3 bg-gradient-to-r from-[#F2F1FF] to-[#FFF0FD] rounded-lg pb-0 p-4 snap-center min-w-[300px] md:min-w-[calc(33.333%-1.5rem)]"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
              >
                {icon}
                <h4 className="text-2lg  text-black font-semibold">{title}</h4>
                <p className="opacity-75 text-sm line-clamp-2 text-black">{description}</p>
                <div className="flex justify-end pb-0">{img}</div>
              </div>
            ))}
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-4" data-aos="fade-up" data-aos-delay="700">
            <div
              className="h-full bg-gradient-to-r from-[#5E9EFF] to-[#FE02BF] rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="w-full flex flex-col md:flex-row md:justify-center gap-4" data-aos="fade-up" data-aos-delay="800">
            <Link href="/">
              <Button className="w-full h-[50px] p-3 text-white">
                <FaApple /> | <div className="flex-col items-start pr-3"><p className="text-xs">Get it on </p><h4>App Store</h4></div>
              </Button>
            </Link>
            <Link href="/">
              <Button className="w-full h-[50px] p-3 text-white">
                <IoLogoGooglePlaystore /> | <div className="flex-col items-start pr-3"><p className="text-xs text-white">Get it on </p><h4>Play Store</h4></div>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureAction;