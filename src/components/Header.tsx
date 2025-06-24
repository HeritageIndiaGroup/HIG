// import { useEffect, useState } from 'react';
// import { Menu, X, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import logo from '@/assets/logo.png';
// import Gallery from '@/components/Gallery'; 

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isCompaniesDropdownOpenMobile, setIsCompaniesDropdownOpenMobile] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (isCompaniesDropdownOpenMobile) {
//       setIsCompaniesDropdownOpenMobile(false);
//     }
//   };

//   const toggleCompaniesDropdownMobile = (e) => {
//     e.preventDefault();
//     setIsCompaniesDropdownOpenMobile(!isCompaniesDropdownOpenMobile);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const SCROLL_THRESHOLD = 60;
//       setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     return () => {
//       document.documentElement.style.scrollBehavior = '';
//     };
//   }, []);

//   const navLinks = [
//     { label: 'About Us', href: '#about' },
//     { label: 'Gallery', href: '/gallery', external: true }, // ✅ updated to external
//     { label: 'News', href: '#news' },
//     { label: 'Career', href: '#career' },
//     { label: 'Inquiry', href: '#inquiry' },
//   ];

//   const companyLinks = [
//     { label: 'HIG - Heritage India Group', href: '#hig-main' },
//     { label: 'HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED', href: '#agro' },
//     { label: 'HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION', href: '#micro' },
//     { label: 'HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED', href: '#media' },
//     { label: 'HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED', href: '#hotel' },
//     { label: 'HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED', href: '#infra' },
//     { label: 'HIG - HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED', href: '#film' },
//     { label: 'KashiKedarnath', href: '#kashi' },
//     { label: 'HIG - Finance', href: '#finance' },
//     { label: 'HIG - Mart', href: '#mart' },
//     { label: 'HIG - Dasandas Traders', href: '#dasandas' },
//     { label: 'HIG - Glam Factory', href: '#glam' },
//   ];

//   const NAVBAR_HEIGHT = 65;

//   return (
//     <>
//       {/* Banner */}
//       <div className="w-full px-6 py-6 mt-2 font-body">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <a href="#home" className="w-20 h-20 block">
//               <img
//                 src={logo}
//                 alt="Heritage India Group Logo"
//                 className="w-full h-full object-contain"
//               />
//             </a>
//             <div>
//               <h1 className="text-3xl font-black text-gray-900 font-sans tracking-wide">
//                 Heritage India Group
//               </h1>
//               <p className="text-base text-gray-600 italic font-serif font-medium">
//                 शक्ति, प्रगति, विजय
//               </p>
//             </div>
//           </div>

//           <div className="hidden md:flex flex-col text-sm text-right text-gray-800 font-medium">
//             <div className="flex items-center space-x-2 justify-end">
//               <Phone className="w-4 h-4 text-red-600" />
//               <span>+91-9876543210</span>
//             </div>
//             <div className="flex items-center space-x-2 justify-end">
//               <Mail className="w-4 h-4 text-red-600" />
//               <span>info@heritagegroup.in</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Spacer */}
//       {isScrolled && <div style={{ height: `${NAVBAR_HEIGHT}px` }} />}

//       {/* Navigation */}
//       <header
//         className={`w-full z-50 font-body transition-all duration-300 ${
//           isScrolled
//             ? 'fixed top-0 left-0 bg-black bg-opacity-80 backdrop-blur-lg border-b border-gray-700 shadow-md'
//             : 'relative'
//         }`}
//       >
//         <div className="w-full bg-black">
//           <div className="container mx-auto px-6 py-3 flex items-center">
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center ml-auto space-x-6 text-base font-bold tracking-wide text-neutral-100">
//               <a href="#home" className="hover:text-red-400 transition duration-300">
//                 Home
//               </a>

//               {/* Dropdown */}
//               <div className="relative group">
//                 <div className="flex items-center space-x-1 hover:text-red-400 transition duration-300 cursor-pointer">
//                   <a href="#companies">Our Companies</a>
//                   <ChevronDown className="w-4 h-4" />
//                 </div>
//                 <div
//                   role="menu"
//                   className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 w-[300px] z-50 rounded-md overflow-hidden"
//                 >
//                   <ul className="py-2 text-sm font-normal space-y-1">
//                     {companyLinks.map((item) => (
//                       <li key={item.href}>
//                         <a href={item.href} className="hover:text-red-600 block px-4 py-2">
//                           {item.label}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Other Nav Links */}
//               {navLinks.map((item) =>
//                 item.external ? (
//                   <a
//                     key={item.href}
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-red-400 transition duration-300"
//                   >
//                     {item.label}
//                   </a>
//                 ) : (
//                   <a
//                     key={item.href}
//                     href={item.href}
//                     className="hover:text-red-400 transition duration-300"
//                   >
//                     {item.label}
//                   </a>
//                 )
//               )}

//               {/* Get in Touch */}
//               <a href="#contact">
//                 <Button className="ml-4 bg-white text-black hover:bg-gray-100 font-bold font-body text-sm">
//                   Get in Touch
//                 </Button>
//               </a>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden text-white ml-auto"
//               onClick={toggleMenu}
//               aria-controls="mobile-menu"
//               aria-expanded={isMenuOpen}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div id="mobile-menu" className="md:hidden px-6 pb-4">
//               <nav className="flex flex-col space-y-4 border-t pt-4 text-white">
//                 <ul>
//                   <li>
//                     <a href="#home" className="hover:text-red-400 block" onClick={toggleMenu}>
//                       Home
//                     </a>
//                   </li>
//                   <li>
//                     <button
//                       onClick={toggleCompaniesDropdownMobile}
//                       className="flex items-center justify-between w-full hover:text-red-400 py-1"
//                       aria-expanded={isCompaniesDropdownOpenMobile}
//                       aria-controls="companies-submenu-mobile"
//                     >
//                       Our Companies
//                       {isCompaniesDropdownOpenMobile ? (
//                         <ChevronUp className="w-4 h-4" />
//                       ) : (
//                         <ChevronDown className="w-4 h-4" />
//                       )}
//                     </button>
//                     {isCompaniesDropdownOpenMobile && (
//                       <div
//                         id="companies-submenu-mobile"
//                         className="ml-4 mt-2 space-y-2 text-sm border-l border-gray-700 pl-4"
//                       >
//                         {companyLinks.map((item) => (
//                           <a
//                             key={item.href}
//                             href={item.href}
//                             className="block hover:text-red-400"
//                             onClick={toggleMenu}
//                           >
//                             {item.label}
//                           </a>
//                         ))}
//                       </div>
//                     )}
//                   </li>

//                   {navLinks.map((item) => (
//                     <li key={item.href}>
//                       {item.external ? (
//                         <a
//                           href={item.href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="hover:text-red-400 block"
//                           onClick={toggleMenu}
//                         >
//                           {item.label}
//                         </a>
//                       ) : (
//                         <a
//                           href={item.href}
//                           className="hover:text-red-400 block"
//                           onClick={toggleMenu}
//                         >
//                           {item.label}
//                         </a>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//                 <a href="#contact">
//                   <Button className="mt-2 bg-white text-black hover:bg-gray-100 font-bold font-body">
//                     Get in Touch
//                   </Button>
//                 </a>
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;






import Banner from '@/components/Banner';
import Nav from '@/components/Nav';

const Header = () => {
  return (
    <>
      <Banner />
      <Nav />
    </>
  );
};

export default Header;

