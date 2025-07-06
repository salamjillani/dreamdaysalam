import React from 'react';
import { CheckCircle } from 'lucide-react';

const PackageCard = ({ pkg, setShowConsultationForm }) => {
  // Define color schemes for each package
  const colorSchemes = {
    rose: {
      background: 'from-rose-900/20 to-pink-800/30',
      border: 'border-rose-300/30 hover:border-pink-400/50',
      hoverOverlay: 'from-rose-200/10 to-pink-300/20',
      priceGradient: 'from-rose-300 to-pink-400',
      buttonGradient: 'from-rose-300 to-pink-400 hover:from-pink-400 hover:to-rose-300',
      shadowHover: 'hover:shadow-pink-400/30',
      textAccent: 'text-rose-200/90'
    },
    purple: {
      background: 'from-purple-900/20 to-violet-800/30',
      border: 'border-purple-300/30 hover:border-violet-400/50',
      hoverOverlay: 'from-purple-200/10 to-violet-300/20',
      priceGradient: 'from-purple-300 to-violet-400',
      buttonGradient: 'from-purple-300 to-violet-400 hover:from-violet-400 hover:to-purple-300',
      shadowHover: 'hover:shadow-violet-400/30',
      textAccent: 'text-purple-200/90'
    },
    gold: {
      background: 'from-amber-900/20 to-yellow-800/30',
      border: 'border-amber-300/30 hover:border-yellow-400/50',
      hoverOverlay: 'from-amber-200/10 to-yellow-300/20',
      priceGradient: 'from-amber-300 to-yellow-400',
      buttonGradient: 'from-amber-300 to-yellow-400 hover:from-yellow-400 hover:to-amber-300',
      shadowHover: 'hover:shadow-yellow-400/30',
      textAccent: 'text-amber-200/90'
    }
  };

  const colors = colorSchemes[pkg.colorScheme] || colorSchemes.rose;

  return (
    <div className={`group relative bg-gradient-to-br ${colors.background} backdrop-blur-md rounded-3xl p-8 border ${colors.border} transition-all duration-700 hover:scale-105 hover:shadow-2xl ${colors.shadowHover} overflow-hidden`}>
             
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`}></div>
             
      <div className="relative z-20">
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-2xl shadow-lg">
            <img 
              src="tree.png"
              alt="Tree icon"
              className="w-10 h-10 object-contain"
            />
          </div>
          <span className={`text-3xl font-cinzel-semibold bg-gradient-to-r ${colors.priceGradient} bg-clip-text text-transparent`}>
            {pkg.price}
          </span>
        </div>
                
        <h3 className="text-2xl font-cinzel-medium text-white mb-4">{pkg.name}</h3>
                
        <p className={`${colors.textAccent} mb-6 leading-relaxed font-montserrat-light`}>{pkg.description}</p>
                
        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-white/90">
              <CheckCircle className={`w-5 h-5 ${colors.priceGradient.includes('rose') ? 'text-rose-300' : colors.priceGradient.includes('purple') ? 'text-purple-300' : 'text-amber-300'} mr-3 flex-shrink-0`} />
              <span className="text-sm font-montserrat-light">{feature}</span>
            </li>
          ))}
        </ul>
                
        <button 
          onClick={() => setShowConsultationForm(true)}
          className={`w-full bg-gradient-to-r ${colors.buttonGradient} text-[#112137] font-cinzel-semibold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-lg`}
        >
          Select Package
        </button>
      </div>
    </div>
  );
};

export default PackageCard;