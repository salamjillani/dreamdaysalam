import React from 'react';
import { CheckCircle } from 'lucide-react';

const PackageCard = ({ pkg, icon: Icon, setShowConsultationForm }) => {
  return (
    <div className="group relative bg-gradient-to-br from-[#1d395e]/20 to-[#295185]/30 backdrop-blur-md rounded-3xl p-8 border border-[#FEACC6]/30 hover:border-[#fd7aa3]/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl overflow-hidden">
      
   

    
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffdee9]/10 to-[#fd7aa3]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
      
      <div className="relative z-20">
     
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 bg-gradient-to-br from-[#FEACC6] to-[#fd7aa3] rounded-2xl shadow-lg">
            <Icon className="w-8 h-8 text-[#112137]" />
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] bg-clip-text text-transparent">
            {pkg.price}
          </span>
        </div>
        
    
        <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
        
    
        <p className="text-[#ffdee9]/90 mb-6 leading-relaxed">{pkg.description}</p>
        
      
        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-white/90">
              <CheckCircle className="w-5 h-5 text-[#FEACC6] mr-3 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
      
        <button 
          onClick={() => setShowConsultationForm(true)}
          className="w-full bg-gradient-to-r from-[#FEACC6] to-[#fd7aa3] hover:from-[#fd7aa3] hover:to-[#FEACC6] text-[#112137] font-bold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-[#fd7aa3]/30"
        >
          Select Package
        </button>
      </div>
    </div>
  );
};

export default PackageCard;