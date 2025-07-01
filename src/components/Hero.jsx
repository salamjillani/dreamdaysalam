import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section 
      id="hero" 
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(DreamDay.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 w-full">
        <button
          onClick={() => scrollToSection('weddings')}
          className="group bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] text-xl px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#fd7aa3]/25 font-bold"
        >
          Plan Your Perfect Day
          <ChevronDown className="inline-block ml-2 w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;