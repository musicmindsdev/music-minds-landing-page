"use client";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Stat1 from "@/public/stat1.svg";
import Stat2 from "@/public/stat2.svg";
import Stat3 from "@/public/stat3.svg";
import Stat4 from "@/public/stat4.svg";

const stats = [
  {
    img: (
      <Image
        src={Stat1}
        alt="Service Providers"
        width={60}
        height={60}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px]"
      />
    ),
    stat: <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">297K</h3>,
    statName: <p className="text-[11px] sm:text-xs md:text-sm">Service Providers</p>,
  },
  {
    img: (
      <Image
        src={Stat3}
        alt="Clients"
        width={60}
        height={60}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px]"
      />
    ),
    stat: <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">120K</h3>,
    statName: <p className="text-[11px] sm:text-xs md:text-sm">Clients</p>,
  },
  {
    img: (
      <Image
        src={Stat2}
        alt="Bookings Served"
        width={60}
        height={60}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px]"
      />
    ),
    stat: <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">200K</h3>,
    statName: <p className="text-[11px] sm:text-xs md:text-sm">Bookings served</p>,
  },
  {
    img: (
      <Image
        src={Stat4}
        alt="Processed Monthly"
        width={60}
        height={60}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px]"
      />
    ),
    stat: <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">$1.2B</h3>,
    statName: <p className="text-[11px] sm:text-xs md:text-sm">Processed monthly</p>,
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
      className="w-full h-[800px] bg-[url('/bg1.png')] bg-no-repeat bg-cover p-4 sm:p-6 md:p-8 pb-0"
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
            About Us
          </Button>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold w-[60%] text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Where Music{" "}
            <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              Meets
            </span>{" "}
            Mastery
          </h1>
          <p
            className="w-[45%] text-center line-clamp-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            We connect aspiring musicians with top professionals for coaching, bookings, and career
            growth. Discover, learn, and thrive in a vibrant community built for music lovers.
          </p>
          <div className="w-full" data-aos="fade-up" data-aos-delay="500">
            {/* Placeholder div, can be removed if not needed */}
          </div>
          <div
            className="
              w-full max-w-[98vw] sm:max-w-[90vw] md:max-w-[70vw]
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
              items-center justify-center
              backdrop-filter backdrop-blur-lg rounded-3xl
              p-2 sm:p-4 md:p-6
              gap-2 sm:gap-4 md:gap-6
              mx-auto
            "
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {stats.map(({ img, stat, statName }, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start"
                data-aos="fade-up"
                data-aos-delay={`${700 + index * 100}`} // Staggered animation for each stat
              >
                {img}
                <div className="text-center md:text-left">
                  {stat}
                  <div>{statName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;