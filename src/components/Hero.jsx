import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#112137] via-[#295185] to-[#435A79] py-8">
      {/* Landscape Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#295185]/30 via-[#fd7aa3]/10 to-[#FEACC6]/20"></div>
      
      {/* Floating landscape elements */}
      <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-br from-[#FEACC6]/15 to-[#fd7aa3]/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/4 right-32 w-48 h-48 bg-gradient-to-br from-[#ffdee9]/10 to-[#FEACC6]/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-[#fd7aa3]/15 to-[#295185]/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/15 rounded-full blur-lg"></div>
      <div className="absolute bottom-1/3 right-1/2 w-56 h-56 bg-gradient-to-br from-[#295185]/10 to-[#fd7aa3]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 w-full flex flex-col items-center justify-center -mt-16">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <img 
            src="DreamDay.png" 
            alt="DreamDay Logo" 
            className="mx-auto w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-140 lg:h-140 object-contain drop-shadow-2xl"
          />
        </div>
        
        <button
          onClick={() => scrollToSection('weddings')}
          className="group bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#fd7aa3]/25 font-cinzel-semibold"
        >
          <span className="block sm:inline">Plan Your Perfect Day</span>
          <ChevronDown className="inline-block ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
      
      {/* Simplified Floating Elements - Hidden on small screens to reduce clutter */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/15 rounded-full"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#ffdee9]/20 to-[#FEACC6]/15 rounded-full"></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#fd7aa3]/20 to-[#295185]/15 rounded-full"></div>
    </section>
  );
};

export default Hero;