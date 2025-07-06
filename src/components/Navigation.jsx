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
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#344C6E] border-b border-[#FEACC6]/20">
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
            <div className="text-lg sm:text-xl md:text-2xl font-cinzel bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] bg-clip-text text-transparent hidden tracking-wider">
              DREAMDAY
            </div>
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
          <button
            onClick={() => setShowConsultationForm(true)}
            className="hidden sm:block bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] px-4 py-2 sm:px-6 rounded-full transition-all duration-300 transform hover:scale-105 font-cinzel-medium shadow-lg text-xs sm:text-sm md:text-base"
          >
            <span className="hidden md:inline">BOOK CONSULTATION</span>
            <span className="md:hidden">BOOK</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-[#FEACC6] focus:outline-none focus:ring-2 focus:ring-[#FEACC6]"
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-[#344C6E] border-t border-[#FEACC6]/20">
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
          
          {/* Mobile Consultation Button */}
          <div className="pt-3 sm:hidden">
            <button
              onClick={handleConsultationClick}
              className="w-full bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] px-4 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-cinzel-medium shadow-lg text-sm"
            >
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;