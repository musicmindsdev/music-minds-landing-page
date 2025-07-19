
'use client';

import React, { useState } from 'react';
import { FileText, Image, Smartphone, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Container, Section } from '@/components/craft';
import PressKitContent from '@/app/press-kit/_components/presskitcontent';
import LogoBrandingContent from '@/app/press-kit/_components/logobrandingcontent';
import AppMockupsContent from '@/app/press-kit/_components/appmockup';
import TeamPhotosContent from '@/app/press-kit/_components/teamphotos';

export type MenuSection = 'PRESS KIT' | 'LOGO & BRANDING KIT' | 'APP MOCKUPS & USE CASES' | 'TEAM PHOTOS';

interface MenuItem {
  id: MenuSection;
  label: string;
  icon: React.ElementType;
}

interface PressKitInterfaceProps {
  locale: string;
}

const PressKitInterface: React.FC<PressKitInterfaceProps> = ({ locale }) => {
  const { t } = useTranslation('common');
  const [activeSection, setActiveSection] = useState<MenuSection>('APP MOCKUPS & USE CASES');

  console.log(`PressKitInterface: locale=${locale}, t is function: ${typeof t === 'function'}`);

  if (typeof t !== 'function') {
    console.warn(`PressKitInterface: t is not a function for locale ${locale}`);
    return null;
  }

  const menuItems: MenuItem[] = [
    { id: 'PRESS KIT', label: t('heropr.menu_press_kit'), icon: FileText },
    { id: 'LOGO & BRANDING KIT', label: t('heropr.menu_logo_branding_kit'), icon: Image },
    { id: 'APP MOCKUPS & USE CASES', label: t('heropr.menu_app_mockups_use_cases'), icon: Smartphone },
    { id: 'TEAM PHOTOS', label: t('heropr.menu_team_photos'), icon: Users },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'PRESS KIT':
        return <PressKitContent locale={locale}/>;
      case 'LOGO & BRANDING KIT':
        return <LogoBrandingContent locale={locale}/>;
      case 'APP MOCKUPS & USE CASES':
        return <AppMockupsContent locale={locale}/>;
      case 'TEAM PHOTOS':
        return <TeamPhotosContent locale={locale}/>;
      default:
        return <PressKitContent locale={locale}/>;
    }
  };

  return (
    <Section className="bg-card dark:bg-background p-6">
      <Container className="p-4 flex flex-col md:flex-row gap-6">
        {/* Left Navigation */}
        <div className="w-80 relative">
          <div className="p-6">
            <nav className="space-y-1 relative">
              {/* Active indicator line */}
              <div
                className="absolute left-0 w-1 bg-[#5243FE] rounded-full transition-all duration-300"
                style={{
                  height: '48px',
                  top: `${menuItems.findIndex(item => item.id === activeSection) * 56}px`,
                }}
              />
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 relative ${
                    activeSection === item.id
                      ? 'text-[#5243FE] font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="block text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Content - Dynamic Component Rendering */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </Container>
    </Section>
  );
};

export default PressKitInterface;