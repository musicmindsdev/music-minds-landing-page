import React, { JSX } from 'react';
import Download1 from '@/components/svg/Download1';
import Logo from "@/public/Musicmindlogo.svg";
import Image from "next/image";
import Logo1 from '@/components/svg/Logo';
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
import { useTranslation } from 'react-i18next';

type LogoVariants = {
  logo: JSX.Element;
  variant: string;
  bg: string;
}

interface LogoBrandingContentProps {
  locale: string;
}

const LogoBrandingContent: React.FC<LogoBrandingContentProps> = ({ locale }) => {
  const { t } = useTranslation('common');

  console.log(`LogoBrandingContent: locale=${locale}, t is function: ${typeof t === 'function'}`);

  if (typeof t !== 'function') {
    console.warn(`LogoBrandingContent: t is not a function for locale ${locale}`);
    return null;
  }

  const logovariant: LogoVariants[] = [
    {
      logo: <Logovariant />,
      variant: t('heropr.logo_variant_primary'),
      bg: "bg-[#5243FE]"
    },
    {
      logo: <Logovariant />,
      variant: t('heropr.logo_variant_secondary'),
      bg: "bg-[#FE02BF]"
    },
    {
      logo: <Logovariant />,
      variant: t('heropr.logo_variant_tertiary'),
      bg: "bg-gradient-to-r from-[#0065FF] to-[#952BDA] "
    },
    {
      logo: <Logovariant1 />,
      variant: t('heropr.logo_variant_complimentary'),
      bg: "bg-[#F8F6FF]"
    },
    {
      logo: <Logovariant2 />,
      variant: t('heropr.logo_variant_primary'),
      bg: "bg-[#F2F1FF]"
    },
    {
      logo: <Logovariant3 />,
      variant: t('heropr.logo_variant_secondary'),
      bg: "bg-[#FFE6F9]"
    },
    {
      logo: <Logovariant4 />,
      variant: t('heropr.logo_variant_tertiary'),
      bg: "bg-[#E9F2FF]"
    },
    {
      logo: <Logovariant5 />,
      variant: t('heropr.logo_variant_complimentary'),
      bg: "bg-[#F8F6FF]"
    }, 
    {
      logo: <Logovariant6 />,
      variant: t('heropr.logo_variant_primary'),
      bg: "bg-[#5243FE]"
    },
    {
      logo: <Logovariant6 />,
      variant: t('heropr.logo_variant_secondary'),
      bg: "bg-[#FE02BF]"
    },
    {
      logo: <Logovariant6 />,
      variant: t('heropr.logo_variant_tertiary'),
      bg: "bg-gradient-to-r from-[#0065FF] to-[#952BDA]"
    },
    {
      logo: <Logovariant7 />,
      variant: t('heropr.logo_variant_complimentary'),
      bg: "bg-[#F8F6FF]"
    },
    {
      logo: <Logovariant8 />,
      variant: t('heropr.logo_variant_primary'),
      bg: "bg-[#F2F1FF]"
    },
    {
      logo: <Logovariant9 />,
      variant: t('heropr.logo_variant_secondary'),
      bg: "bg-[#FFE6F9]"
    },
    {
      logo: <Logovariant01 />,
      variant: t('heropr.logo_variant_tertiary'),
      bg: "bg-[#E9F2FF]"
    },
    {
      logo: <Logovariant02 />,
      variant: t('heropr.logo_variant_complimentary'),
      bg: "bg-[#F8F6FF]"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-sm font-semibold mb-3">{t('heropr.logo_section')}</h2>
      <div className="py-4 rounded-lg mb-6 flex justify-between">
        <div className="flex items-center justify-center space-x-4 w-[35%] bg-[#EDE3FF] p-5 rounded-2xl">
          <Logo1 />
        </div>
        <div className="flex items-center justify-center space-x-4 w-[60%] bg-[#EDE3FF] p-5 rounded-2xl">
          <Image src={Logo} className="w-15 h-15" alt={t('heropr.logo_alt')} />
        </div>
      </div>
      <h3 className="text-sm font-semibold mb-3">{t('heropr.logo_variants_section')}</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {logovariant.map((item, index) => (
          <div key={index}>
            <div className={`flex items-center justify-center space-x-4 rounded-2xl px-5 py-9 ${item.bg}`}>
              {item.logo}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className='text-xs'>{item.variant}</p>
              <Download1 className="h-5 w-5 cursor-pointer" aria-label={`${t('heropr.download')} ${item.variant}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-3">{t('heropr.logo_usage_guidelines')}</h3>
        <ul className="list-outside space-y-3 pl-5 text-xs marker:text-lg marker:text-[#5243FE] marker:content-['■']">
          <li>{t('heropr.logo_guideline_1')}</li>
          <li>{t('heropr.logo_guideline_2')}</li>
          <li>{t('heropr.logo_guideline_3')}</li>
          <li>{t('heropr.logo_guideline_4')}</li>
          <li>{t('heropr.logo_guideline_5')}</li>
          <li>{t('heropr.logo_guideline_6')}</li>
          <li>{t('heropr.logo_guideline_7')}</li>
          <li>{t('heropr.logo_guideline_8')}</li>
        </ul>
      </div>
    </div>
  );
};

export default LogoBrandingContent;