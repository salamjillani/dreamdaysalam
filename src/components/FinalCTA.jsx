import React from 'react';
import { Star, Calendar } from 'lucide-react';

const FinalCTA = ({ setShowConsultationForm }) => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffdee9]/20 via-[#FEACC6]/10 to-[#fd7aa3]/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex p-6 bg-gradient-to-br from-[#FEACC6] to-[#fd7aa3] rounded-full mb-8 shadow-2xl">
          <Star className="w-20 h-20 text-[#112137]" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
         Host an Unforgettable Event with DreamDay Event Planning and Management
        </h2>
        <button
          onClick={() => setShowConsultationForm(true)}
          className="group bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] text-2xl px-16 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#fd7aa3]/25 font-bold"
        >
          Book a Consultation
          <Calendar className="inline-block ml-3 w-8 h-8 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;