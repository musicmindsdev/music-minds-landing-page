import Link from "next/link";
import Image from "next/image";

import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

import HeroImage from "@/public/hero1.png";

const Hero = () => {
  return (
    <Section className="bg-[url(/bg.png)] p-6 sm:p-8 pb-0">
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12 pb-0">
        <div className="flex flex-col items-start justify-center gap-6 py-8">
          <div className="flex flex-col text-left justify-center">
            <h1 className="text-7xl font-bold">Unlock Your </h1>
            <h1 className="text-7xl font-bold bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">Musical</h1>
            <h1 className="text-7xl font-bold">Potential</h1>
          </div>
          <p className="line-clamp-3 w-[60%] text-left">Connect with top vocal coaches, songwriters, and music producers. Book sessions, improve your skills, and share your journey with the music community</p>
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-4">
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
        </div>
        <div>
          <Image src={HeroImage} alt="Hero section image" width={600} height={400} />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;