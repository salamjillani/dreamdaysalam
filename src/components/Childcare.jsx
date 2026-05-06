import React from 'react';
import { Shield } from 'lucide-react';
import PackageCard from './PackageCard';

const Childcare = ({ setShowConsultationForm }) => {
  const packages = [
    {
      name: 'Essentials Care',
      price: 'From $450',
      description: 'Ideal for Proposals & Intimate Events — up to 3 hours',
      features: [
        'Licensed caregiver for up to 5 children',
        'Activity kits (coloring, games, puzzles)',
        'Quiet nap area with mats or blankets',
        'Secure sign-in/sign-out system',
        'Private, designated onsite area'
      ],
      colorScheme: 'rose'
    },
    {
      name: 'Signature Kids Zone',
      price: 'From $950',
      description: 'Perfect for Weddings & Engagement Parties — 4–5 hours',
      features: [
        '2 licensed caregivers (up to 12 children)',
        'Decor-themed mini kids\' lounge or tent setup',
        'Interactive stations: crafts, storytime, games',
        'Kid-friendly snack station + water',
        'Photo corner with props & safety wristbands'
      ],
      colorScheme: 'purple'
    },
    {
      name: 'Luxury Experience',
      price: 'From $1,750',
      description: 'For High-End & Full-Service Events — up to 6 hours',
      features: [
        '3+ CPR-certified caregivers (up to 20 children)',
        'Branded activity kits matching event theme',
        'Entertainment: puppet shows, balloon artists, mini movies',
        'Gourmet snack bar & hydration station',
        'Take-home gift bags & parent SMS check-ins'
      ],
      colorScheme: 'gold'
    }
  ];

  return (
    <section id="childcare" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-[#05172A]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex p-6 rounded-full mb-8 shadow-2xl">
            <img src="tree.png" alt="Tree" className="w-20 h-20 object-contain" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel-bold bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
            Little Guests,<br />Big Care
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#ffdee9] max-w-3xl mx-auto leading-relaxed font-montserrat-light px-4 sm:px-6">
            When your event calls for full attention and uninterrupted joy, let us take care of your littlest guests. Our child care services are provided by a trusted third-party team of licensed professionals—so you and your guests can relax, connect, and celebrate fully.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {packages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} setShowConsultationForm={setShowConsultationForm} />
          ))}
        </div>

        <div className="flex items-start gap-3 max-w-3xl mx-auto bg-white/5 border border-[#FEACC6]/20 rounded-2xl px-6 py-4">
          <Shield className="w-5 h-5 text-[#FEACC6] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#ffdee9]/70 font-montserrat-light leading-relaxed">
            <span className="text-[#FEACC6]">Note:</span> All services are coordinated in partnership with licensed and insured child care professionals. Additional staff or hours available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Childcare;