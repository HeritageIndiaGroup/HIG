import { Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Banner = () => {
  return (
    // <div className="w-full px-6 py-8 font-body bg-white z-40 relative">
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 py-8 font-body bg-white z-40 relative overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="#home" className="w-24 h-24 block">
            <img
              src={logo}
              alt="Heritage India Group Logo"
              className="w-full h-full object-contain"
            />
          </a>
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-wide font-sans">
              Heritage India Group
            </h1>
            <p className="text-base text-gray-600 italic font-serif font-semibold tracking-tight">
              शक्ति, प्रगति, विजय
            </p>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Banner;
