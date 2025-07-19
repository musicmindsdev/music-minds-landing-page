import React, { JSX } from 'react';
import Download1 from '@/components/svg/Download1';
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import Ceo from "@/public/marshall.jpg";
import Coo from "@/public/Bartek.jpeg";
import Vp from "@/public/Aisha.jpeg";
import Cmo from "@/public/fidelis1.jpeg";

type Team = {
  img: JSX.Element;
  name: string;
  role: string;
}

interface LogoBrandingContentProps {
  locale: string;
}

const TeamsPhotoContent: React.FC<LogoBrandingContentProps> = ({ locale }) => {
  const { t } = useTranslation('common');

  console.log(`TeamsPhotoContent: locale=${locale}, t is function: ${typeof t === 'function'}`);

  if (typeof t !== 'function') {
    console.warn(`TeamsPhotoContent: t is not a function for locale ${locale}`);
    return null;
  }

  const team: Team[] = [
    {
      img: <Image  src={Ceo} alt=''className='w-60 h-60 rounded-2xl'/>,
      name: t("feature1.ceo_name"),
      role: t("feature1.ceo_role"),
    },
    {
      img: <Image  src={Coo} alt=''className='w-60 h-60 rounded-2xl'/>,
      name: t("feature1.coo_name"),
      role: t("feature1.coo_role"),
    },
    {
      img: <Image src={Vp} alt='' className='w-60 h-60 rounded-2xl'/>,
      name: t("feature1.vp_name"),
      role: t("feature1.vp_role"),
    },
    {
      img: <Image src={Cmo} alt='' className='w-60 h-60 rounded-2xl'/>,
      name: t("feature1.cmo_name"),
      role: t("feature1.cmo_role"),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-sm font-semibold mb-3">{t('heropr.logo_variants_section')}</h3>
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
              <Download1 className="h-5 w-5 cursor-pointer" aria-label={`${t('heropr.download')} ${item.role}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPhotoContent;