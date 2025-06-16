"use client";

import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { JSX } from "react";
import Image from "next/image";
import Comfort from "@/public/Comfort.svg";
import True from "@/public/True.svg";
import Justice from "@/public/Justice.svg";
import Face from "@/public/Face.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import { useEffect } from "react";

type FeatureText2 = {
  title: JSX.Element;
  description: JSX.Element;
  img: JSX.Element;
};

type FeatureText = {
  title: JSX.Element;
  description: JSX.Element;
  img: JSX.Element;
};

const featureText2: FeatureText2[] = [
  {
    title: <h3 className="font-semibold text-black">Empowerment over gatekeeping</h3>,
    description: (
      <p className="text-xs w-[80%] line-clamp-3 text-black">
        Artists should connect, promote, and earn — directly, fairly, and with full control.

      </p>
    ),
    img: <Image src={Comfort} alt="Grit Icon" className="w-50 h-50" />,
  },
  {
    title: <h3 className="font-semibold text-black">Diversity as foundation</h3>,
    description: (
      <p className="text-xs w-[80%] line-clamp-3 text-black">
       We work to amplify underrepresented voices across gender, identity, and culture.
      </p>
    ),
    img: <Image src={True} alt="Empathy Icon" className="w-50 h-50" />,
  },
];

const featureText: FeatureText[] = [
  {
    title: <h3 className="font-semibold text-black">Community before algorithms</h3>,
    description: (
      <p className="text-xs w-[80%] line-clamp-3 text-black">
       Real networks matter. Growth should be based on talent, effort, and engagement — not ad budgets or hype.
      </p>
    ),
    img: <Image src={Justice} alt="Candour Icon" className="w-50 h-50" />,
  },
  {
    title: <h3 className="font-semibold text-black">Open access to learning</h3>,
    description: (
      <p className="text-xs w-[80%] line-clamp-3 text-black">
        Music education should be practical, affordable, and flexible. We support both structured coaching and self-taught learning.
      </p>
    ),
    img: <Image src={Face} alt="No Ego Icon" className="w-50 h-50" />,
  },
];

const Value = () => {
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
          <div className="flex items-center justify-between">
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-bold"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Balancer>
                Our{" "}
                <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                  Values
                </span>
              </Balancer>
            </h1>
            <h4
              className="text-sm font-light opacity-70"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Balancer>
                At MusicMinds, our core values guide the work we do to power the dreams of millions.
              </Balancer>
            </h4>
          </div>
          <div
            className="flex gap-[20px] justify-start"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {featureText2.map(({ title, description, img }, index) => (
              <div
                key={index}
                className="w-[350px] flex flex-col items-end p-5 pb-0 rounded-lg bg-gradient-to-r from-[#F2F1FF] to-[#FFF0FD]"
                data-aos="fade-up"
                data-aos-delay={`${500 + index * 100}`} // Staggered animation for each card
              >
                <div>
                  {title}
                  {description}
                </div>
                <div className="">{img}</div>
              </div>
            ))}
          </div>
          <div
            className="flex gap-[20px] justify-end"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {featureText.map(({ title, description, img }, index) => (
              <div
                key={index}
                className="w-[350px] flex flex-col items-end p-5 pb-0 rounded-lg bg-gradient-to-r from-[#F2F1FF] to-[#FFF0FD]"
                data-aos="fade-up"
                data-aos-delay={`${500 + index * 100}`} // Staggered animation for each card
              >
                <div>
                  {title}
                  {description}
                </div>
                <div className="">{img}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Value;