"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import Image from "next/image";
import { JSX } from "react";
import Ceo from "@/public/marshall.jpg";
import Coo from "@/public/Bartosz.jpeg";
import Vp from "@/public/Aisha.jpeg";
import Cmo from "@/public/fidelis.jpeg";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import { useEffect } from "react";

type FeatureText = {
  img: JSX.Element;
  title: JSX.Element;
  description: string;
  href?: string;
};

const featureText: FeatureText[] = [
  {
    img: <Image src={Ceo} alt="CEO Image" className="mx-auto block w-50 h-50 rounded-full" />,
    title: (
      <div>
        <h3 className="text-sm">Marshall Odii        </h3>
        <p className="text-xs">Chief Technology  Officer          </p>
      </div>
    ),
    href: "/",
    description:
      "Marshall is a very experienced with a strong background in technology strategy, core product engineering principles, team leadership, and product innovation. Skilled at driving scalable solutions, overseeing development, and aligning tech initiatives with business goals.",
  },
  {
    img: <Image src={Coo} alt="COO Image" className="mx-auto block w-50 h-50 rounded-full " />,
    title: (
      <div>
        <h3 className="text-sm">Bartosz Jarocki        </h3>
        <p className="text-xs">Head of Music Partnership        </p>
      </div>
    ),
    href: "/",
    description:
      "He possess deep industry expertise and a strong network across labels, artists, and platforms. Proven track record in building strategic alliances, driving artist collaborations, and leading innovative campaigns that amplify brand and music synergy.",
  },
  {
    img: <Image src={Vp} alt="VP Image" className="mx-auto block rounded-full w-50 h-50" />,
    title: (
      <div>
        <h3 className="text-sm">Aisha Madarati</h3>
        <p className="text-xs">Artist Relations and Content Host</p>
      </div>
    ),
    href: "/",
    description:
      "Music and media professional with over 20 years of experience in social media, format development, community building, label management, and artist development. An On-camera host of own formats as well as organization and execution of content behind the scenes",
  },
  {
    img: <Image src={Cmo} alt="CMO Image" className="mx-auto block w-50 h-50 rounded-full" />,
    title: (
      <div>
        <h3 className="text-sm">Fidelis Victory</h3>
        <p className="text-xs">Development Coordinator</p>
      </div>
    ),
    href: "/",
    description:
      "Well Experienced project coordinator skilled in managing timelines, resources, and teams to deliver successful outcomes. Strong communicator and problem-solver with a proven track record of keeping projects on track and within scope.",
  },
];

const Feature = () => {
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
      className="border-b bg-[#F4F3FF] dark:bg-[#1E1B2B]"
      data-aos="fade-in"
    >
      <Container className="not-prose">
        <div className="flex flex-col items-center gap-6">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold w-[60%] line-clamp-2 text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Balancer>
              Our{" "}
              <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">
                team
              </span>{" "}
              has over 100 years of combined experience!
            </Balancer>
          </h1>
          <h4
            className="text-sm line-clamp-2 w-[50%] text-center font-light opacity-70"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Balancer>
              Our team brings experience, innovation and creativity to the music marketing experience
              to ensure your plans are in good hands.
            </Balancer>
          </h4>

          <div
            className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {featureText.map(({ img, title, description, href }, index) => (
              <Link
                href={`${href}`}
                className="flex flex-col justify-between items-center gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 backdrop-filter backdrop-blur-lg bg-card border-card border-opacity-20 shadow-lg"
                key={index}
                data-aos="fade-right"
                data-aos-delay={`${500 + index * 100}`} // Staggered animation for each card
              >
                <div className="grid gap-4 items-center justify-center">
                  {img}
                  <h4 className="text-xl text-primary text-center">{title}</h4>
                  <hr />
                  <p className="text-base opacity-75 text-center">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;