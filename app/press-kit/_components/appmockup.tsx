import React from 'react';
import Image from 'next/image';
import Download1 from '@/components/svg/Download1';
import { useTranslation } from 'react-i18next';

type Mockup = {
  imgSrc: string;
  description: string;
  filename: string;
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

  const downloadImage = async (imgSrc: string, filename: string) => {
    try {
      // Fetch the image
      const response = await fetch(imgSrc);
      const blob = await response.blob();
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const mockups: Mockup[] = [
    {
      imgSrc: '/Splashscreen.png',
      description: t('heropr.mockup_splash'),
      filename: 'splash_screen.png'
    },
    {
      imgSrc: '/Booking.png',
      description: t('heropr.mockup_booking_list'),
      filename: 'booking_list.png'
    },
    {
      imgSrc: '/Provider.png',
      description: t('heropr.mockup_provider_profile'),
      filename: 'provider_profile.png'
    },
    {
      imgSrc: '/ProviderFeed.png',
      description: t('heropr.mockup_provider_feed'),
      filename: 'provider_feed.png'
    },
    {
      imgSrc: '/Reviews.png',
      description: t('heropr.mockup_provider_reviews'),
      filename: 'provider_reviews.png'
    },
    {
      imgSrc: '/BookingSuccess.png',
      description: t('heropr.mockup_booking_success'),
      filename: 'booking_success.png'
    },
    {
      imgSrc: '/UserReview.png',
      description: t('heropr.mockup_user_reviews'),
      filename: 'user_reviews.png'
    },
    {
      imgSrc: '/UserActivity.png',
      description: t('heropr.mockup_user_activity'),
      filename: 'user_activity.png'
    },
    {
      imgSrc: '/ProviderMusic.png',
      description: t('heropr.mockup_provider_music'),
      filename: 'provider_music.png'
    },
    {
      imgSrc: '/Userschedule.png',
      description: t('heropr.mockup_user_schedule'),
      filename: 'user_schedule.png'
    },
    {
      imgSrc: '/Profiledit.png',
      description: t('heropr.mockup_profile_edit'),
      filename: 'profile_edit.png'
    },
    {
      imgSrc: '/Providerschedule.png',
      description: t('heropr.mockup_provider_schedule'),
      filename: 'provider_schedule.png'
    },
    {
      imgSrc: '/PendingBooking.png',
      description: t('heropr.mockup_pending_booking'),
      filename: 'pending_booking.png'
    },
    {
      imgSrc: '/BookingForm.png',
      description: t('heropr.mockup_booking_form'),
      filename: 'booking_form.png'
    },
    {
      imgSrc: '/Postupload.png',
      description: t('heropr.mockup_post_upload'),
      filename: 'post_upload.png'
    },
    {
      imgSrc: '/Userpost.png',
      description: t('heropr.mockup_user_post'),
      filename: 'user_post.png'
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {mockups.map((item, index) => (
          <div key={index}>
            <div 
              className={`flex items-center justify-center rounded-2xl px-5 py-9 bg-gradient-to-r from-[#F2F1FF] to-[#FFF0FD] dark:bg-gradient-to-r dark:from-[#1E1A2F] dark:to-[#2A0E29]`}
            >
              <Image 
                src={item.imgSrc} 
                alt={item.description}
                width={50}
                height={250}
                className="w-auto h-34 object-contain"
                loading="lazy"
              />
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className='text-xs'>{item.description}</p>
              <button
                onClick={() => downloadImage(item.imgSrc, item.filename)}
                className="flex items-center justify-center p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={`${t('heropr.download')} ${item.description}`}
              >
                <Download1 className="h-5 w-5 cursor-pointer" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppMockupsContent;