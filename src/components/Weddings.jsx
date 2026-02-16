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
      colorScheme: 'rose'
    },
    {
      name: 'Grandeur Package',
      price: '$8,500',
      description: 'Full-service planning, vendor management, luxury touches',
      features: ['Full-service planning', 'Vendor management', 'Luxury touches', 'Multi-day coordination'],
      colorScheme: 'purple'
    },
    {
      name: 'Legacy Package',
      price: '$15,000',
      description: 'Multi-day custom events, international coordination',
      features: ['Multi-day events', 'International coordination', 'Custom experiences', 'VIP services'],
      colorScheme: 'gold'
    }
  ];

  return (
    <section id="weddings" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-[#05172A]">
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
    </section>
  );
};

export default Weddings;
