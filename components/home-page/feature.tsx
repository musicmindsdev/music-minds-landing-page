
import Link from "next/link";

import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/craft";

import { Coins, ArrowRight } from "lucide-react";
import { JSX } from "react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <img src='/music.svg' className=" rounded-full p-3 bg-[#EAE9FF]"/>,
    title: "Expert Service Providers",
    href: "/",
    description:
      "Connect with professional service providers across various areas in music ranging from songwriters to producers for personalized sessions tailored to you.",
   
  },
  {
    icon: <img src="/calendar.svg" className=" rounded-full p-3 bg-[#EAE9FF]" />,
    title: "Easy Scheduling",
    href: "/",
    description:
      "Book and manage your sessions with service providers using our intuitive scheduling system. No more back-and-forth emails.",
  
  },
  {
    icon: <img src="/play.svg" className=" rounded-full p-3 bg-[#EAE9FF]"/>,
    title: "Progress Tracking",
    href: "/",
    description:
      "Record your sessions, track your progress, and share your improvements with friends, coaches and the community.",
    
  },
  {
    icon: <img src="/message-text.svg" className=" rounded-full p-3 bg-[#EAE9FF]"/>,
    title: "Community Support",
    href: "/",
    description:
      "Connect with fellow musicians, share experiences, and get inspiration from a supportive community.",
   
  },
];

const Feature = () => {
  return (
    <Section className="bg-white w-[100%]">
      <Container className=" flex-col ">
      <div className="flex-col text-center pb-7">
          <h3>TRUSTED BY ARTISTS WORLDWIDE</h3>
          <div className="flex items-center justify-center gap-7 p-4 ">
            <img src="/image46.png" alt="" className="filter grayscale "/>
            <img src="/image48.png" className="filter grayscale"/>
            <img src="/image49.png" className="filter grayscale"/>
            <img src="/image47.png" className="filter grayscale"/>
          </div>
        </div>
        <div></div>
        <div className="flex flex-col gap-6 pt-7">
          <h3 className="text-4xl bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent font-bold text-center">
            <Balancer>
              Elevate your Musical Journey
            </Balancer>
          </h3>
          <p className="text-sm text-center line-clamp-2 font-light opacity-70">
            <Balancer>
            Music Minds provides all the tools you need to grow your musical talents with expert guidance.
            </Balancer>
          </p>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4 ">
            {featureText.map(
              ({ icon, title, description, href }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 shadow-lg"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className=" text-primary font-semibold">{title}</h4>
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
