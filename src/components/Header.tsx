
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Heritage India Group</h1>
              <p className="text-sm text-gray-600">Building Tomorrow's Legacy</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">Home</a>
            <a href="#companies" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">Our Companies</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">About Us</a>
            <a href="#inquiry" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">Inquiry</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium" onClick={toggleMenu}>Home</a>
              <a href="#companies" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium" onClick={toggleMenu}>Our Companies</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium" onClick={toggleMenu}>About Us</a>
              <a href="#inquiry" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium" onClick={toggleMenu}>Inquiry</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors duration-300 font-medium" onClick={toggleMenu}>Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
