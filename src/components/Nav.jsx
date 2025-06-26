// import { useEffect, useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import logo from '@/assets/logo.png'; // Make sure this path is correct for your project

// const navLinks = [
//   { label: 'About Us', href: '#about' },
//   { label: 'Gallery', href: '/gallery', external: true },
//   { label: 'Certifications', href: '#certifications' },
//   { label: 'Career', href: '/career', external: true },
//   { label: 'Inquiry', href: '#inquiry' },
// ];

// const Nav = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
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
//         }
//       }
//     };
//     internalLinks.forEach((link) => link.addEventListener('click', handleClick));
//     return () => {
//       internalLinks.forEach((link) => link.removeEventListener('click', handleClick));
//     };
//   }, []);

//   useEffect(() => {
//     const checkMobile = () => setIsMobileScreen(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   return (
//     <div
//       className={`w-full z-50 transition-all duration-300 ${
//         isSticky ? 'fixed top-0 bg-black text-white shadow-md' : 'relative bg-black text-white'
//       }`}
//     >
//       <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
//         {isSticky && (
//           <a href="#home" className="flex items-center">
//             <img src={logo} alt="HIG Logo" className="h-10 md:h-12 rounded-xl" />
//           </a>
//         )}

//         {isMobileScreen && (
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="ml-auto p-2 rounded md:hidden"
//             aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         )}

//         {!isMobileScreen && (
//           <nav className="flex items-center space-x-10 text-sm md:text-base font-semibold ml-auto">
//             <a href="#home" className="px-3 hover:text-[#F05A28]">Home</a>
//             <a href="#companies" className="px-3 hover:text-[#F05A28]">Our Companies</a>

//             {navLinks.map((item) =>
//               item.external ? (
//                 <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="px-3 hover:text-[#F05A28]">
//                   {item.label}
//                 </a>
//               ) : (
//                 <a key={item.href} href={item.href} className="px-3 hover:text-[#F05A28]">
//                   {item.label}
//                 </a>
//               )
//             )}

//             <a href="#contact" className="px-3">
//               <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-1 text-sm font-bold">
//                 Get in Touch
//               </Button>
//             </a>
//           </nav>
//         )}
//       </div>

//       {mobileOpen && isMobileScreen && (
//         <div className="md:hidden bg-black px-6 py-6 text-white space-y-4 border-t border-gray-700">
//           <a href="#home" className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>Home</a>
//           <a href="#companies" className="block hover:text-[#F05A28]" onClick={() => setMobileOpen(false)}>Our Companies</a>

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
// import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
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
//   { label: 'HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED', href: '#hig-agro' },
//   { label: 'HERITAGE INDIA MICRO SERVICES FOUNDATION', href: '#hig-micro-services' },
//   { label: 'HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED', href: '#hig-media-education' },
//   { label: 'HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED', href: '#hig-hotel-resort' },
//   { label: 'HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED', href: '#hig-infra-venture' },
//   { label: 'HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED', href: '#hig-film-production' },
//   { label: 'Kashi Kedarnath', href: '#kashi-kedarnath' },
//   { label: 'HIG - Finance', href: '#hig-finance' },
//   { label: 'HIG - Mart', href: '#hig-mart' },
//   { label: 'HIG - Dasandas Traders', href: '#hig-dasandas-traders' },
//   { label: 'HIG - Glam Factory', href: '#hig-glam-factory' },
// ];

// const Nav = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [isMobileScreen, setIsMobileScreen] = useState(false);
//   const [isCompaniesDropdownOpen, setIsCompaniesDropdownOpen] = useState(false);
//   const [isMobileCompaniesExpanded, setIsMobileCompaniesExpanded] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 100);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleInternalLinkClick = (e) => {
//       const href = e.currentTarget.getAttribute('href');
//       if (href && href.startsWith('#')) {
//         const el = document.querySelector(href);
//         if (el) {
//           e.preventDefault();
//           el.scrollIntoView({ behavior: 'smooth' });
//           setMobileOpen(false);
//           setIsCompaniesDropdownOpen(false);
//           setIsMobileCompaniesExpanded(false);
//         }
//       }
//     };

//     const internalLinks = document.querySelectorAll('a[href^="#"]');
//     internalLinks.forEach((link) => link.addEventListener('click', handleInternalLinkClick));

//     return () => {
//       internalLinks.forEach((link) => link.removeEventListener('click', handleInternalLinkClick));
//     };
//   }, []);

//   useEffect(() => {
//     const checkMobile = () => setIsMobileScreen(window.innerWidth < 768);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const toggleMobileMenu = () => {
//     setMobileOpen((prevMobileOpen) => {
//       if (prevMobileOpen) {
//         setIsMobileCompaniesExpanded(false);
//       }
//       return !prevMobileOpen;
//     });
//   };

//   const handleDropdownToggle = (open) => {
//     setIsCompaniesDropdownOpen(open);
//   };

//   return (
//     <div
//       className={`w-full z-50 transition-all duration-300 ${
//         isSticky ? 'fixed top-0 bg-black text-white shadow-md' : 'relative bg-black text-white'
//       }`}
//     >
//       <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
//         {(isSticky || isMobileScreen) && (
//           <a href="#home" className="flex items-center">
//             <img src={logo} alt="HIG Logo" className="h-10 md:h-12 rounded-xl" />
//           </a>
//         )}

//         {isMobileScreen && (
//           <button
//             onClick={toggleMobileMenu}
//             className="ml-auto p-2 rounded md:hidden"
//             aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         )}

//         {!isMobileScreen && (
//           <nav className="flex items-center space-x-10 text-sm md:text-base font-semibold ml-auto">
//             <a href="#home" className="px-3 hover:text-[#F05A28]">Home</a>

//             <div
//               className="relative"
//               onMouseEnter={() => handleDropdownToggle(true)}
//               onMouseLeave={() => handleDropdownToggle(false)}
//             >
//               <a href="#companies" className="px-3 py-2 flex items-center hover:text-[#F05A28] cursor-pointer">
//                 Our Companies {isCompaniesDropdownOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
//               </a>
//               {isCompaniesDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-0 bg-black border border-gray-700 rounded-md shadow-lg py-2 w-max min-w-[250px]">
//                   {companyLinks.map((company) => (
//                     <a
//                       key={company.href}
//                       href={company.href}
//                       className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-[#F05A28] whitespace-nowrap"
//                       onClick={() => handleDropdownToggle(false)}
//                     >
//                       {company.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {navLinks.map((item) =>
//               item.external ? (
//                 <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="px-3 hover:text-[#F05A28]">
//                   {item.label}
//                 </a>
//               ) : (
//                 <a key={item.href} href={item.href} className="px-3 hover:text-[#F05A28]">
//                   {item.label}
//                 </a>
//               )
//             )}

//             <a href="#contact" className="px-3">
//               <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-1 text-sm font-bold">
//                 Get in Touch
//               </Button>
//             </a>
//           </nav>
//         )}
//       </div>

//       {mobileOpen && isMobileScreen && (
//         <div className="md:hidden bg-black px-6 py-6 text-white space-y-4 border-t border-gray-700">
//           <a href="#home" className="block hover:text-[#F05A28]" onClick={toggleMobileMenu}>Home</a>

//           {/* Updated Our Companies block */}
//           <div>
//             <a
//               href="#companies"
//               className="w-full flex items-center justify-between py-2 hover:text-[#F05A28]"
//               onClick={toggleMobileMenu}
//             >
//               Our Companies <ChevronDown size={16} />
//             </a>
//             <button
//               className="w-full flex items-center justify-between py-2 hover:text-[#F05A28] text-left"
//               onClick={() => setIsMobileCompaniesExpanded(!isMobileCompaniesExpanded)}
//             >
//               <span className="text-sm pl-2">Expand List of Companies</span> {isMobileCompaniesExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </button>
//             {isMobileCompaniesExpanded && (
//               <div className="pl-4 border-l border-gray-700 mt-2 space-y-2">
//                 {companyLinks.map((company) => (
//                   <a
//                     key={company.href}
//                     href={company.href}
//                     className="block hover:text-[#F05A28]"
//                     onClick={toggleMobileMenu}
//                   >
//                     {company.label}
//                   </a>
//                 ))}
//               </div>
//             )}
//           </div>

//           {navLinks.map((item) =>
//             item.external ? (
//               <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:text-[#F05A28]" onClick={toggleMobileMenu}>
//                 {item.label}
//               </a>
//             ) : (
//               <a key={item.href} href={item.href} className="block hover:text-[#F05A28]" onClick={toggleMobileMenu}>
//                 {item.label}
//               </a>
//             )
//           )}

//           <a href="#contact" onClick={toggleMobileMenu}>
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
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
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
  { label: 'HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED', href: '#hig-agro' },
  { label: 'HERITAGE INDIA MICRO SERVICES FOUNDATION', href: '#hig-micro-services' },
  { label: 'HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED', href: '#hig-media-education' },
  { label: 'HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED', href: '#hig-hotel-resort' },
  { label: 'HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED', href: '#hig-infra-venture' },
  { label: 'HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED', href: '#hig-film-production' },
  { label: 'Kashi Kedarnath', href: '#kashi-kedarnath' },
  { label: 'HIG - Finance', href: '#hig-finance' },
  { label: 'HIG - Mart', href: '#hig-mart' },
  { label: 'HIG - Dasandas Traders', href: '#hig-dasandas-traders' },
  { label: 'HIG - Glam Factory', href: '#hig-glam-factory' },
];

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isCompaniesDropdownOpen, setIsCompaniesDropdownOpen] = useState(false);
  const [isMobileCompaniesExpanded, setIsMobileCompaniesExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleInternalLinkClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
          setMobileOpen(false);
          setIsCompaniesDropdownOpen(false);
          setIsMobileCompaniesExpanded(false);
        }
      }
    };

    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => link.addEventListener('click', handleInternalLinkClick));

    return () => {
      internalLinks.forEach((link) => link.removeEventListener('click', handleInternalLinkClick));
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobileScreen(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen((prevMobileOpen) => {
      if (prevMobileOpen) {
        setIsMobileCompaniesExpanded(false);
      }
      return !prevMobileOpen;
    });
  };

  const handleDropdownToggle = (open) => {
    setIsCompaniesDropdownOpen(open);
  };

  return (
    <div
      className={`w-full z-50 transition-all duration-300 ${
        isSticky ? 'fixed top-0 bg-black text-white shadow-md' : 'relative bg-black text-white'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* ✅ Show logo only when sticky */}
        {isSticky && (
          <a href="#home" className="flex items-center">
            <img src={logo} alt="HIG Logo" className="h-10 md:h-12 rounded-xl" />
          </a>
        )}

        {isMobileScreen && (
          <button
            onClick={toggleMobileMenu}
            className="ml-auto p-2 rounded md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {!isMobileScreen && (
          <nav className="flex items-center space-x-10 text-sm md:text-base font-semibold ml-auto">
            <a href="#home" className="px-3 hover:text-[#F05A28]">Home</a>

            <div
              className="relative"
              onMouseEnter={() => handleDropdownToggle(true)}
              onMouseLeave={() => handleDropdownToggle(false)}
            >
              <a href="#companies" className="px-3 py-2 flex items-center hover:text-[#F05A28] cursor-pointer">
                Our Companies {isCompaniesDropdownOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
              </a>
              {isCompaniesDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 bg-black border border-gray-700 rounded-md shadow-lg py-2 w-max min-w-[250px]">
                  {companyLinks.map((company) => (
                    <a
                      key={company.href}
                      href={company.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700 hover:text-[#F05A28] whitespace-nowrap"
                      onClick={() => handleDropdownToggle(false)}
                    >
                      {company.label}
                    </a>
                  ))}
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

      {mobileOpen && isMobileScreen && (
        <div className="md:hidden bg-black px-6 py-6 text-white space-y-4 border-t border-gray-700">
          <a href="#home" className="block hover:text-[#F05A28]" onClick={toggleMobileMenu}>Home</a>

          <div>
            <a
              href="#companies"
              className="w-full flex items-center justify-between py-2 hover:text-[#F05A28]"
              onClick={toggleMobileMenu}
            >
              Our Companies <ChevronDown size={16} />
            </a>
            <button
              className="w-full flex items-center justify-between py-2 hover:text-[#F05A28] text-left"
              onClick={() => setIsMobileCompaniesExpanded(!isMobileCompaniesExpanded)}
            >
              <span className="text-sm pl-2">Expand List</span> {isMobileCompaniesExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {isMobileCompaniesExpanded && (
              <div className="pl-4 border-l border-gray-700 mt-2 space-y-2">
                {companyLinks.map((company) => (
                  <a
                    key={company.href}
                    href={company.href}
                    className="block hover:text-[#F05A28]"
                    onClick={toggleMobileMenu}
                  >
                    {company.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((item) =>
            item.external ? (
              <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:text-[#F05A28]" onClick={toggleMobileMenu}>
                {item.label}
              </a>
            ) : (
              <a key={item.href} href={item.href} className="block hover:text-[#F05A28]" onClick={toggleMobileMenu}>
                {item.label}
              </a>
            )
          )}

          <a href="#contact" onClick={toggleMobileMenu}>
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
