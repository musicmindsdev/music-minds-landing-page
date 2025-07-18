'use client';

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
import Providermusic from '@/components/svg/ProviderMusic';
import Userschedule from '@/components/svg/Userschedule';
import Profiledit from '@/components/svg/Profiledit';
import Providerschedule from '@/components/svg/Providerschedule';
import Pending from '@/components/svg/Pending';
import Bookingform from '@/components/svg/Bookingform';
import Postupload from '@/components/svg/Postupload';



type Mockups = {
  img: JSX.Element;
  description: string;
}

const AppMockupsContent: React.FC = () => {
  const mockup: Mockups[] = [
    {
      img: <Splash/>,
      description: "Splash"
    },
    {
      img: <Booking/>,
      description: "Booking List"
    },
    {
      img: <Provider/>,
      description: "Provider Profile"
    },
    {
      img: <Providerfeed/>,
      description: "Provider Feed"
    },
    {
      img: <Reviews/>,
      description: "Provider Reviews"
    },
    {
      img: <Success/>,
      description: "Booking Success"
    },
    {
      img: <User/>,
      description: "User Reviews"
    },
    {
      img: <Useractivity/>,
      description: "User Activity"
    },
    {
      img: <Providermusic/>,
      description: "Provider Music"
    },
    {
      img: <Userschedule/>,
      description: "User Schedule"
    },
    {
      img: <Profiledit/>,
      description: "Profile Edit"
    },
    {
      img: <Providerschedule/>,
      description: "Provider Schedule"
    },
    {
      img: <Pending/>,
      description: "Pending Booking"
    },
    {
      img: <Bookingform/>,
      description: "Booking Form"
    },
    {
      img: <Postupload/>,
      description: "Post Upload"
    },
    {
      img: <Postupload/>,
      description: "User Post"
    },
    
  ]
 
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {mockup.map((item, index) => (
          <div key={index}> {/* Use index as a unique key */}
            <div className={`flex items-center justify-center space-x-4 rounded-2xl px-5 py-9 bg-gradient-to-r from-[#F2F1FF] to-[#FFF0FD]`}>
              {item.img}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <p className='text-xs'>{item.description}</p>
              <Download1 className="h-5 w-5 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppMockupsContent;