import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../assets/logo.png';
import { useIsMobile } from '@/hooks/use-mobile';
// import { companies } from '@/components/CompaniesShowcase';
import { companies } from '@/data/companies';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Companies', href: '#companies' },
  { label: 'Gallery', href: '/gallery', external: true },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Career', href: '/career', external: true },
  { label: 'Inquiry', href: '#inquiry' },
];

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const formattedDateTime = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(currentTime);

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'
    }`;

  return (
    <nav className={navClass} role="navigation" aria-label="Main Navigation">
      <div className="w-full overflow-x-clip">
        <div className="w-full px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-44">
          <div className="max-w-screen-2xl mx-auto flex flex-col pt-2">
            {!isMobile && (
              <div className="pb-4">
                <div className="flex items-center justify-between w-full gap-x-4">
                  <div className="flex items-center flex-shrink-0 pr-4">
                    <a href="#home" className="flex items-center gap-2">
                      <img
                        src={logo}
                        alt="Logo"
                        className={`${isSticky ? 'h-16' : 'h-20'
                          } max-w-[200px] rounded-xl transition-all duration-300`}
                      />
                      {isSticky && (
                        <div className="text-sm">
                          <h1 className="font-[Times_New_Roman] font-semibold text-lg md:text-xl tracking-wide leading-snug">
                            Heritage India Group
                          </h1>
                          <p className="mt-1 italic font-serif font-semibold tracking-tight leading-none text-gray-400 text-[12px] md:text-sm">
                            शक्ति, प्रगति, विजय
                          </p>
                        </div>
                      )}
                    </a>
                  </div>

                  <div
                    className={`flex flex-col w-full transition-all duration-300 ${isSticky ? 'pt-2 pb-2' : 'pt-3 pb-4'
                      }`}
                  >
                    {!isSticky && (
                      <div className="flex justify-between text-sm border-b border-white/60 pb-2">
                        <div>{formattedDateTime}</div>
                        <div className="flex gap-4 items-center">
                          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-[#F05A28]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.255 3h2.91l-6.358 7.273 7.488 10.727h-5.878l-4.597-6.607-5.26 6.607H3l6.744-7.572L2.833 3h6.08l4.13 5.934L18.255 3z" />
                            </svg>
                          </a>
                          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#F05A28]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM2 9h6v13H2zM9 9h5.6v1.8h.08c.78-1.4 2.6-2.3 4.25-2.3 4.55 0 5.4 3 5.4 6.9V22H18v-5.7c0-1.36-.02-3.11-1.9-3.11-1.9 0-2.2 1.48-2.2 3v5.81H9z" />
                            </svg>
                          </a>
                          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#F05A28]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22 12a10 10 0 10-11.62 9.87v-6.99H8v-2.88h2.38V9.41c0-2.35 1.4-3.64 3.54-3.64 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.17 0-1.54.73-1.54 1.48v1.78h2.63l-.42 2.88h-2.21V22A10 10 0 0022 12z" />
                            </svg>
                          </a>
                          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#F05A28]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21.8 8.001a2.75 2.75 0 00-1.938-1.948C18.187 6 12 6 12 6s-6.187 0-7.862.053A2.75 2.75 0 002.2 8.001C2 9.676 2 12 2 12s0 2.324.2 3.999a2.75 2.75 0 001.938 1.948C5.813 18 12 18 12 18s6.187 0 7.862-.053a2.75 2.75 0 001.938-1.948C22 14.324 22 12 22 12s0-2.324-.2-3.999zM10 14.5v-5l5 2.5-5 2.5z" />
                            </svg>
                          </a>
                          {/* WhatsApp */}
                          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#F05A28]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.37 0 0 5.3 0 11.8c0 2.07.55 4.04 1.59 5.79L0 24l6.52-1.7a12.5 12.5 0 005.48 1.28h.01c6.63 0 12-5.3 12-11.8S18.63 0 12 0zm0 21.9c-1.72 0-3.4-.45-4.88-1.3l-.35-.2-3.87 1.01 1.03-3.76-.22-.38A9.83 9.83 0 012.3 11.8c0-5.4 4.82-9.8 10.7-9.8s10.7 4.4 10.7 9.8-4.81 9.8-10.7 9.8zm5.64-7.26c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.5.15-.17.2-.28.3-.47.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02s-.52.07-.8.37c-.27.3-1.06 1.04-1.06 2.53s1.09 2.93 1.25 3.13c.15.2 2.14 3.28 5.2 4.45.73.31 1.3.5 1.74.64.73.23 1.39.2 1.9.13.58-.08 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.56-.35z" />
                            </svg>
                          </a>

                          {/* Instagram */}
                          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#F05A28]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5a5 5 0 110-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-.25a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between items-center pt-3">
                      <div className="flex gap-5 text-base items-center flex-wrap">
                        {navLinks.map((item) => {
                          if (item.label === 'Our Companies') {
                            return (
                              <div key={item.href} className="relative group">
                                <a
                                  href={item.href}
                                  className="hover:text-[#F05A28] px-2 py-1 flex items-center gap-1"
                                >
                                  {item.label}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </a>
                                <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col bg-white shadow-xl rounded-lg z-40 min-w-[250px] border border-gray-200 text-black max-h-[400px] overflow-y-auto">
                                  {companies.map((comp) => (
                                    <a
                                      key={comp.slug}
                                      href={`/companies/${comp.slug}`}
                                      className="px-3 py-2 hover:bg-gray-100 text-sm border-b last:border-b-0"
                                    >
                                      {comp.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            );
                          }
                          return item.external ? (
                            <a
                              key={item.href}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#F05A28] px-2 py-1"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <a
                              key={item.href}
                              href={item.href}
                              className="hover:text-[#F05A28] px-2 py-1"
                            >
                              {item.label}
                            </a>
                          );
                        })}
                      </div>
                      <a href="#contact" className="ml-3">
                        <Button
                          className={`rounded-full px-4 py-1 text-base font-normal border ${isSticky
                              ? 'bg-transparent text-black border-black hover:bg-gray-100'
                              : 'bg-transparent text-white border-white hover:bg-white hover:text-black'
                            }`}
                        >
                          Contact Us
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isMobile && (
              <div className="flex items-center justify-between py-1">
                <a href="#home" className="flex items-center gap-2">
                  <img src={logo} alt="Logo" className="h-14 rounded-xl" />
                  {isSticky && (
                    <div className="text-xs leading-tight">
                      <h1 className="font-[Times_New_Roman] font-semibold text-sm tracking-wide leading-snug">
                        Heritage India Group
                      </h1>
                      <p className="mt-1 italic font-serif font-semibold text-gray-500 text-[10px]">
                        शक्ति, प्रगति, विजय
                      </p>
                    </div>
                  )}
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2"
                >
                  {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            )}

            {isMobile && isMobileMenuOpen && (
              <div className="fixed inset-0 bg-white text-black p-6 z-50 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="mt-4 flex flex-col gap-3">
                  {navLinks.map((item) => {
                    if (item.label === 'Our Companies') {
                      return (
                        <div key={item.href}>
                          <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="flex items-center justify-between w-full text-left hover:text-[#F05A28]"
                          >
                            {item.label}
                            {showDropdown ? (
                              <ChevronUp size={18} />
                            ) : (
                              <ChevronDown size={18} />
                            )}
                          </button>
                          {showDropdown && (
                            <div className="ml-4 mt-2 flex flex-col gap-1">
                              {companies.map((comp) => (
                                <a
                                  key={comp.slug}
                                  href={`/companies/${comp.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-sm hover:text-[#F05A28]"
                                >
                                  {comp.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    return item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="hover:text-[#F05A28]"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="hover:text-[#F05A28]"
                      >
                        {item.label}
                      </a>
                    );
                  })}
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full mt-2 bg-black text-white hover:bg-gray-800">
                      Contact Us
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;


