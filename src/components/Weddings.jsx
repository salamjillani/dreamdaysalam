import React from 'react';
import { Heart, TreeDeciduous, TreeDeciduousIcon, TreePalm, TreePine, Trees, TreesIcon } from 'lucide-react';
import PackageCard from './PackageCard';

const Weddings = ({ setShowConsultationForm }) => {
  const packages = [
    {
      name: 'Bliss Package',
      price: '$5,000',
      description: 'Elegant design, day-of coordination, bridal assistance',
      features: ['Day-of coordination', 'Bridal assistance', 'Elegant design elements', 'Timeline management'],
     
    },
    {
      name: 'Grandeur Package',
      price: '$8,500',
      description: 'Full-service planning, vendor management, luxury touches',
      features: ['Full-service planning', 'Vendor management', 'Luxury touches', 'Multi-day coordination'],
   
    },
    {
      name: 'Legacy Package',
      price: '$15,000',
      description: 'Multi-day custom events, international coordination',
      features: ['Multi-day events', 'International coordination', 'Custom experiences', 'VIP services'],
     
    }
  ];

  return (
    <section id="weddings" className="py-20 relative">
     <div className="absolute inset-0 bg-gradient-to-br from-[#295185]/20 via-[#fd7aa3]/5 to-[#FEACC6]/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-4  bg-gradient-to-br from-[#295185] to-[#fd7aa3] rounded-3xl mb-6 shadow-lg">
            <Heart className="w-16 h-16 text-[#112137]" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Weddings</h2>
          <p className="text-xl text-[#ffdee9] max-w-3xl mx-auto leading-relaxed">
            From intimate ceremonies to grand celebrations, DreamDay crafts weddings that honor your story.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <PackageCard 
              key={idx} 
              pkg={pkg} 
              icon={Heart} 
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

export default Weddings;