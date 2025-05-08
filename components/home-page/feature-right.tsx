"use client";

import Image from "next/image";

import * as Craft from "@/components/craft";

import Placeholder from "@/public/feat1.svg";
import Frame from "@/public/frame.svg";
import Calendar from "@/public/calendar-tick.svg";
import Microphone from "@/public/microphone-2.svg";
import Sms from "@/public/sms-star.svg";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

const FeatureRight = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
    AOS.refresh(); 
  }, []);

  return (
    <Craft.Section className="bg-[url(/bg.png)] pb-0" data-aos="fade-in">
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12 md:items-center pb-0">
        <div className="hidden md:block">
          <div className="not-prose relative flex overflow-hidden" data-aos="zoom-in" data-aos-delay="600">
            <Image
              src={Placeholder}
              alt="placeholder"
              className="w-110 h-159"
            />
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col-reverse">
            <div className="not-prose relative flex overflow-hidden" data-aos="zoom-in" data-aos-delay="600">
              <Image
                src={Placeholder}
                alt="placeholder"
                className="w-110 h-159"
              />
            </div>
            <div className="flex flex-col gap-6 py-8 justify-center">
              <h3 className="!my-0 text-2xl font-bold" data-aos="fade-up" data-aos-delay="100">
                Book Sessions With Service Providers in Minutes
              </h3>
              <p className="font-light leading-[1.4] opacity-70" data-aos="fade-up" data-aos-delay="200">
                Schedule sessions with top coaches and providers around the world. Get personalized guidance to improve your technique, expand your range, and develop your unique style.
              </p>
              <div className="not-prose flex-col items-center gap-7">
                <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="300">
                  <Image src={Frame} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                  In-person and virtual sessions available
                </p>
                <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="400">
                  <Image src={Calendar} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                  Flexible scheduling to fit your routine
                </p>
                <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="500">
                  <Image src={Microphone} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                  Record sessions for later review and practice
                </p>
                <p className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="600">
                  <Image src={Sms} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                  Get personalized feedback and exercises
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:block hidden md:order-2">
          <div className="flex flex-col gap-6 py-8 justify-center">
            <h3 className="!my-0 text-2xl font-bold" data-aos="fade-up" data-aos-delay="100">
              Book Sessions With Service Providers in Minutes
            </h3>
            <p className="font-light leading-[1.4] opacity-70" data-aos="fade-up" data-aos-delay="200">
              Schedule sessions with top coaches and providers around the world. Get personalized guidance to improve your technique, expand your range, and develop your unique style.
            </p>
            <div className="not-prose flex-col items-center gap-7">
              <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="300">
                <Image src={Frame} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                In-person and virtual sessions available
              </p>
              <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="400">
                <Image src={Calendar} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                Flexible scheduling to fit your routine
              </p>
              <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="500">
                <Image src={Microphone} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                Record sessions for later review and practice
              </p>
              <p className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="600">
                <Image src={Sms} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                Get personalized feedback and exercises
              </p>
            </div>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureRight;