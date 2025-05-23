"use client"

import Image from "next/image";

import { Section, Container } from "@/components/craft";

import Placeholder from "@/public/feat.svg";
import Filter from "@/public/filter.svg";
import Verify from "@/public/verify.svg";
import Message from "@/public/message.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FeatureLeft = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50, 
    });
    AOS.refresh(); 
  }, []);

  return (
    <Section className="bg-[url(/bg.png)] pb-0" data-aos="fade-up">
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12 pb-0">
        <div className="flex flex-col gap-6 py-8 justify-center">
          <h3 className="!my-0 text-2xl font-bold" data-aos="fade-up" data-aos-delay="100">
            Find the Perfect Service Provider
          </h3>
          <p className="font-light leading-[1.4] opacity-70" data-aos="fade-up" data-aos-delay="200">
            Browse through profiles of top music coaches, read reviews from other students, and find the perfect match for your musical journey.
          </p>
          <div className="not-prose flex-col items-center gap-7">
            <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="300">
              <Image src={Filter} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
              Filter by music genre and expertise
            </p>
            <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="400">
              <Image src={Verify} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
              Read verified clients reviews
            </p>
            <p className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="500">
              <Image src={Message} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
              Message providers before booking
            </p>
          </div>
        </div>
        <div className="not-prose relative flex overflow-hidden rounded-lg" data-aos="fade-up" data-aos-delay="600">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="w-110 h-159"
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureLeft;