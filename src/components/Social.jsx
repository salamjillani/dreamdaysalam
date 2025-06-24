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
     
    },
    {
      name: 'Lavish Affair',
      price: '$4,500',
      description: 'Milestone events, luxury rentals',
      features: ['Milestone celebrations', 'Luxury rentals', 'Premium vendors', 'Custom décor'],
   
    },
    {
      name: 'Signature Soiree',
      price: '$7,000',
      description: 'Custom-themed social events',
      features: ['Custom themes', 'Unique experiences', 'Entertainment coordination', 'VIP treatment'],
    
    }
  ];

  return (
    <section id="social" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fd7aa3]/10 via-[#FEACC6]/5 to-[#ffdee9]/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-gradient-to-br from-[#fd7aa3] to-[#FEACC6] rounded-3xl mb-6 shadow-lg">
            <Gift className="w-16 h-16 text-[#112137]" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Social Celebrations</h2>
          <p className="text-xl text-[#ffdee9] max-w-3xl mx-auto leading-relaxed">
            DreamDay transforms life's moments into unforgettable celebrations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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