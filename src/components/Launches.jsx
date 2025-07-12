// Launches.jsx
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
      colorScheme: 'rose' // Rose theme for first package
    },
    {
      name: 'Signature Launch',
      price: '$9,000',
      description: 'Media rollout, influencer management',
      features: ['Media rollout', 'Influencer management', 'Social media strategy', 'Premium venues'],
      colorScheme: 'purple' // Purple theme for second package
    },
    {
      name: 'Elite Launch',
      price: '$16,000',
      description: 'National campaigns, large-scale activations',
      features: ['National campaigns', 'Large-scale activations', 'Celebrity coordination', 'Multi-city events'],
      colorScheme: 'gold' // Gold theme for third package
    }
  ];

  return (
    <section id="launches" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#295185]/20 via-[#fd7aa3]/5 to-[#FEACC6]/10"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Icon container */}
          <div className="inline-flex p-2 sm:p-3 md:p-4 bg-gradient-to-br from-[#295185] to-[#fd7aa3] rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 shadow-lg">
            <Rocket className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
          </div>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-cinzel-bold text-white mb-4 sm:mb-6 px-2 leading-tight">
            Brand, Product, and Service Launches
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#ffdee9] max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto leading-relaxed font-montserrat-light px-4 sm:px-6 md:px-8">
            DreamDay orchestrates unforgettable launches that make lasting impressions.
          </p>
        </div>
        
        {/* Package cards grid */}
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
      
      {/* Decorative elements - responsive positioning and sizing */}
      <div className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-4 sm:left-6 md:left-8 lg:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/15 rounded-full"></div>
      
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 right-4 sm:right-6 md:right-8 lg:right-10 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#ffdee9]/20 to-[#FEACC6]/15 rounded-full"></div>
      
      <div className="absolute top-1/3 sm:top-1/2 left-1/6 sm:left-1/5 md:left-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#fd7aa3]/20 to-[#295185]/15 rounded-full"></div>
      
      {/* Additional decorative elements for larger screens */}
      <div className="hidden md:block absolute top-3/4 right-1/5 w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-[#295185]/15 to-[#FEACC6]/10 rounded-full"></div>
      
      <div className="hidden lg:block absolute bottom-1/3 left-1/12 w-8 h-8 xl:w-12 xl:h-12 bg-gradient-to-br from-[#ffdee9]/25 to-[#fd7aa3]/10 rounded-full"></div>
    </section>
  );
};

export default Launches;