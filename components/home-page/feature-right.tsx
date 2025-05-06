
import Image from "next/image";

import * as Craft from "@/components/craft";

import Placeholder from "@/public/feat1.svg";
import Frame from "@/public/frame.svg"
import Calendar from "@/public/calendar-tick.svg"
import Microphone from "@/public/microphone-2.svg"
import Sms from "@/public/sms-star.svg"

const FeatureRight = () => {
  return (
    <Craft.Section className="bg-[url(/bg.png)] pb-0">
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12 pb-0">
        <div className="not-prose relative flex overflow-hidden ">
          <Image
            src={Placeholder}
            alt="placeholder"
            className=" w-110 h-159"
          />
        </div>
        <div className="flex flex-col gap-6 py-8 justify-center ">
          <h3 className="!my-0 text-2xl font-bold">Book Sessions With Service Providers in Minutes </h3>
          <p className="font-light leading-[1.4] opacity-70">
          Schedule sessions with top coaches and providers around the world. Get personalized guidance to improve your technique, expand your range, and develop your unique style.</p>
          <div className="not-prose flex-col items-center gap-7">
          <p className="flex items-center gap-2 pb-2"><span><Image src={Frame} alt="" className=" rounded-full p-2 bg-[#EAE9FF]"/></span>In-person and virtual sessions available</p>
          <p className="flex items-center gap-2 pb-2"><span><Image src={Calendar} alt="" className=" rounded-full p-2 bg-[#EAE9FF]"/></span>Flexible scheduling to fit your routine</p>
          <p className="flex items-center gap-2 pb-2"><span><Image src={Microphone} alt="" className=" rounded-full p-2 bg-[#EAE9FF]"/></span>Record sessions for later review and practice</p>
          <p className="flex items-center gap-2"><span><Image src={Sms} alt="" className=" rounded-full p-2 bg-[#EAE9FF]"/></span>Get personalized feedback and exercises</p>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureRight;
