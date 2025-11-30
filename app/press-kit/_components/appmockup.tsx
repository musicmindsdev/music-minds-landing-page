import React, { JSX, useRef } from 'react';
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
  filename: string;
}

interface AppMockupsContentProps {
  locale: string;
}

const AppMockupsContent: React.FC<AppMockupsContentProps> = ({ locale }) => {
  const { t } = useTranslation('common');
  const svgRefs = useRef<(HTMLDivElement | null)[]>([]);

  console.log(`AppMockupsContent: locale=${locale}, t is function: ${typeof t === 'function'}`);

  if (typeof t !== 'function') {
    console.warn(`AppMockupsContent: t is not a function for locale ${locale}`);
    return null;
  }

  const downloadSvgAsPng = async (index: number, filename: string) => {
    const svgContainer = svgRefs.current[index];
    if (!svgContainer) return;

    try {
      // Find the SVG element within the container
      const svgElement = svgContainer.querySelector('svg');
      if (!svgElement) {
        console.error('SVG element not found');
        return;
      }

      // Clone the SVG to avoid modifying the original
      const svgClone = svgElement.cloneNode(true) as SVGElement;
      
      // Ensure SVG has proper dimensions
      const svgRect = svgElement.getBoundingClientRect();
      const width = svgClone.getAttribute('width') || svgRect.width || 300;
      const height = svgClone.getAttribute('height') || svgRect.height || 300;
      
      svgClone.setAttribute('width', width.toString());
      svgClone.setAttribute('height', height.toString());

      // Get SVG data
      const svgData = new XMLSerializer().serializeToString(svgClone);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);

      // Create canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size (increase for better quality)
      const scale = 2; // 2x resolution for crisp PNG
      canvas.width = parseInt(width.toString()) * scale;
      canvas.height = parseInt(height.toString()) * scale;

      // Scale context for crisp rendering
      ctx.scale(scale, scale);

      // Set white background (optional - remove for transparent)
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, parseInt(width.toString()), parseInt(height.toString()));

      // Create image from SVG
      const img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, parseInt(width.toString()), parseInt(height.toString()));
        
        // Convert canvas to PNG blob
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, 'image/png', 1.0);
        
        // Cleanup
        URL.revokeObjectURL(svgUrl);
      };

      img.onerror = function() {
        console.error('Failed to load SVG image');
        URL.revokeObjectURL(svgUrl);
      };

      img.src = svgUrl;

    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const mockup: Mockups[] = [
    {
      img: <Splash />,
      description: t('heropr.mockup_splash'),
      filename: 'splash_screen.png'
    },
    {
      img: <Booking />,
      description: t('heropr.mockup_booking_list'),
      filename: 'booking_list.png'
    },
    {
      img: <Provider />,
      description: t('heropr.mockup_provider_profile'),
      filename: 'provider_profile.png'
    },
    {
      img: <Providerfeed />,
      description: t('heropr.mockup_provider_feed'),
      filename: 'provider_feed.png'
    },
    {
      img: <Reviews />,
      description: t('heropr.mockup_provider_reviews'),
      filename: 'provider_reviews.png'
    },
    {
      img: <Success />,
      description: t('heropr.mockup_booking_success'),
      filename: 'booking_success.png'
    },
    {
      img: <User />,
      description: t('heropr.mockup_user_reviews'),
      filename: 'user_reviews.png'
    },
    {
      img: <Useractivity />,
      description: t('heropr.mockup_user_activity'),
      filename: 'user_activity.png'
    },
    {
      img: <Providermusic />,
      description: t('heropr.mockup_provider_music'),
      filename: 'provider_music.png'
    },
    {
      img: <Userschedule />,
      description: t('heropr.mockup_user_schedule'),
      filename: 'user_schedule.png'
    },
    {
      img: <Profiledit />,
      description: t('heropr.mockup_profile_edit'),
      filename: 'profile_edit.png'
    },
    {
      img: <Providerschedule />,
      description: t('heropr.mockup_provider_schedule'),
      filename: 'provider_schedule.png'
    },
    {
      img: <Pending />,
      description: t('heropr.mockup_pending_booking'),
      filename: 'pending_booking.png'
    },
    {
      img: <Bookingform />,
      description: t('heropr.mockup_booking_form'),
      filename: 'booking_form.png'
    },
    {
      img: <Postupload />,
      description: t('heropr.mockup_post_upload'),
      filename: 'post_upload.png'
    },
    {
      img: <Postupload />,
      description: t('heropr.mockup_user_post'),
      filename: 'user_post.png'
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {mockup.map((item, index) => (
          <div key={index}>
            <div 
              ref={(el) => { svgRefs.current[index] = el; }}
              className={`flex items-center justify-center space-x-4 rounded-2xl px-5 py-9 bg-gradient-to-r from-[#F2F1FF] to-[#FFF0FD] dark:bg-gradient-to-r dark:from-[#1E1A2F] dark:to-[#2A0E29]`}
            >
              {item.img}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className='text-xs'>{item.description}</p>
              <button
                onClick={() => downloadSvgAsPng(index, item.filename)}
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