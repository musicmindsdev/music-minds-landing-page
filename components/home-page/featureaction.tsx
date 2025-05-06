
import React, { JSX } from "react";

import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

import { Button } from "../ui/button";
import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Image from "next/image";
import Iphone1 from "@/public/iphone1.png"
import Iphone2 from "@/public/iphone2.png"
import Iphone3 from "@/public/iphone3.png"

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
      img: <Image src={Iphone1} className="w-42 h-45" alt={""}/>
  },
  {
    icon: <p className="text-2xl font-bold bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">02</p>,
    title: "Find Your Service Provider",
    description:
      "Browse through verified coaches and musicians, filter by genre, location, and expertise.",
      img: <Image src={Iphone2} className="w-42 h-45" alt={""}/>
  },
  {
    icon: <p className="text-2xl font-bold bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">03</p>,
    title: "Book Sessions",
    description:
      "Schedule sessions with your favorite providers at times that work for you.",
      img: <Image src={Iphone3} className="w-42 h-45" alt={""}/>
  },
];

const FeatureAction = () => {
  return (
    <Section className="">
      <Container className="not-prose ">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent font-bold text-center">
            <Balancer>
            How Music Minds Works
            </Balancer>
          </h3>
          <h4 className="text-sm font-light opacity-70 text-center">
            <Balancer>
            A simple process to connect you with the musical guidance you need.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description,img }, index) => (
              <div className="flex flex-col gap-3 bg-gradient-to-r from-[#F2F1FF]  to-[#FFF0FD] rounded-lg pb-0 p-4" key={index}>
                {icon}
                <h4 className="text-2lg text-primary font-semibold">{title}</h4>
                <p className=" opacity-75 text-sm">{description}</p>
               <div className="flex justify-end">  {img} </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 ">
       <Link href='/'> <Button className=" w-full h-[50px] p-3 text-white "><FaApple/> | <div className="flex-col items-start pr-3"><p className="text-xs ">Get it on </p> <h4>App Store</h4></div></Button></Link>
       <Link href='/'> <Button className=" w-full h-[50px] p-3 text-white"><IoLogoGooglePlaystore/>| <div className="flex-col items-start pr-3"><p className="text-xs text-white">Get it on </p> <h4>Play Store</h4></div></Button></Link>
       </div> 
        </div>
      </Container>
    </Section>
  );
};

export default FeatureAction;
