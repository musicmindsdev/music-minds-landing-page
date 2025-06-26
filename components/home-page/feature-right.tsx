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
import { useTranslation } from "react-i18next";

const FeatureRight = ({ locale }: { locale: string }) => {
  const { t } = useTranslation("common");
  console.log(`Hero locale: ${locale}, t is function: ${typeof t === "function"}`);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
    AOS.refresh();
  }, []);

  if (typeof t !== "function") {
    console.warn(`Hero: t is not a function for locale ${locale}`);
    return null;
  }

  return (
    <Craft.Section className="bg-[url(/bg.png)] pb-0" data-aos="fade-in">
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12 md:items-center pb-0">
        <div className="hidden md:block">
          <div className="not-prose relative flex overflow-hidden" data-aos="zoom-in" data-aos-delay="600">
            <Image src={Placeholder} alt="placeholder" className="w-110 h-159" />
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex flex-col-reverse">
            <div className="not-prose relative flex overflow-hidden" data-aos="zoom-in" data-aos-delay="600">
              <Image src={Placeholder} alt="placeholder" className="w-110 h-159" />
            </div>
            <div className="flex flex-col gap-6 py-8 justify-center">
              <h3 className="!my-0 text-2xl font-bold" data-aos="fade-up" data-aos-delay="100">
                {t("feature_right.book_sessions")}
              </h3>
              <p className="font-light leading-[1.4] opacity-70" data-aos="fade-up" data-aos-delay="200">
                {t("feature_right.book_sessions_description")}
              </p>
              <div className="not-prose flex-col items-center gap-7">
                <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="300">
                  <Image src={Frame} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                  {t("feature_right.in_person_virtual")}
                </p>
                <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="400">
                  <Image src={Calendar} alt="" className="round
ed-full p-1 bg-[#EAE9FF]" />
                  {t("feature_right.flexible_scheduling")}
                </p>
                <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="500">
                  <Image src={Microphone} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                  {t("feature_right.record_sessions")}
                </p>
                <p className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="600">
                  <Image src={Sms} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                  {t("feature_right.personalized_feedback")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:block hidden md:order-2">
          <div className="flex flex-col gap-6 py-8 justify-center">
            <h3 className="!my-0 text-2xl font-bold" data-aos="fade-up" data-aos-delay="100">
              {t("feature_right.book_sessions")}
            </h3>
            <p className="font-light leading-[1.4] opacity-70" data-aos="fade-up" data-aos-delay="200">
              {t("feature_right.book_sessions_description")}
            </p>
            <div className="not-prose flex-col items-center gap-7">
              <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="300">
                <Image src={Frame} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                {t("feature_right.in_person_virtual")}
              </p>
              <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="400">
                <Image src={Calendar} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                {t("feature_right.flexible_scheduling")}
              </p>
              <p className="flex items-center gap-2 pb-2" data-aos="fade-up" data-aos-delay="500">
                <Image src={Microphone} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                {t("feature_right.record_sessions")}
              </p>
              <p className="flex items-center gap-2" data-aos="fade-up" data-aos-delay="600">
                <Image src={Sms} alt="" className="rounded-full p-1 bg-[#EAE9FF]" />
                {t("feature_right.personalized_feedback")}
              </p>
            </div>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureRight;