
import Image from "next/image";

import * as Craft from "@/components/craft";

import Pic1 from "@/public/pic1.svg"
import Pic2 from "@/public/pic2.svg"
import { GoArrowDownRight } from "react-icons/go";
import Ceo from "@/public/Ellipse.svg";


const Story = () => {
  return (
    <Craft.Section>
      <Craft.Container className="flex flex-col ">
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 md:gap-8">
  <Image
    src={Pic1}
    alt="placeholder"
    className="w-full max-w-[60%]  h-auto"
    width={780}
  />
  <Image
    src={Pic2}
    alt="placeholder"
    className="w-full max-w-[40%]  h-auto"
    width={500}
  />
</div>
         
          <div className="grid items-stretch justify-between md:grid-cols-2 md:gap-12 mt-8">
           <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold flex gap-2 items-start justify-center">Our <span className="bg-gradient-to-r from-[#5E9EFF] via-[#BF5DFF] to-[#FE02BF] bg-clip-text text-transparent">Story</span> <GoArrowDownRight /> </h1>
           <div>
            <div className="w-[80%] text-justify flex flex-col gap-4"><span className="font-semibold">Our founder, Mike started MusicMinds because he wanted to make it easy for anyone to do what he does; connecting people, in this case connecting artist and service provider thereby bridging the gap to both getting access to talent and people who can harness that talent.</span>
            <span>He wanted to make sure that those who served and worked alongside during his time ad an industry veteran had an equal opportunity to access services an talent, enabling proper financial mobilization in the industry while also providing a  nuanced and accessible means for collaboration. This vision extended to helping artists ranging from musician, stage managers, college student, budding and aspiring artists, producers to savvy executives, and everyone in between save toward what matters the most to them from the comfort of their phone.</span>
            <span>Anyone in music looking to connect wit a large community of professionals, talents should definitely considering MusicMinds as it is the best option out there. The “First of it’s kind: some might say. The MusicMinds team is united around our core philosophy; united we stand, dived we fall.</span>
            <div className="flex gap-3 items-center">
            <Image src={Ceo} alt="" /> 
            <div>
                <h3 className="text-sm font-semibold">Mike Simorankir</h3>
                <p className="text-xs">Founder & CEO</p>
            </div>
            </div>
            <span className="font-semibold">“Our goal is simple, to build a better system that foster collaboration between actors within the music industry - with a product that is simple, more reliable, lower cost and transparent.”</span>
            </div>
           </div>
          </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Story;
