
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const companyLinks = [
    "Heritage Construction", "Heritage Manufacturing", "Heritage Logistics", "Heritage Healthcare",
    "Heritage Real Estate", "Heritage Energy", "Heritage Agriculture", "Heritage Retail",
    "Heritage Education", "Heritage Travel", "Heritage Foods", "Heritage Security"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Companies", href: "#companies" },
    { name: "Careers", href: "#careers" },
    { name: "Investor Relations", href: "#investor" },
    { name: "News & Media", href: "#news" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Heritage India Group</h3>
                  <p className="text-sm text-gray-400">Building Tomorrow's Legacy</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A diversified conglomerate committed to excellence, innovation, and sustainable growth 
                across multiple industries in India.
              </p>
            </div>
            
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-blue-600">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-blue-600">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-blue-600">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-blue-600">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Our Companies */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">Our Companies</h4>
            <div className="grid grid-cols-1 gap-2">
              {companyLinks.slice(0, 6).map((company, index) => (
                <a 
                  key={index} 
                  href={`https://${company.toLowerCase().replace(' ', '-')}.com`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company}
                </a>
              ))}
            </div>
          </div>

          {/* More Companies */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">More Companies</h4>
            <div className="grid grid-cols-1 gap-2">
              {companyLinks.slice(6).map((company, index) => (
                <a 
                  key={index} 
                  href={`https://${company.toLowerCase().replace(' ', '-')}.com`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-gray-400 mb-2">Contact Info</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Heritage Tower, Sector 62</p>
                <p>Noida, UP 201309, India</p>
                <p>Phone: +91 120 4567890</p>
                <p>Email: info@heritageindiagroup.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 Heritage India Group. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
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
