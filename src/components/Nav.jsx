// // Original Code
// import { useEffect, useState } from 'react';
// import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const navLinks = [
//   { label: 'About Us', href: '#about' },
//   { label: 'Gallery', href: '/gallery', external: true },
//   { label: 'News', href: '#news' },
//   { label: 'Career', href: '/career', external: true },
//   { label: 'Inquiry', href: '#inquiry' },
// ];

// const companyLinks = [
//   { label: 'HIG - Heritage India Group', href: '#hig-main' },
//   { label: 'HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED', href: '#agro' },
//   { label: 'HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION', href: '#micro' },
//   { label: 'HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED', href: '#media' },
//   { label: 'HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED', href: '#hotel' },
//   { label: 'HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED', href: '#infra' },
//   { label: 'HIG - HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED', href: '#film' },
//   { label: 'KashiKedarnath', href: '#kashi' },
//   { label: 'HIG - Finance', href: '#finance' },
//   { label: 'HIG - Mart', href: '#mart' },
//   { label: 'HIG - Dasandas Traders', href: '#dasandas' },
//   { label: 'HIG - Glam Factory', href: '#glam' },
// ];

// const Nav = () => {
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
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`sticky top-0 z-50 font-body transition-all duration-500 ${
//         isScrolled ? 'bg-black border-b border-gray-700 shadow-md' : 'bg-black'
//       }`}
//     >
//       <div className="w-full">
//         <div className="container mx-auto px-6 py-3 flex items-center">
//           <div className="hidden md:flex items-center ml-auto space-x-6 text-base font-bold tracking-wide text-neutral-100">
//             <a href="#home" className="hover:text-red-400 transition duration-300">
//               Home
//             </a>

//             {/* Desktop Companies Dropdown */}
//             <div className="relative group">
//               <div className="flex items-center space-x-1 hover:text-red-400 transition duration-300 cursor-pointer">
//                 <a href="#companies">Our Companies</a>
//                 <ChevronDown className="w-4 h-4" />
//               </div>
//               <div
//                 role="menu"
//                 className="absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 w-[300px] z-50 rounded-md overflow-hidden"
//               >
//                 <ul className="py-2 text-sm font-normal space-y-1">
//                   {companyLinks.map((item) => (
//                     <li key={item.href}>
//                       <a href={item.href} className="hover:text-red-600 block px-4 py-2">
//                         {item.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Desktop Nav Links */}
//             {navLinks.map((item) =>
//               item.external ? (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-red-400 transition duration-300"
//                 >
//                   {item.label}
//                 </a>
//               ) : (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className="hover:text-red-400 transition duration-300"
//                 >
//                   {item.label}
//                 </a>
//               )
//             )}

//             <a href="#contact">
//               <Button className="ml-4 bg-white text-black hover:bg-gray-100 font-bold font-body text-sm">
//                 Get in Touch
//               </Button>
//             </a>
//           </div>

//           {/* Mobile Menu Toggle Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden text-white ml-auto"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden px-6 pb-4">
//             <nav className="flex flex-col space-y-4 border-t pt-4 text-white">
//               <ul>
//                 <li>
//                   <a href="#home" className="hover:text-red-400 block" onClick={toggleMenu}>
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <button
//                     onClick={toggleCompaniesDropdownMobile}
//                     className="flex items-center justify-between w-full hover:text-red-400 py-1"
//                   >
//                     Our Companies
//                     {isCompaniesDropdownOpenMobile ? (
//                       <ChevronUp className="w-4 h-4" />
//                     ) : (
//                       <ChevronDown className="w-4 h-4" />
//                     )}
//                   </button>
//                   {isCompaniesDropdownOpenMobile && (
//                     <div className="ml-4 mt-2 space-y-2 text-sm border-l border-gray-700 pl-4">
//                       {companyLinks.map((item) => (
//                         <a
//                           key={item.href}
//                           href={item.href}
//                           className="block hover:text-red-400"
//                           onClick={toggleMenu}
//                         >
//                           {item.label}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </li>
//                 {navLinks.map((item) => (
//                   <li key={item.href}>
//                     <a
//                       href={item.href}
//                       onClick={toggleMenu}
//                       target={item.external ? '_blank' : undefined}
//                       rel={item.external ? 'noopener noreferrer' : undefined}
//                       className="hover:text-red-400 block"
//                     >
//                       {item.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//               <a href="#contact">
//                 <Button className="mt-2 bg-white text-black hover:bg-gray-100 font-bold font-body">
//                   Get in Touch
//                 </Button>
//               </a>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };












// //    pc
// import { useEffect, useState } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const navLinks = [
//   { label: 'About Us', href: '#about' },
//   { label: 'Gallery', href: '/gallery', external: true },
//   { label: 'Certifications', href: '#certifications' }, // ✅ Changed from News
//   { label: 'Career', href: '/career', external: true },
//   { label: 'Inquiry', href: '#inquiry' },
// ];

// const companyLinks = [
//   { label: 'HIG - Heritage India Group', href: '#hig-main' },
//   { label: 'HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED', href: '#agro' },
//   { label: 'HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION', href: '#micro' },
//   { label: 'HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED', href: '#media' },
//   { label: 'HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED', href: '#hotel' },
//   { label: 'HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED', href: '#infra' },
//   { label: 'HIG - HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED', href: '#film' },
//   { label: 'KashiKedarnath', href: '#kashi' },
//   { label: 'HIG - Finance', href: '#finance' },
//   { label: 'HIG - Mart', href: '#mart' },
//   { label: 'HIG - Dasandas Traders', href: '#dasandas' },
//   { label: 'HIG - Glam Factory', href: '#glam' },
// ];

// const Nav = () => {
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClick = (e) => {
//       const href = e.target.getAttribute('href');
//       if (href && href.startsWith('#')) {
//         const el = document.querySelector(href);
//         if (el) {
//           e.preventDefault();
//           el.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     };
//     document.querySelectorAll('a[href^="#"]').forEach((link) =>
//       link.addEventListener('click', handleClick)
//     );
//     return () => {
//       document.querySelectorAll('a[href^="#"]').forEach((link) =>
//         link.removeEventListener('click', handleClick)
//       );
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full z-50 transition-all duration-300 ${
//         isSticky
//           ? 'fixed top-0 bg-black text-white shadow-md animate-fade-slide'
//           : 'relative bg-black text-white'
//       }`}
//     >
//       <div className="container mx-auto px-6 py-3 flex items-center justify-end">
//         <nav className="flex items-center space-x-6 text-sm md:text-base font-semibold">
//           <a href="#home" className="hover:text-[#F05A28] transition duration-300">
//             Home
//           </a>

//           {/* Dropdown */}
//           <div className="relative group">
//             <div className="flex items-center space-x-1 cursor-pointer group-hover:text-[#F05A28] transition duration-300">
//               <a href="#companies">Our Companies</a>
//               <ChevronDown className="w-4 h-4" />
//             </div>
//             <div className="absolute left-0 mt-2 w-[300px] bg-white text-black rounded-md shadow-lg z-50 hidden group-hover:block">
//               <ul className="py-2 text-sm font-normal">
//                 {companyLinks.map((item) => (
//                   <li key={item.href}>
//                     <a
//                       href={item.href}
//                       className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F05A28] transition"
//                     >
//                       {item.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Main nav links */}
//           {navLinks.map((item) =>
//             item.external ? (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-[#F05A28] transition duration-300"
//               >
//                 {item.label}
//               </a>
//             ) : (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className="hover:text-[#F05A28] transition duration-300"
//               >
//                 {item.label}
//               </a>
//             )
//           )}

//           {/* Contact */}
//           <a href="#contact">
//             <Button className="ml-4 bg-white text-black hover:bg-gray-200 rounded-full px-4 py-1 text-sm font-bold transition">
//               Get in Touch
//             </Button>
//           </a>
//         </nav>
//       </div>
//     </div>
//   );
// };



import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button'; 

// --- Navigation Link Data ---
const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '/gallery', external: true },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Career', href: '/career', external: true },
  { label: 'Inquiry', href: '#inquiry' },
];

const companyLinks = [
  { label: 'HIG - Heritage India Group', href: '#hig-main' },
  { label: 'HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED', href: '#agro' },
  { label: 'HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION', href: '#micro' },
  { label: 'HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED', href: '#media' },
  { label: 'HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED', href: '#hotel' },
  { label: 'HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED', href: '#infra' },
  { label: 'HIG - HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED', href: '#film' },
  { label: 'KashiKedarnath', href: '#kashi' },
  { label: 'HIG - Finance', href: '#finance' },
  { label: 'HIG - Mart', href: '#mart' },
  { label: 'HIG - Dasandas Traders', href: '#dasandas' },
  { label: 'HIG - Glam Factory', href: '#glam' },
];

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Sticky nav on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll and close menus
  useEffect(() => {
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          setMobileOpen(false);
          setMobileDropdownOpen(false);
        }
      }
    };
    document.querySelectorAll('a[href^="#"]').forEach((link) =>
      link.addEventListener('click', handleClick)
    );
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((link) =>
        link.removeEventListener('click', handleClick)
      );
    };
  }, []);

  return (
    <div
      className={`w-full z-50 transition-all duration-300 ${
        isSticky ? 'fixed top-0 bg-black text-white shadow-md' : 'relative bg-black text-white'
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">

        {/* ========== Mobile Burger Button (only visible on small screens) ========== */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ========== Desktop Navigation (visible on md and up) ========== */}
        <nav className="hidden md:flex items-center space-x-6 text-sm md:text-base font-semibold ml-auto">
          {/* Home */}
          <a href="#home" className="hover:text-[#F05A28]">Home</a>

          {/* Desktop Dropdown for Our Companies */}
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer group-hover:text-[#F05A28]">
              <a href="#companies">Our Companies</a>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="absolute left-0 mt-2 w-[300px] bg-white text-black rounded-md shadow-lg z-50 hidden group-hover:block">
              <ul className="py-2 text-sm font-normal">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-[#F05A28]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Nav Links */}
          {navLinks.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F05A28]"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#F05A28]"
              >
                {item.label}
              </a>
            )
          )}

          {/* Contact Button */}
          <a href="#contact">
            <Button className="ml-4 bg-white text-black hover:bg-gray-200 rounded-full px-4 py-1 text-sm font-bold">
              Get in Touch
            </Button>
          </a>
        </nav>
      </div>

      {/* ========== Mobile Menu (only visible when burger is open) ========== */}
      {mobileOpen && (
        <div className="md:hidden bg-black px-6 py-6 text-white space-y-4">
          <a href="#home" className="block hover:text-[#F05A28]">Home</a>

          {/* Mobile Dropdown */}
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="flex items-center justify-between w-full hover:text-[#F05A28]"
            aria-expanded={mobileDropdownOpen}
          >
            <span>Our Companies</span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                mobileDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {mobileDropdownOpen && (
            <ul className="bg-gray-900 rounded text-sm mt-2">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 hover:text-[#F05A28]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Main Nav Links */}
          {navLinks.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#F05A28]"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="block hover:text-[#F05A28]"
              >
                {item.label}
              </a>
            )
          )}

          {/* Contact Button */}
          <a href="#contact">
            <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full text-sm font-bold">
              Get in Touch
            </Button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
