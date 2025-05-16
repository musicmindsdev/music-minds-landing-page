

import Balancer from "react-wrap-balancer";

import { Section, Container } from "@/components/craft";

import { JSX } from "react";
import Image from "next/image";
import Comfort from "@/public/Comfort.svg"
import True from "@/public/True.svg"
import Justice from "@/public/Justice.svg"
import Face from "@/public/Face.svg"





type FeatureText2 = {
  title: JSX.Element;
  description: JSX.Element;
  img: JSX.Element;
}

type FeatureText = {
  title: JSX.Element;
  description: JSX.Element;
  img: JSX.Element;
}

const featureText2: FeatureText2[] = [
  {
    title: <h3 className="font-semibold  text-black">Grit</h3>,
    description: <p className="text-xs w-[80%] line-clamp-3 text-black ">“I can&apos;t&apos;, “It&apos;s Impossible”. These words don&apos;t exist in our dictionaries. It doesn&apos;t matter what the task is, we never give up</p>,
    img: <Image src={Comfort} alt=""  className="w-50 h-50"/>,
  },
  {
    title: <h3 className="font-semibold text-black">Empathy</h3>,
    description: <p className="text-xs w-[80%] line-clamp-3 text-black">We put ourselves in people&apos;s shoes. There is no other way to truly understand how they feel and how to help them.</p>,
    img: <Image  src={True} alt="" className="w-50 h-50"/>,
  }
]


const featureText: FeatureText[] = [
  {
    title: <h3 className="font-semibold text-black">Candour</h3>,
    description: <p className="text-xs w-[80%] line-clamp-3 text-black">In all we do, honesty and openness come through. We empower our people to always speak up and be heard.</p>,
    img: <Image src={Justice} alt=""  className="w-50 h-50"/>,
  },
  {
    title: <h3 className="font-semibold text-black">No Ego</h3>,
    description: <p className="text-xs w-[80%] line-clamp-3 text-black">We prioritise getting the job done over our ego. Everyone is a DreamMaker, irrespective of their level in the organisation, and every voice matters.</p>,
    img: <Image  src={Face} alt="" className="w-50 h-50"/>,
  }
]





const Value = () => {
  return (
    <Section className="">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold ">
              <Balancer>
                Our <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">Values</span>
              </Balancer>
            </h1>
            <h4 className="text-sm font-light opacity-70  ">
              <Balancer>
                At MusicMinds, our core values guide the work we do to power the dreams of millions.
              </Balancer>
            </h4>
          </div>
          <div className="flex gap-[20px] justify-start">
            {featureText2.map(({title, description, img  }, index) => (
              <div key={index} className="w-[350px] flex flex-col items-end  p-5 pb-0 rounded-lg bg-gradient-to-r from-[#F2F1FF]  to-[#FFF0FD] ">
                <div>
                {title}
                {description}
                </div>
                <div className="">{img}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-[20px] justify-end">
            {featureText.map(({title, description, img  }, index) => (
              <div key={index} className="w-[350px] flex flex-col items-end  p-5 pb-0 rounded-lg bg-gradient-to-r from-[#F2F1FF]  to-[#FFF0FD]">
                <div>
                {title}
                {description}
                </div>
                <div className="">{img}</div>
              </div>
            ))}
          </div>
        

          {/* <div className="flex gap-[20px] justify-end items-start flex-row">
  <div className="w-[300px] border">

  </div>
  <div className="w-[300px] border">2</div>
</div> */}
          {/* className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4" */}
        </div>
      </Container>
    </Section>
  );
};

export default Value;
