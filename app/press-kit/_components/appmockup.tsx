import React, { JSX } from 'react';
import Download1 from '@/components/svg/Download1';
import Splash from '@/components/svg/Splash';
import Booking from '@/components/svg/Booking';
import Provider from '@/components/svg/Provider';
import Providerfeed from '@/components/svg/Providerfeed';
import Reviews from '@/components/svg/Reviews';
import Success from '@/components/svg/Success';
import User from '@/components/svg/User';
import Useractivity from '@/components/svg/Useractivity';
import Userschedule from '@/components/svg/Userschedule';
import Profiledit from '@/components/svg/Profiledit';
import Providerschedule from '@/components/svg/Providerschedule';
import Pending from '@/components/svg/Pending';
import Bookingform from '@/components/svg/Bookingform';
import Postupload from '@/components/svg/Postupload';
import { useTranslation } from 'react-i18next';
import Providermusic from '@/components/svg/ProviderMusic';

type Mockups = {
  img: JSX.Element;
  description: string;
}

interface AppMockupsContentProps {
  locale: string;
}

const AppMockupsContent: React.FC<AppMockupsContentProps> = ({ locale }) => {
  const { t } = useTranslation('common');

  console.log(`AppMockupsContent: locale=${locale}, t is function: ${typeof t === 'function'}`);

  if (typeof t !== 'function') {
    console.warn(`AppMockupsContent: t is not a function for locale ${locale}`);
    return null;
  }

  const mockup: Mockups[] = [
    {
      img: <Splash />,
      description: t('heropr.mockup_splash')
    },
    {
      img: <Booking />,
      description: t('heropr.mockup_booking_list')
    },
    {
      img: <Provider />,
      description: t('heropr.mockup_provider_profile')
    },
    {
      img: <Providerfeed />,
      description: t('heropr.mockup_provider_feed')
    },
    {
      img: <Reviews />,
      description: t('heropr.mockup_provider_reviews')
    },
    {
      img: <Success />,
      description: t('heropr.mockup_booking_success')
    },
    {
      img: <User />,
      description: t('heropr.mockup_user_reviews')
    },
    {
      img: <Useractivity />,
      description: t('heropr.mockup_user_activity')
    },
    {
      img: <Providermusic />,
      description: t('heropr.mockup_provider_music')
    },
    {
      img: <Userschedule />,
      description: t('heropr.mockup_user_schedule')
    },
    {
      img: <Profiledit />,
      description: t('heropr.mockup_profile_edit')
    },
    {
      img: <Providerschedule />,
      description: t('heropr.mockup_provider_schedule')
    },
    {
      img: <Pending />,
      description: t('heropr.mockup_pending_booking')
    },
    {
      img: <Bookingform />,
      description: t('heropr.mockup_booking_form')
    },
    {
      img: <Postupload />,
      description: t('heropr.mockup_post_upload')
    },
    {
      img: <Postupload />,
      description: t('heropr.mockup_user_post')
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {mockup.map((item, index) => (
          <div key={index}>
            <div className={`flex items-center justify-center space-x-4 rounded-2xl px-5 py-9 bg-gradient-to-r from-[#F2F1FF] to-[#FFF0FD] dark:bg-gradient-to-r dark:from-[#1E1A2F] dark:to-[#2A0E29]`}>
              {item.img}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className='text-xs'>{item.description}</p>
              <Download1 className="h-5 w-5 cursor-pointer" aria-label={`${t('heropr.download')} ${item.description}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppMockupsContent;