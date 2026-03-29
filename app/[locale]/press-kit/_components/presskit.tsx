
'use client';

import React, { useState } from 'react';
import { FileText, Image, Smartphone, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container, Section } from '@/components/craft';
import PressKitContent from './presskitcontent';
import LogoBrandingContent from './logobrandingcontent';
import AppMockupsContent from './appmockup';
import TeamPhotosContent from './teamphotos';

export type MenuSection = 'PRESS KIT' | 'LOGO & BRANDING KIT' | 'APP MOCKUPS & USE CASES' | 'TEAM PHOTOS';

interface MenuItem {
  id: MenuSection;
  label: string;
  icon: React.ElementType;
}

const PressKitInterface: React.FC = () => {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState<MenuSection>('PRESS KIT');

  const menuItems: MenuItem[] = [
    { id: 'PRESS KIT', label: t('heropr.menu_press_kit'), icon: FileText },
    { id: 'LOGO & BRANDING KIT', label: t('heropr.menu_logo_branding_kit'), icon: Image },
    { id: 'APP MOCKUPS & USE CASES', label: t('heropr.menu_app_mockups_use_cases'), icon: Smartphone },
    { id: 'TEAM PHOTOS', label: t('heropr.menu_team_photos'), icon: Users },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'PRESS KIT':
        return <PressKitContent />;
      case 'LOGO & BRANDING KIT':
        return <LogoBrandingContent />;
      case 'APP MOCKUPS & USE CASES':
        return <AppMockupsContent />;
      case 'TEAM PHOTOS':
        return <TeamPhotosContent />;
      default:
        return <PressKitContent />;
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