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
      colorScheme: 'rose' // Rose theme for first package
    },
    {
      name: 'Lavish Affair',
      price: '$4,500',
      description: 'Milestone events, luxury rentals',
      features: ['Milestone celebrations', 'Luxury rentals', 'Premium vendors', 'Custom décor'],
      colorScheme: 'purple' // Purple theme for second package
    },
    {
      name: 'Signature Soiree',
      price: '$7,000',
      description: 'Custom-themed social events',
      features: ['Custom themes', 'Unique experiences', 'Entertainment coordination', 'VIP treatment'],
      colorScheme: 'gold' // Gold theme for third package
    }
  ];

  return (
    <section id="social" className="py-20 relative">
     <div className="absolute inset-0 bg-gradient-to-br from-[#295185]/20 via-[#fd7aa3]/5 to-[#FEACC6]/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-4  bg-gradient-to-br from-[#295185] to-[#fd7aa3] rounded-3xl mb-6 shadow-lg">
            <Gift className="w-16 h-16 text-[#112137]" />
          </div>
          <h2 className="text-5xl font-cinzel-bold text-white mb-6">Social Celebrations</h2>
          <p className="text-xl text-[#ffdee9] max-w-3xl mx-auto leading-relaxed font-montserrat-light">
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
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/15 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-[#ffdee9]/20 to-[#FEACC6]/15 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#fd7aa3]/20 to-[#295185]/15 rounded-full"></div>
    </section>
  );
};

export default Social;


