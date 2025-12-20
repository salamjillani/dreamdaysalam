import React from 'react';
import { Gift } from 'lucide-react';
import PackageCard from './PackageCard';

const Social = ({ setShowConsultationForm }) => {
  const packages = [
    {
      name: 'Chic Gathering',
      price: '$2,000',
      description: 'Birthdays, showers, intimate events',
      features: ['Intimate settings', 'Personalized themes', 'Guest coordination', 'Photography coordination'],
      colorScheme: 'rose'
    },
    {
      name: 'Lavish Affair',
      price: '$4,500',
      description: 'Milestone events, luxury rentals',
      features: ['Milestone celebrations', 'Luxury rentals', 'Premium vendors', 'Custom décor'],
      colorScheme: 'purple'
    },
    {
      name: 'Signature Soiree',
      price: '$7,000',
      description: 'Custom-themed social events',
      features: ['Custom themes', 'Unique experiences', 'Entertainment coordination', 'VIP treatment'],
      colorScheme: 'gold'
    }
  ];

  return (
    <section id="social" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#295185]/20 via-[#fd7aa3]/5 to-[#FEACC6]/10"></div>

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
            Social Celebrations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#ffdee9] max-w-3xl mx-auto leading-relaxed font-montserrat-light px-4 sm:px-6">
            DreamDay transforms life's moments into unforgettable celebrations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, idx) => (
            <PackageCard 
              key={idx} 
              pkg={pkg} 
              icon={Gift} 
              setShowConsultationForm={setShowConsultationForm}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;