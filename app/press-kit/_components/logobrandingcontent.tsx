'use client';

import React, { JSX } from 'react';
import Download1 from '@/components/svg/Download1';
import Logo from "@/public/Musicmindlogo.svg";
import Image from "next/image";
import Logo1 from '@/components/svg/Logo'
import Logovariant1 from '@/components/svg/Logovariant1';
import Logovariant2 from '@/components/svg/Logovariant2';
import Logovariant3 from '@/components/svg/Logovariant3';
import Logovariant4 from '@/components/svg/Logovariant4';
import Logovariant5 from '@/components/svg/Logovariant5';
import Logovariant6 from '@/components/svg/Logovariant6';
import Logovariant7 from '@/components/svg/Logovariant7';
import Logovariant8 from '@/components/svg/Logovariant8';
import Logovariant9 from '@/components/svg/Logovariant9';
import Logovariant01 from '@/components/svg/Logovariant01';
import Logovariant02 from '@/components/svg/Logovariant02';
import Logovariant from '@/components/svg/Logovariant';


type LogoVariants = {
  logo: JSX.Element;
  variant: string;
  bg: string;
}


const LogoBrandingContent: React.FC = () => {
  const logovariant: LogoVariants[] = [
    {
      logo: <Logovariant />,
      variant: "Primary Logo",
      bg: "bg-[#5243FE]"
    },
    {
      logo: <Logovariant />,
      variant: "Secondary Logo",
      bg: "bg-[#FE02BF]"
    },
    {
      logo: <Logovariant />,
      variant: "Tetiary Logo",
      bg: "bg-gradient-to-r from-[#0065FF] to-[#952BDA] "
    },
    {
      logo: <Logovariant1 />,
      variant: "Complimentary Logo",
      bg: "bg-[#F8F6FF]"
    },
    {
      logo: <Logovariant2 />,
      variant: "Primary Logo",
      bg: "bg-[#F2F1FF]"
    },
    {
      logo: <Logovariant3 />,
      variant: "Secondary Logo",
      bg: "bg-[#FFE6F9]"
    },
    {
      logo: <Logovariant4 />,
      variant: "Tetiary Logo",
      bg: "bg-[#E9F2FF]"
    },
    {
      logo: <Logovariant5 />,
      variant: "Complimentary Logo",
      bg: "bg-[#F8F6FF]"
    }, {
      logo: <Logovariant6 />,
      variant: "Primary Logo",
      bg: "bg-[#5243FE]"
    },
    {
      logo: <Logovariant6 />,
      variant: "Secondary Logo",
      bg: "bg-[#FE02BF]"
    },
    {
      logo: <Logovariant6 />,
      variant: "Tetiary Logo",
      bg: "bg-gradient-to-r from-[#0065FF] to-[#952BDA]"
    },
    {
      logo: <Logovariant7 />,
      variant: "Complimentary Logo",
      bg: "bg-[#F8F6FF]"
    },
    {
      logo: <Logovariant8 />,
      variant: "Primary Logo",
      bg: "bg-[#F2F1FF]"
    },
    {
      logo: <Logovariant9 />,
      variant: "Secondary Logo",
      bg: "bg-[#FFE6F9]"
    },
    {
      logo: <Logovariant01 />,
      variant: "Tetiary Logo",
      bg: "bg-[#E9F2FF]"
    },
    {
      logo: <Logovariant02 />,
      variant: "Complimentary Logo",
      bg: "bg-[#F8F6FF]"
    },
  ]


  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-sm font-semibold mb-3">Logo</h2>
      <div className=" py-4 rounded-lg mb-6 flex justify-between">
        <div className="flex items-center justify-center space-x-4 w-[35%] bg-[#EDE3FF] p-5 rounded-2xl">
          <Logo1 />
        </div>
        <div className="flex items-center justify-center space-x-4 w-[60%] bg-[#EDE3FF] p-5 rounded-2xl">
          <Image src={Logo} className="w-15 h-15" alt="" />
        </div>
      </div>
      <h3 className="text-sm font-semibold mb-3">Logo Variants</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {logovariant.map((item, index) => (
          <div key={index}> {/* Use index as a unique key */}
            <div className={`flex items-center justify-center space-x-4 rounded-2xl px-5 py-9 ${item.bg}`}>
              {item.logo}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className='text-xs'>{item.variant}</p>
              <Download1 className="h-5 w-5 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-3 ">There&apos;s the right way to use the assets</h3>
        <ul className="list-outside space-y-3 pl-5 text-gray-700 text-xs marker:text-lg marker:text-[#5243FE] marker:content-['■']">
          <li>The length of the Music Minds logo is precisely four times (4X) that of the icon.</li>
          <li>The length of the logo is equal to the height, maintaining a consistent proportion.</li>
          <li>A one-time (1X) border using the icon as a unit, is uniformly applied to the logo in all placements.</li>
          <li>The spacing between the logo mark and the Monotype text is fixed at 1/4th (Y) of the width of the logo mark.</li>
          <li>The logo mark should not be relocated or repositioned under any circumstances.</li>
          <li>Avoid stretching or distorting the font in the logo to maintain its original integrity.</li>
          <li>The window shape of the logo mark must not be altered; should remain consistent.</li>
          <li>Avoid incorporating additional effects such as shadows or glow into the logo for a clean and consistent visual presentation.</li>
        </ul>
      </div>
    </div>
  );
};

export default LogoBrandingContent;