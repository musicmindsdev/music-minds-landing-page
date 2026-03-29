import React, { JSX } from 'react';
import Download1 from '@/components/svg/Download1';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import Ceo from "@/public/marshall.jpg";
import Coo from "@/public/Bartek.jpeg";
import Vp from "@/public/Aisha.jpeg";
import Cmo from "@/public/fidelis1.jpeg";

type Team = {
  img: JSX.Element;
  name: string;
  role: string;
  imageKey: string;
  fileName: string;
}

const TeamsPhotoContent: React.FC = () => {
  const t = useTranslations();

  const downloadImage = (imageKey: string, fileName: string) => {
    const downloadUrl = `/api/download-image?image=${imageKey}&filename=${encodeURIComponent(fileName)}`;
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const team: Team[] = [
    {
      img: <Image src={Ceo} alt='' className='w-60 h-60 rounded-2xl'/>,
      name: t("feature1.ceo_name"),
      role: t("feature1.ceo_role"),
      imageKey: 'ceo',
      fileName: 'CEO_Marshall.jpg'
    },
    {
      img: <Image src={Coo} alt='' className='w-60 h-60 rounded-2xl'/>,
      name: t("feature1.coo_name"),
      role: t("feature1.coo_role"),
      imageKey: 'coo',
      fileName: 'COO_Bartek.jpg'
    },
    {
      img: <Image src={Vp} alt='' className='w-60 h-60 rounded-2xl'/>,
      name: t("feature1.vp_name"),
      role: t("feature1.vp_role"),
      imageKey: 'vp',
      fileName: 'VP_Aisha.jpg'
    },
    {
      img: <Image src={Cmo} alt='' className='w-60 h-60 rounded-2xl'/>,
      name: t("feature1.cmo_name"),
      role: t("feature1.cmo_role"),
      imageKey: 'cmo',
      fileName: 'CMO_Fidelis.jpg'
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {team.map((item, index) => (
          <div key={index}>
            <div className={`flex items-center justify-center space-x-2 rounded-2xl px-3 py-9 `}>
              {item.img}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className='flex flex-col'>
                <h3>{item.name}</h3>
                <p className='text-xs text-[#474747]'>{item.role}</p>
              </div>
              <button onClick={() => downloadImage(item.imageKey, item.fileName)} className='p-0'>
              <Download1 
                className="h-5 w-5 cursor-pointer hover:opacity-70 transition-opacity" 
                aria-label={`${t('heropr.download')} ${item.role}`}
                onClick={() => downloadImage(item.imageKey, item.fileName)}
              />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPhotoContent;