
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
     
    },
    {
      name: 'Prestige Package',
      price: '$7,500',
      description: 'Full brand integration, team-building activities',
      features: ['Full brand integration', 'Team-building activities', 'Executive coordination', 'Media management'],
    
    },
    {
      name: 'Executive Retreat',
      price: '$12,000',
      description: 'Luxury venues, executive experiences',
      features: ['Luxury venues', 'Executive experiences', 'Premium catering', 'Concierge services'],
   
    }
  ];

  return (
    <section id="corporate" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#295185]/20 via-[#1d395e]/10 to-[#112137]/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-gradient-to-br from-[#295185] to-[#1d395e] rounded-3xl mb-6 shadow-lg">
            <Briefcase className="w-16 h-16 text-[#FEACC6]" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Corporate Events</h2>
          <p className="text-xl text-[#ffdee9] max-w-3xl mx-auto leading-relaxed">
            DreamDay designs corporate experiences that inspire, impress, and deliver impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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