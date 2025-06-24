// // Original
// import { Phone, Mail } from 'lucide-react';
// import logo from '@/assets/logo.png';

// const Banner = () => {
//   return (
//     <div className="w-full px-6 py-6 mt-2 font-body">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <a href="#home" className="w-20 h-20 block">
//             <img
//               src={logo}
//               alt="Heritage India Group Logo"
//               className="w-full h-full object-contain"
//             />
//           </a>
//           <div>
//             <h1 className="text-3xl font-black text-gray-900 font-sans tracking-wide">
//               Heritage India Group
//             </h1>
//             <p className="text-base text-gray-600 italic font-serif font-medium">
//               शक्ति, प्रगति, विजय
//             </p>
//           </div>
//         </div>

//         <div className="hidden md:flex flex-col text-sm text-right text-gray-800 font-medium">
//           <div className="flex items-center space-x-2 justify-end">
//             <Phone className="w-4 h-4 text-red-600" />
//             <span>+91-9876543210</span>
//           </div>
//           <div className="flex items-center space-x-2 justify-end">
//             <Mail className="w-4 h-4 text-red-600" />
//             <span>info@heritagegroup.in</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;







//updated

import { Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Banner = () => {
  return (
    <div className="w-full px-4 py-4 sm:px-6 sm:py-6 mt-2 font-body">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <a href="#home" className="w-20 h-20 block">
            <img
              src={logo}
              alt="Heritage India Group Logo"
              className="w-full h-full object-contain"
            />
          </a>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 font-sans tracking-wide">
              Heritage India Group
            </h1>
            <p className="text-sm sm:text-base text-gray-600 italic font-serif font-medium">
              शक्ति, प्रगति, विजय
            </p>
          </div>
        </div>

        {/* Desktop Contact Info */}
        <div className="hidden md:flex flex-col text-sm text-right text-gray-800 font-medium">
          <div className="flex items-center space-x-2 justify-end">
            <Phone className="w-4 h-4 text-red-600" />
            <span>+91-9876543210</span>
          </div>
          <div className="flex items-center space-x-2 justify-end">
            <Mail className="w-4 h-4 text-red-600" />
            <span>info@heritagegroup.in</span>
          </div>
        </div>

        {/* Mobile Contact Info */}
        <div className="flex md:hidden flex-col mt-4 space-y-1 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-red-600" />
            <span>+91-9876543210</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-red-600" />
            <span>info@heritagegroup.in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
