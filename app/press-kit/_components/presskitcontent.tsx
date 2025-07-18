import React from 'react';
import Pdf from '@/components/svg/Pdf';
import Powerpoint from '@/components/svg/Powerpoint';
import Download from '@/components/svg/Download';
import { useTranslation } from 'react-i18next';

interface DocumentItem {
  title: string;
  type: 'pdf' | 'powerpoint';
  lastUpdated: string;
}

interface PressKitContentProps {
  locale: string;
}

const PressKitContent: React.FC<PressKitContentProps> = ({ locale }) => {
  const { t } = useTranslation('common');

  console.log(`PressKitContent: locale=${locale}, t is function: ${typeof t === 'function'}`);

  if (typeof t !== 'function') {
    console.warn(`PressKitContent: t is not a function for locale ${locale}`);
    return null;
  }

  const contentData: DocumentItem[] = [
    { title: t('heropr.document_company_profile'), type: 'pdf', lastUpdated: 'Jan 4, 2025' },
    { title: t('heropr.document_team_data'), type: 'powerpoint', lastUpdated: 'Jan 4, 2025' },
    { title: t('heropr.document_mission_vision'), type: 'pdf', lastUpdated: 'Jan 4, 2025' },
    { title: t('heropr.document_screenshots'), type: 'powerpoint', lastUpdated: 'Jan 4, 2025' }
  ];

  const DocumentCard: React.FC<DocumentItem> = ({ title, type, lastUpdated }) => {
    const handleDownload = () => {
      console.log(`Downloading ${title}`);
    };

    return (
      <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            {type === 'pdf' ? 
              <div className='p-3 bg-[#FFDFDE] rounded-2xl'><Pdf/></div> : 
              <div className='p-3 bg-[#FDE6DE] rounded-2xl'><Powerpoint /></div>
            }
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm mt-5">{t('heropr.last_updated')}: {lastUpdated}</p>
            </div>
          </div>
          <button 
            className='mt-7'
            onClick={handleDownload}
            aria-label={`${t('heropr.download')} ${title}`}
          >
            <Download />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contentData.map((item, index) => (
          <DocumentCard
            key={`press-kit-${index}`}
            title={item.title}
            type={item.type}
            lastUpdated={item.lastUpdated}
          />
        ))}
      </div>
    </div>
  );
};

export default PressKitContent;