import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#112137] via-[#295185] to-[#435A79] py-4 sm:py-8">
      {/* Landscape Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#295185]/30 via-[#fd7aa3]/10 to-[#FEACC6]/20"></div>
      
      {/* Floating landscape elements - Responsive positioning and sizing */}
      <div className="absolute top-8 left-4 sm:top-10 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-[#FEACC6]/15 to-[#fd7aa3]/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/4 right-8 sm:right-32 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-[#ffdee9]/10 to-[#FEACC6]/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-16 left-4 sm:bottom-20 sm:left-1/4 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-br from-[#fd7aa3]/15 to-[#295185]/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/15 rounded-full blur-lg"></div>
      <div className="absolute bottom-1/3 right-1/2 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-br from-[#295185]/10 to-[#fd7aa3]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center -mt-8 sm:-mt-16">
        {/* Main Heading */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-cinzel-semibold text-white drop-shadow-2xl mb-2 sm:mb-4 leading-tight">
            Plan Your Perfect Day
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light px-2 sm:px-4 leading-relaxed">
            Creating unforgettable moments, one dream at a time
          </p>
        </div>
        
        <button
          onClick={() => scrollToSection('weddings')}
          className="group bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] text-sm xs:text-base sm:text-lg md:text-xl px-6 xs:px-8 sm:px-10 md:px-12 py-2.5 xs:py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-[#fd7aa3]/25 font-cinzel-semibold focus:outline-none focus:ring-4 focus:ring-[#fd7aa3]/30"
        >
          <span className="flex items-center justify-center gap-2">
            Get Started
            <ChevronDown className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform" />
          </span>
        </button>
      </div>
      
      {/* Additional Floating Elements - Progressive enhancement for larger screens */}
      <div className="hidden sm:block absolute top-16 left-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/15 rounded-full opacity-60"></div>
      <div className="hidden sm:block absolute bottom-16 right-8 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#ffdee9]/20 to-[#FEACC6]/15 rounded-full opacity-60"></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#fd7aa3]/20 to-[#295185]/15 rounded-full opacity-50"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/3 w-10 h-10 xl:w-14 xl:h-14 bg-gradient-to-br from-[#FEACC6]/25 to-[#fd7aa3]/20 rounded-full opacity-40"></div>
      <div className="hidden xl:block absolute bottom-1/4 left-1/3 w-8 h-8 bg-gradient-to-br from-[#295185]/25 to-[#FEACC6]/20 rounded-full opacity-30"></div>
    </section>
  );
};

export default Hero;