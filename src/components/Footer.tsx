import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const companyLinks = [
    "HIG - HERITAGE INDIA AGRO PRODUCER COMPANY LIMITED",
    "HIG - HERITAGE INDIA MICRO SERVICES FOUNDATION",
    "HIG – HERITAGE MEDIA AND EDUCATION PRIVATE LIMITED",
    "HIG - HERITAGE INDIA HOTEL & RESORT PRIVATE LIMITED",
    "HIG - HERITAGE INDIA INFRA VENTURE PRIVATE LIMITED",
    "HIG - HERITAGE INDIA FILM PRODUCTION PRIVATE LIMITED",
    "HIG - Kashi Kedarnath",
    "HIG - Finance",
    "HIG - Mart",
    "HIG - Dasandas Traders",
    "HIG - Glam Factory"
  ];

  const quickLinks = [
    { name: t('about'), href: "#about" },
    { name: t('companies'), href: "#companies" },
    { name: t('career'), href: "#career" },
    { name: "Investor Relations", href: "#investor" },
    { name: "News & Media", href: "#news" },
    { name: t('contact'), href: "#contact" }
  ];

  const handleCompanyClick = (e) => {
    e.preventDefault();
    alert('Under development');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Heritage India Group Logo" 
                  className="w-10 h-10 rounded-lg object-contain" 
                />
                <div>
                  <h3 className="text-xl font-bold">{t('heritageIndiaGroup')}</h3>
                  <p className="text-sm text-gray-400">{t('शक्ति, प्रगति, विजय')}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                A diversified conglomerate committed to excellence, innovation, and sustainable growth 
                across multiple industries in India.
              </p>
            </div>

            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-blue-600"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Our Companies */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">{t('companies')}</h4>
            <div className="grid gap-2">
              {companyLinks.slice(0, 6).map((company, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={handleCompanyClick}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {company}
                </a>
              ))}
            </div>
          </div>

          {/* More Companies */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">{t('moreCompanies')}</h4>
            <div className="grid gap-2">
              {companyLinks.slice(6).map((company, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={handleCompanyClick}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {company}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">{t('quickLinks')}</h4>
            <div className="grid gap-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4">
              <h5 className="text-sm font-semibold text-gray-400 mb-2">{t('contactInfo')}</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>{t('heritageIndiaGroup')}</p>
                <p>Tea estate, near Durga temple,Banjarawala chowk, dehradun 248001,Uttarakhand, India</p>
                <p>Phone: +91 8418878887</p>
                <p>Email: admin@heritageindiagroup.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">&copy; 2024 Heritage India Group. {t('allRightsReserved')}</p>

            <div className="flex items-center gap-6">
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#privacy" className="hover:text-white">{t('privacyPolicy')}</a>
                <a href="#terms" className="hover:text-white">{t('termsOfService')}</a>
                <a href="#sitemap" className="hover:text-white">{t('sitemap')}</a>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;