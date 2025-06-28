import React from 'react';

const Navigation = ({ activeSection, scrollToSection, setShowConsultationForm }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-[#112137]/95 to-[#1d395e]/95 border-b border-[#FEACC6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="DreamDay.png" 
              alt="DreamDay Logo" 
              className="h-14 w-auto"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] bg-clip-text text-transparent hidden">
              DREAMDAY
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'weddings', label: 'Weddings' },
              { id: 'corporate', label: 'Corporate' },
              { id: 'social', label: 'Social' },
              { id: 'launches', label: 'Launches' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-white hover:text-[#FEACC6] transition-colors duration-300 font-medium ${
                  activeSection === id ? 'text-[#FEACC6]' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowConsultationForm(true)}
            className="bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 font-bold shadow-lg"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;