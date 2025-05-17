"use client";

import Image from "next/image";
import * as Craft from "@/components/craft";
import Pic1 from "@/public/pic1.svg";
import Pic2 from "@/public/pic2.svg";
import { GoArrowDownRight } from "react-icons/go";
import Ceo from "@/public/Ellipse.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import { useEffect } from "react";

const Story = () => {
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
    <Craft.Section
      data-aos="fade-in"
      className="w-full py-12 bg-white"
    >
      <Craft.Container className="flex flex-col">
        <div
          className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 md:gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Image
            src={Pic1}
            alt="Story Image 1"
            className="w-full max-w-[60%] h-auto"
            width={780}
          />
          <Image
            src={Pic2}
            alt="Story Image 2"
            className="w-full max-w-[40%] h-auto"
            width={500}
          />
        </div>

        <div
          className="grid items-stretch justify-between md:grid-cols-2 md:gap-12 mt-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold flex gap-2 items-start justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              Story
            </span>{" "}
            <GoArrowDownRight />
          </h1>
          <div
            className="w-[80%] text-justify flex flex-col gap-4"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <span
              className="font-semibold"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Our founder, Mike started MusicMinds because he wanted to make it easy for anyone to do
              what he does; connecting people, in this case connecting artist and service provider
              thereby bridging the gap to both getting access to talent and people who can harness
              that talent.
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="700"
            >
              He wanted to make sure that those who served and worked alongside during his time as an
              industry veteran had an equal opportunity to access services and talent, enabling proper
              financial mobilization in the industry while also providing a nuanced and accessible
              means for collaboration. This vision extended to helping artists ranging from musician,
              stage managers, college student, budding and aspiring artists, producers to savvy
              executives, and everyone in between save toward what matters the most to them from the
              comfort of their phone.
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Anyone in music looking to connect with a large community of professionals, talents
              should definitely consider MusicMinds as it is the best option out there. The “First of
              its kind: some might say. The MusicMinds team is united around our core philosophy;
              united we stand, divided we fall.
            </span>
            <div
              className="flex gap-3 items-center"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <Image src={Ceo} alt="CEO Image" />
              <div>
                <h3 className="text-sm font-semibold">Mike Simorankir</h3>
                <p className="text-xs">Founder & CEO</p>
              </div>
            </div>
            <span
              className="font-semibold"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              “Our goal is simple, to build a better system that fosters collaboration between actors
              within the music industry - with a product that is simple, more reliable, lower cost
              and transparent.”
            </span>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Story;