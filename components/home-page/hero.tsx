"use client";

import Link from "next/link";
import Image from "next/image";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import HeroImage from "@/public/hero1.png";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    console.log("Initializing AOS");
    AOS.init({
      duration: 1000,
      offset: 0, // Ensure animations trigger immediately
      startEvent: "DOMContentLoaded", // Trigger animations after DOM is fully loaded
      once: false, // Allow animations to replay on scroll
      mirror: true, // Replay animations when scrolling back up
    });

    // Force refresh after a short delay to ensure DOM is ready
    setTimeout(() => {
      AOS.refresh();
      console.log("AOS refreshed after delay");
    }, 100);

    return () => {
      AOS.refreshHard();
      console.log("AOS refreshed hard on cleanup");
    };
  }, []);

  return (
    <Section className="bg-[url(/bg.png)] p-4 sm:p-6 md:p-8 pb-0" data-aos="fade-in">
      <Container className="grid items-stretch gap-6 md:grid-cols-2 md:gap-12 pb-0">
        <div className="flex flex-col items-start justify-center gap-4 py-4 sm:gap-6 sm:py-6">
          <div className="flex flex-col text-left justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold" data-aos="fade-up" data-aos-delay="100">
              Unlock Your
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent" data-aos="fade-up" data-aos-delay="200">
              Musical
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold" data-aos="fade-up" data-aos-delay="300">
              Potential
            </h1>
          </div>
          <p className="text-left w-full sm:w-[70%] md:w-[80%] line-clamp-3" data-aos="fade-up" data-aos-delay="400">
            Connect with top vocal coaches, songwriters, and music producers. Book sessions, improve your skills, and share your journey with the music community
          </p>
          <div className="w-full" data-aos="fade-up" data-aos-delay="500">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/">
                <Button className="w-full h-[50px] p-3 text-white flex items-center justify-center">
                  <FaApple /> | <div className="flex-col items-start pl-2"><p className="text-xs">Get it on </p><h4>App Store</h4></div>
                </Button>
              </Link>
              <Link href="/">
                <Button className="w-full h-[50px] p-3 text-white flex items-center justify-center">
                  <IoLogoGooglePlaystore /> | <div className="flex-col items-start pl-2"><p className="text-xs text-white">Get it on </p><h4>Play Store</h4></div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end" data-aos="zoom-in" data-aos-delay="600">
          <Image src={HeroImage} alt="Hero section image" width={600} height={400} className="w-full max-w-[600px] h-auto" />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;