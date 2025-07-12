// Weddings.jsx
import React from 'react';
import { Heart } from 'lucide-react';
import PackageCard from './PackageCard';

const Weddings = ({ setShowConsultationForm }) => {
  const packages = [
    {
      name: 'Bliss Package',
      price: '$5,000',
      description: 'Elegant design, day-of coordination, bridal assistance',
      features: ['Day-of coordination', 'Bridal assistance', 'Elegant design elements', 'Timeline management'],
      colorScheme: 'rose' // Soft pink/rose theme
    },
    {
      name: 'Grandeur Package',
      price: '$8,500',
      description: 'Full-service planning, vendor management, luxury touches',
      features: ['Full-service planning', 'Vendor management', 'Luxury touches', 'Multi-day coordination'],
      colorScheme: 'purple' // Purple/lavender theme
    },
    {
      name: 'Legacy Package',
      price: '$15,000',
      description: 'Multi-day custom events, international coordination',
      features: ['Multi-day events', 'International coordination', 'Custom experiences', 'VIP services'],
      colorScheme: 'gold' // Gold/amber theme
    }
  ];

  return (
    <section id="weddings" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#295185]/20 via-[#fd7aa3]/5 to-[#FEACC6]/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-[#295185] to-[#fd7aa3] rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 shadow-lg">
            <Heart className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#112137]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel-bold text-white mb-4 sm:mb-6 px-2">
            Weddings
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#ffdee9] max-w-3xl mx-auto leading-relaxed font-montserrat-light px-4 sm:px-6">
            From intimate ceremonies to grand celebrations, DreamDay crafts weddings that honor your story.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
      
      {/* Responsive background decorations */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#FEACC6]/20 to-[#fd7aa3]/15 rounded-full"></div>
      <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#ffdee9]/20 to-[#FEACC6]/15 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#fd7aa3]/20 to-[#295185]/15 rounded-full"></div>
    </section>
  );
};

export default Weddings;