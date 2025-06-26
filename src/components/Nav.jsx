// import { useEffect, useState } from 'react';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import logo from '@/assets/logo.png';

// const navLinks = [
//   { label: 'About Us', href: '#about' },
//   { label: 'Gallery', href: '/gallery', external: true },
//   { label: 'Certifications', href: '#certifications' },
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
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
//   const [isMobileScreen, setIsMobileScreen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 100);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const internalLinks = document.querySelectorAll('a[href^="#"]');
//     const handleClick = (e) => {
//       const href = e.currentTarget.getAttribute('href');
//       if (href && href.startsWith('#')) {
//         const el = document.querySelector(href);
//         if (el) {
//           e.preventDefault();
//           el.scrollIntoView({ behavior: 'smooth' });
//           setMobileOpen(false);
//           setMobileDropdownOpen(false);
//         }
//       }
//     };
//     internalLinks.forEach((link) => link.addEventListener('click', handleClick));
//     return () => {
//       internalLinks.forEach((link) => link.removeEventListener('click', handleClick));
//     };
//   }, []);

//   useEffect(() => {
//     const checkIsMobile = () => setIsMobileScreen(window.innerWidth < 768);
//     checkIsMobile();
//     window.addEventListener('resize', checkIsMobile);
//     return () => window.removeEventListener('resize', checkIsMobile);
//   }, []);

//   return (
//     <div className={`w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 bg-black text-white shadow-md' : 'relative bg-black text-white'}`}>
//       <div className="container mx-auto px-6 py-3 flex items-center justify-between gap-4">
//         {/* Logo */}
//         {isMobileScreen ? (
//           <>
//             <a href="#home" className={`transition-opacity duration-300 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//               <img src={logo} alt="HIG Logo" className="h-10" />
//             </a>
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className={`ml-auto p-2 rounded transition-opacity duration-300 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//               aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//             >
//               {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </>
//         ) : (
//           <a href="#home" className={`flex items-center transition-opacity duration-300 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//             <img src={logo} alt="HIG Logo" className="h-12" />
//           </a>
//         )}

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-10text-sm md:text-base font-semibold ml-auto">
//           <a href="#home" className="px-3 hover:text-[#F05A28]">Home</a>

//           <div
//             className="relative group"
//             onMouseEnter={() => setDesktopDropdownOpen(true)}
//             onMouseLeave={() => setDesktopDropdownOpen(false)}
//           >
//             <div
//               className="flex items-center space-x-1 cursor-pointer group-hover:text-[#F05A28]"
//               role="button"
//               aria-haspopup="true"
//               aria-expanded={desktopDropdownOpen}
//               tabIndex="0"
//             >
//               <a href="#companies" className="px-3 hover:text-[#F05A28]">Our Companies</a>
//               <ChevronDown className={`w-4 h-4 transform transition-transform ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
//             </div>
//             {desktopDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-max min-w-[380px] bg-white text-black rounded-md shadow-lg z-50 p-2">
//                 <ul className="py-2 text-sm font-normal">
//                   {companyLinks.map((item) => (
//                     <li key={item.href}>
//                       <a href={item.href} className="block px-6 py-3 hover:bg-gray-100 hover:text-[#F05A28] whitespace-nowrap">
//                         {item.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {navLinks.map((item) =>
//             item.external ? (
//               <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="px-3 hover:text-[#F05A28]">
//                 {item.label}
//               </a>
//             ) : (
//               <a key={item.href} href={item.href} className="hover:text-[#F05A28]">
//                 {item.label}
//               </a>
//             )
//           )}

//           <a href="#contact">
//             <Button className="ml-4 bg-white text-black hover:bg-gray-200 rounded-full px-4 py-1 text-sm font-bold">
//               Get in Touch
//             </Button>
//           </a>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-black px-6 py-6 text-white space-y-4 border-t border-gray-700">
//           <a href="#home" className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>Home</a>

//           <button
//             onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
//             className="flex items-center justify-between w-full hover:text-[#F05A28]"
//             aria-expanded={mobileDropdownOpen}
//             aria-controls="mobile-company-links"
//           >
//             <a href="#companies">Our Companies</a>
//             <ChevronDown className={`w-4 h-4 transform transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
//           </button>

//           {mobileDropdownOpen && (
//             <ul id="mobile-company-links" className="bg-gray-900 rounded text-sm mt-2 p-2">
//               {companyLinks.map((item) => (
//                 <li key={item.href}>
//                   <a href={item.href} className="block px-6 py-3 hover:text-[#F05A28] text-base" onClick={() => { setMobileOpen(false); setMobileDropdownOpen(false); }}>
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {navLinks.map((item) =>
//             item.external ? (
//               <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>
//                 {item.label}
//               </a>
//             ) : (
//               <a key={item.href} href={item.href} className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>
//                 {item.label}
//               </a>
//             )
//           )}

//           <a href="#contact" onClick={() => setMobileOpen(false)}>
//             <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full text-sm font-bold">
//               Get in Touch
//             </Button>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Nav;



// import { useEffect, useState } from 'react';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import logo from '@/assets/logo.png';

// const navLinks = [
//   { label: 'About Us', href: '#about' },
//   { label: 'Gallery', href: '/gallery', external: true },
//   { label: 'Certifications', href: '#certifications' },
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
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
//   const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
//   const [isMobileScreen, setIsMobileScreen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 100);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const internalLinks = document.querySelectorAll('a[href^="#"]');
//     const handleClick = (e) => {
//       const href = e.currentTarget.getAttribute('href');
//       if (href && href.startsWith('#')) {
//         const el = document.querySelector(href);
//         if (el) {
//           e.preventDefault();
//           el.scrollIntoView({ behavior: 'smooth' });
//           setMobileOpen(false);
//           setMobileDropdownOpen(false);
//         }
//       }
//     };
//     internalLinks.forEach((link) => link.addEventListener('click', handleClick));
//     return () => {
//       internalLinks.forEach((link) => link.removeEventListener('click', handleClick));
//     };
//   }, []);

//   useEffect(() => {
//     const checkIsMobile = () => setIsMobileScreen(window.innerWidth < 768);
//     checkIsMobile();
//     window.addEventListener('resize', checkIsMobile);
//     return () => window.removeEventListener('resize', checkIsMobile);
//   }, []);

//   return (
//     <div className={`w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 bg-black text-white shadow-md' : 'relative bg-black text-white'}`}>
//       <div className="container mx-auto px-6 py-3 flex items-center justify-between gap-4">
//         {/* Logo */}
//         {isMobileScreen ? (
//           <>
//             <a href="#home" className={`transition-opacity duration-300 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//               <img src={logo} alt="HIG Logo" className="h-10" />
//             </a>
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className={`ml-auto p-2 rounded transition-opacity duration-300 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//               aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//             >
//               {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </>
//         ) : (
//           <a href="#home" className={`flex items-center transition-opacity duration-300 ${isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//             <img src={logo} alt="HIG Logo" className="h-12" />
//           </a>
//         )}

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-10 text-sm md:text-base font-semibold ml-auto">
//           <a href="#home" className="px-3 hover:text-[#F05A28]">Home</a>

//           <div
//             className="relative group"
//             onMouseEnter={() => setDesktopDropdownOpen(true)}
//             onMouseLeave={() => setDesktopDropdownOpen(false)}
//           >
//             <div
//               className="flex items-center space-x-1 cursor-pointer group-hover:text-[#F05A28]"
//               role="button"
//               aria-haspopup="true"
//               aria-expanded={desktopDropdownOpen}
//               tabIndex="0"
//             >
//               <a href="#companies" className="px-3 hover:text-[#F05A28]">Our Companies</a>
//               <ChevronDown className={`w-4 h-4 transform transition-transform ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
//             </div>
//             {desktopDropdownOpen && (
//               <div className="absolute left-0 mt-2 w-max min-w-[380px] bg-white text-black rounded-md shadow-lg z-50 p-2">
//                 <ul className="py-2 text-sm font-normal">
//                   {companyLinks.map((item) => (
//                     <li key={item.href}>
//                       <a href={item.href} className="block px-6 py-3 hover:bg-gray-100 hover:text-[#F05A28] whitespace-nowrap">
//                         {item.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {navLinks.map((item) =>
//             item.external ? (
//               <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="px-3 hover:text-[#F05A28]">
//                 {item.label}
//               </a>
//             ) : (
//               <a key={item.href} href={item.href} className="px-3 hover:text-[#F05A28]">
//                 {item.label}
//               </a>
//             )
//           )}

//           <a href="#contact" className="px-3">
//             <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-1 text-sm font-bold">
//               Get in Touch
//             </Button>
//           </a>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-black px-6 py-6 text-white space-y-4 border-t border-gray-700">
//           <a href="#home" className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>Home</a>

//           <button
//             onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
//             className="flex items-center justify-between w-full hover:text-[#F05A28]"
//             aria-expanded={mobileDropdownOpen}
//             aria-controls="mobile-company-links"
//           >
//             <a href="#companies">Our Companies</a>
//             <ChevronDown className={`w-4 h-4 transform transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
//           </button>

//           {mobileDropdownOpen && (
//             <ul id="mobile-company-links" className="bg-gray-900 rounded text-sm mt-2 p-2">
//               {companyLinks.map((item) => (
//                 <li key={item.href}>
//                   <a href={item.href} className="block px-6 py-3 hover:text-[#F05A28] text-base" onClick={() => { setMobileOpen(false); setMobileDropdownOpen(false); }}>
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {navLinks.map((item) =>
//             item.external ? (
//               <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>
//                 {item.label}
//               </a>
//             ) : (
//               <a key={item.href} href={item.href} className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>
//                 {item.label}
//               </a>
//             )
//           )}

//           <a href="#contact" onClick={() => setMobileOpen(false)}>
//             <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full text-sm font-bold">
//               Get in Touch
//             </Button>
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Nav;



import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

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
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
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
    internalLinks.forEach((link) => link.addEventListener('click', handleClick));
    return () => {
      internalLinks.forEach((link) => link.removeEventListener('click', handleClick));
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobileScreen(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className={`w-full z-50 transition-all duration-300 overflow-x-hidden ${
        isSticky ? 'fixed top-0 bg-black text-white shadow-md' : 'relative bg-black text-white'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between gap-4 overflow-x-hidden">

        {/* Logo - visible only after scroll on both mobile & desktop */}
        {isSticky && (
          <a href="#home" className="flex items-center">
            <img src={logo} alt="HIG Logo" className="h-10 md:h-12 rounded-xl" />
          </a>
        )}

        {/* Hamburger Icon - only in mobile */}
        {isMobileScreen && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-auto p-2 rounded md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Desktop Navigation */}
        {!isMobileScreen && (
          <nav className="flex items-center space-x-10 text-sm md:text-base font-semibold ml-auto">
            <a href="#home" className="px-3 hover:text-[#F05A28]">Home</a>

            <div
              className="relative group"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <div
                className="flex items-center space-x-1 cursor-pointer group-hover:text-[#F05A28]"
                role="button"
                aria-haspopup="true"
                aria-expanded={desktopDropdownOpen}
                tabIndex="0"
              >
                <a href="#companies" className="px-3 hover:text-[#F05A28]">Our Companies</a>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {desktopDropdownOpen && (
                <div className="absolute left-0 mt-2 w-full max-w-md bg-white text-black rounded-md shadow-lg z-50 p-2">
                  <ul className="py-2 text-sm font-normal max-h-[60vh] overflow-y-auto whitespace-normal break-words">
                    {companyLinks.map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="block px-6 py-3 hover:bg-gray-100 hover:text-[#F05A28]">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {navLinks.map((item) =>
              item.external ? (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="px-3 hover:text-[#F05A28]">
                  {item.label}
                </a>
              ) : (
                <a key={item.href} href={item.href} className="px-3 hover:text-[#F05A28]">
                  {item.label}
                </a>
              )
            )}

            <a href="#contact" className="px-3">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-1 text-sm font-bold">
                Get in Touch
              </Button>
            </a>
          </nav>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && isMobileScreen && (
        <div className="md:hidden bg-black px-6 py-6 text-white space-y-4 border-t border-gray-700">
          <a href="#home" className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>Home</a>

          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="flex items-center justify-between w-full hover:text-[#F05A28]"
            aria-expanded={mobileDropdownOpen}
            aria-controls="mobile-company-links"
          >
            <a href="#companies">Our Companies</a>
            <ChevronDown className={`w-4 h-4 transform transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {mobileDropdownOpen && (
            <ul id="mobile-company-links" className="bg-gray-900 rounded text-sm mt-2 p-2 max-h-[60vh] overflow-y-auto whitespace-normal break-words">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-6 py-3 hover:text-[#F05A28] text-base"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileDropdownOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {navLinks.map((item) =>
            item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ) : (
              <a key={item.href} href={item.href} className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            )
          )}

          <a href="#contact" onClick={() => setMobileOpen(false)}>
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

