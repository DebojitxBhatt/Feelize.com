import React, { useState } from 'react';
import { Menu, X, Code2, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
      setIsMenuOpen(false); // Close mobile menu after clicking
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
            <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={handleLogoClick}
            aria-label="Go to top"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Feelize
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('featured-services')} className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('about-us')} className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group">
              About us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('technologies')} className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group">
              Technologies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group">
              How it works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('process')} className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 group">
              <span>Start Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
      </nav>

          {/* Mobile menu button */}
              <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('featured-services')} className="text-gray-700 hover:text-purple-600 hover:translate-x-2 transition-all duration-300 font-medium text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('about-us')} className="text-gray-700 hover:text-purple-600 hover:translate-x-2 transition-all duration-300 font-medium text-left">
                About us
              </button>
              <button onClick={() => scrollToSection('technologies')} className="text-gray-700 hover:text-purple-600 hover:translate-x-2 transition-all duration-300 font-medium text-left">
                Technologies
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-purple-600 hover:translate-x-2 transition-all duration-300 font-medium text-left">
                How it works
              </button>
              <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-purple-600 hover:translate-x-2 transition-all duration-300 font-medium text-left">
                Process
            </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 group w-fit">
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </nav>
          </div>
        )}
        </div>
    </header>
  );
};

export default Header;