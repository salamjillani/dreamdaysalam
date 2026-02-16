import React from 'react';
import { Briefcase } from 'lucide-react';
import PackageCard from './PackageCard';

const Corporate = ({ setShowConsultationForm }) => {
  const packages = [
    {
      name: 'Signature Soiree',
      price: '$4,500',
      description: 'Professional themes, tech setup, guest management',
      features: ['Professional themes', 'Tech setup', 'Guest management', 'Brand integration'],
      colorScheme: 'rose'
    },
    {
      name: 'Prestige Package',
      price: '$7,500',
      description: 'Full brand integration, team-building activities',
      features: ['Full brand integration', 'Team-building activities', 'Executive coordination', 'Media management'],
      colorScheme: 'purple'
    },
    {
      name: 'Executive Retreat',
      price: '$12,000',
      description: 'Luxury venues, executive experiences',
      features: ['Luxury venues', 'Executive experiences', 'Premium catering', 'Concierge services'],
      colorScheme: 'gold'
    }
  ];

  return (
    <section id="corporate" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-[#05172A]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex p-6 rounded-full mb-8 shadow-2xl">
            <img 
              src="tree.png" 
              alt="Tree" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel-bold text-white mb-4 sm:mb-6 px-2">
            Corporate Events
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#ffdee9] max-w-3xl mx-auto leading-relaxed font-montserrat-light px-4 sm:px-6">
            DreamDay designs corporate experiences that inspire, impress, and deliver impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, idx) => (
            <PackageCard 
              key={idx} 
              pkg={pkg} 
              icon={Briefcase} 
              setShowConsultationForm={setShowConsultationForm}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Corporate;
