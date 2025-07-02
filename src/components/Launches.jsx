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
    },
    {
      name: 'Signature Launch',
      price: '$9,000',
      description: 'Media rollout, influencer management',
      features: ['Media rollout', 'Influencer management', 'Social media strategy', 'Premium venues'],
    },
    {
      name: 'Elite Launch',
      price: '$16,000',
      description: 'National campaigns, large-scale activations',
      features: ['National campaigns', 'Large-scale activations', 'Celebrity coordination', 'Multi-city events'],
    }
  ];

  return (
    <section id="launches" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#295185]/20 via-[#fd7aa3]/5 to-[#FEACC6]/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-gradient-to-br from-[#295185] to-[#fd7aa3] rounded-3xl mb-6 shadow-lg">
            <Rocket className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-5xl font-cinzel-bold text-white mb-6">Brand, Product, and Service Launches</h2>
          <p className="text-xl text-[#ffdee9] max-w-3xl mx-auto leading-relaxed font-montserrat-light whitespace-nowrap">
            DreamDay orchestrates unforgettable launches that make lasting impressions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <PackageCard 
              key={idx}
              pkg={pkg}
              icon={Rocket}
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

export default Launches;