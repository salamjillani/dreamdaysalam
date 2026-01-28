import React from 'react';
import { Rocket } from 'lucide-react';
import PackageCard from './PackageCard';

const Launches = ({ setShowConsultationForm }) => {
  const packages = [
    {
      name: 'Essential Launch',
      price: '$5,500',
      description: 'Press coordination, branded visuals',
      features: ['Press coordination', 'Branded visuals', 'Media management', 'Event logistics'],
      colorScheme: 'rose'
    },
    {
      name: 'Signature Launch',
      price: '$9,000',
      description: 'Media rollout, influencer management',
      features: ['Media rollout', 'Influencer management', 'Social media strategy', 'Premium venues'],
      colorScheme: 'purple'
    },
    {
      name: 'Elite Launch',
      price: '$16,000',
      description: 'National campaigns, large-scale activations',
      features: ['National campaigns', 'Large-scale activations', 'Celebrity coordination', 'Multi-city events'],
      colorScheme: 'gold'
    }
  ];

  return (
    <section id="launches" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-[#003151]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex p-6 rounded-full mb-8 shadow-2xl">
            <img 
              src="tree.png" 
              alt="Tree" 
              className="w-20 h-20 object-contain"
            />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cinzel-bold text-white mb-4 sm:mb-6 px-2 leading-tight">
            Brand, Product, and Service Launches
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#ffdee9] max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed font-montserrat-light px-4 sm:px-6 md:px-8">
            DreamDay orchestrates unforgettable launches that make lasting impressions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {packages.map((pkg, idx) => (
            <div key={idx} className="w-full">
              <PackageCard 
                pkg={pkg}
                icon={Rocket}
                setShowConsultationForm={setShowConsultationForm}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Launches;