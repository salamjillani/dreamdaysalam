import React, { useState } from 'react';

const Navigation = ({ activeSection, scrollToSection, setShowConsultationForm }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'weddings', label: 'WEDDINGS' },
    { id: 'corporate', label: 'CORPORATE' },
    { id: 'social', label: 'SOCIAL' },
    { id: 'launches', label: 'LAUNCHES' }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleConsultationClick = () => {
    setShowConsultationForm(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#344C6E] border-b border-[#FEACC6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="DreamDay.png"
              alt="DreamDay Logo"
              className="h-10 w-auto sm:h-12 md:h-14"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigationItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-white hover:text-[#FEACC6] transition-colors duration-300 font-montserrat-light tracking-wide text-sm xl:text-base ${
                  activeSection === id ? 'text-[#FEACC6]' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop Consultation Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => setShowConsultationForm(true)}
              className="bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-cinzel-medium shadow-lg text-sm"
            >
              BOOK CONSULTATION
            </button>
          </div>

          {/* Mobile Consultation Button (visible on tablet/mobile) */}
          <div className="hidden sm:block lg:hidden">
            <button
              onClick={() => setShowConsultationForm(true)}
              className="bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-cinzel-medium shadow-lg text-xs"
            >
              BOOK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-[#FEACC6] focus:outline-none focus:ring-2 focus:ring-[#FEACC6] transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className=" bg-[#344C6E] border-t border-[#FEACC6]/20 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navigationItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-montserrat-light tracking-wide transition-colors duration-300 ${
                  activeSection === id
                    ? 'text-[#FEACC6] bg-[#FEACC6]/10'
                    : 'text-white hover:text-[#FEACC6] hover:bg-[#FEACC6]/5'
                }`}
              >
                {label}
              </button>
            ))}
            
            {/* Mobile Consultation Button (only on very small screens) */}
            <div className="pt-3">
              <button
                onClick={handleConsultationClick}
                className="w-full bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] px-4 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-cinzel-medium shadow-lg text-sm"
              >
                BOOK CONSULTATION
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;