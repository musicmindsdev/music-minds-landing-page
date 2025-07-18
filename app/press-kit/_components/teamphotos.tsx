// 'use client';

// import React from 'react';
// import Pdf from '@/components/svg/Pdf';
// import Powerpoint from '@/components/svg/Powerpoint';
// import Download from '@/components/svg/Download';

// interface DocumentItem {
//   title: string;
//   type: 'pdf' | 'powerpoint';
//   lastUpdated: string;
// }

// const TeamPhotosContent: React.FC = () => {
//   const contentData: DocumentItem[] = [
//     { title: 'Executive Team', type: 'powerpoint', lastUpdated: 'Dec 30, 2024' },
//     { title: 'Development Team', type: 'powerpoint', lastUpdated: 'Dec 30, 2024' },
//     { title: 'Office Photos', type: 'pdf', lastUpdated: 'Dec 25, 2024' },
//     { title: 'Team Events', type: 'pdf', lastUpdated: 'Dec 25, 2024' }
//   ];

//   const DocumentCard: React.FC<DocumentItem> = ({ title, type, lastUpdated }) => {
//     const handleDownload = () => {
//       console.log(`Downloading ${title}`);
//     };

//     return (
//       <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
//         <div className="flex items-start justify-between">
//           <div className="flex items-start space-x-4">
//             {type === 'pdf' ? 
//               <div className='p-3 bg-[#FFDFDE] rounded-2xl'><Pdf/></div> : 
//               <div className='p-3 bg-[#FDE6DE] rounded-2xl'><Powerpoint /></div>
//             }
//             <div className="flex-1">
//               <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
//               <p className="text-gray-500 text-sm mt-5">Last Updated: {lastUpdated}</p>
//             </div>
//           </div>
//           <button 
//             className='mt-7'
//             onClick={handleDownload}
//             aria-label={`Download ${title}`}
//           >
//             <Download />
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {contentData.map((item, index) => (
//           <DocumentCard
//             key={`team-photos-${index}`}
//             title={item.title}
//             type={item.type}
//             lastUpdated={item.lastUpdated}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamPhotosContent;
import React from 'react'

function TeamPhotosContent() {
  return (
    <div>teamphotos</div>
  )
}

export default TeamPhotosContent