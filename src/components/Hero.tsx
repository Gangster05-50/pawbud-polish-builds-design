
import React from 'react';
import { Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-tools">
      <div className="bg-gradient-to-b from-pawbud-blue to-pawbud-darkBlue py-16 md:py-24 px-6 sm:px-10 min-h-[450px] flex items-center relative overflow-hidden">
        <div className="container mx-auto z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-pawbud-yellow h-8 w-8" />
              <h2 className="text-white font-semibold text-xl">PAWBUD</h2>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow leading-tight">
              Profesjonalne <span className="text-pawbud-yellow">usługi budowlane</span> w całej Polsce
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
              Oferujemy kompleksowe usługi budowlane od projektowania po realizację i wykończenie. 
              Działamy na terenie całej Polski, gwarantując najwyższą jakość i terminowość.
            </p>
          </div>
        </div>

        <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 100 100">
            <path d="M30,10 L70,10 L70,90 L30,90 Z" fill="none" stroke="#FFD700" strokeWidth="2"/>
            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block">
          <svg width="150" height="150" viewBox="0 0 100 100">
            <path d="M40,20 L60,20 L60,80 L40,80 Z" fill="none" stroke="#FFD700" strokeWidth="2"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
