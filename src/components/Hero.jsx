import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffdee9]/20 via-[#FEACC6]/10 to-[#fd7aa3]/20"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-[#ffdee9] to-[#FEACC6] bg-clip-text text-transparent mb-6 tracking-tight">
          DREAMDAY
        </h1>
        <p className="text-2xl md:text-3xl text-[#ffdee9] mb-8 font-light">
          Every Detail, Perfectly Planned
        </p>
        <button
          onClick={() => scrollToSection('weddings')}
          className="group bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] text-xl px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#fd7aa3]/25 font-bold"
        >
          Plan Your Perfect Day
          <ChevronDown className="inline-block ml-2 w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
      
      {/* Simplified Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/15 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#ffdee9]/20 to-[#FEACC6]/15 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#fd7aa3]/20 to-[#295185]/15 rounded-full"></div>
    </section>
  );
};

export default Hero;