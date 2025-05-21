
import React from 'react';
import { Building2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-tools">
      <div className="bg-gradient-to-b from-pawbud-blue to-pawbud-darkBlue py-16 md:py-24 px-6 sm:px-10 min-h-[450px] flex items-center relative overflow-hidden">
        {/* Construction themed background elements */}
        <div className="absolute inset-0 z-0">
          {/* Foam can */}
          <div className="absolute top-20 right-10 opacity-10 hidden lg:block">
            <svg width="200" height="200" viewBox="0 0 100 100">
              <rect x="30" y="20" width="40" height="70" rx="5" fill="#FFFFFF"/>
              <rect x="35" y="10" width="30" height="10" rx="2" fill="#FFFFFF"/>
              <path d="M40,20 C40,20 30,30 45,50 C60,70 60,70 65,80" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
            </svg>
          </div>
          
          {/* Toolbox */}
          <div className="absolute bottom-10 left-10 opacity-10 hidden lg:block">
            <svg width="250" height="150" viewBox="0 0 100 60">
              <rect x="10" y="20" width="80" height="40" rx="5" fill="#FFFFFF"/>
              <rect x="20" y="10" width="60" height="10" rx="2" fill="#FFFFFF"/>
              <rect x="20" y="30" width="60" height="2" fill="#d0d0d0"/>
              <circle cx="30" cy="40" r="5" fill="#d0d0d0"/>
              <circle cx="70" cy="40" r="5" fill="#d0d0d0"/>
            </svg>
          </div>
          
          {/* Hammer */}
          <div className="absolute top-1/3 right-1/4 opacity-10 hidden lg:block">
            <svg width="150" height="150" viewBox="0 0 100 100">
              <rect x="40" y="20" width="10" height="60" fill="#FFFFFF"/>
              <rect x="20" y="10" width="40" height="20" rx="3" fill="#FFFFFF"/>
            </svg>
          </div>
        </div>

        <div className="container mx-auto z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-pawbud-yellow h-8 w-8" />
              <h2 className="text-white font-semibold text-xl">ELEKTROGO</h2>
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
      </div>
    </div>
  );
};

export default Hero;
