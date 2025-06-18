"use client";

import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { JSX, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import Users from "@/public/users.png";
import Image from "next/image";
import Providers from "@/components/svg/Providers";
import Book from "@/components/svg/Book";
import Iphone11 from  "@/public/iphone.png"
import Iphone21 from  "@/public/iphone21.png"
import Iphone33 from  "@/public/iphone33.png"
import Build from "@/components/svg/Build";



type Unlock = {
    icon: JSX.Element;
    title: string;
    description: string;
    img: JSX.Element;
}

const unlock:Unlock[] = [
    {
        icon: <Providers />,
        title: "Find Providers",
        description: "Discover top music service pros, coaches, producers, and event organizers—tailored to your needs.",
        img:<Image src={Iphone11} alt=""/>
    },
    {
        icon: <Book/>,
        title: "Book Seamlessly",
        description: "Schedule services instantly with secure, flexible booking options.",
        img:<Image src={Iphone21} alt=""/>
    },
    {
        icon: <Build />,
        title: "Build Networks",
        description: "Connect with a vibrant community of clients and providers for lasting opportunities.",
        img:<Image src={Iphone33} alt=""/>
    },
]



const Support = () => {
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
      className="py-12 bg-card"
      data-aos="fade-in"
    >
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3
            className="text-4xl align-start font-bold w-[48%] "
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Balancer>
            What you&apos;ll unlock with {" "}
              <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
              MusicMinds
              </span>
            </Balancer>
          </h3>

          <div
            className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* {featureText.map(({ title, description, href, buttons, cta }, index) => (
              <Link
                href={`${href}`}
                className="flex flex-col justify-between gap-6 rounded-lg p-6 transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg shadow-lg"
                key={index}
                data-aos="fade-right"
                data-aos-delay={`${400 + index * 100}`} // Staggered animation for each card
              >
                <div className="grid gap-4">
                  <h4 className="text-xl text-primary font-semibold">{title}</h4>
                  <p className="text-base opacity-75">{description}</p>
                </div>
                {buttons}
                {cta && (
                  <div className="flex h-fit items-center text-sm font-semibold text-[#5243FE]">
                    <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Link>
            ))} */}
              {unlock.map(({ icon, title, description, img }, index) => (
              <div
                className="flex flex-col gap-3 rounded-lg pb-0 p-4 snap-center min-w-[300px] md:min-w-[calc(33.333%-1.5rem)] transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg shadow-lg"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
              >
                <div className="flex items-center gap-3">
                {icon}
                <h2 className="text-2lg  text-black font-semibold">{title}</h2>
                </div>
                <p className="opacity-75 text-sm line-clamp-3 text-black">{description}</p>
                <div className="flex justify-end pb-0">{img}</div>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col gap-4 items-center  justify-center">
          <Image src={Users} alt={""} className=""/>
            <p className="text-center italic ">Over <span className="text-[#5243FE]">578</span> users already waiting to connect!</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Support;
