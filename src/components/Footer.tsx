
import React from 'react';
import { Building } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pawbud-blue text-white">
      <div className="container mx-auto py-12 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Building className="text-pawbud-yellow h-8 w-8" />
              <span className="font-bold text-white text-2xl">PAWBUD</span>
            </div>
            <p className="text-white/80 mb-4">
              Profesjonalne usługi budowlane na terenie całej Polski. Oferujemy kompleksową realizację projektów budowlanych.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pawbud-yellow">Usługi</h3>
            <ul className="space-y-2 text-white/80">
              <li>Realizacja projektów budowlanych</li>
              <li>Pokrycia dachowe</li>
              <li>Tynkowanie i malowanie</li>
              <li>Roboty instalacyjne i wykończeniowe</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pawbud-yellow">Nawigacja</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-pawbud-yellow transition duration-300">Strona główna</a></li>
              <li><a href="#uslugi" className="text-white/80 hover:text-pawbud-yellow transition duration-300">Usługi</a></li>
              <li><a href="#o-nas" className="text-white/80 hover:text-pawbud-yellow transition duration-300">O nas</a></li>
              <li><a href="#realizacje" className="text-white/80 hover:text-pawbud-yellow transition duration-300">Realizacje</a></li>
              <li><a href="#kontakt" className="text-white/80 hover:text-pawbud-yellow transition duration-300">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pawbud-yellow">Kontakt</h3>
            <ul className="space-y-2 text-white/80">
              <li>Paweł Kiedrowski</li>
              <li>Email: trevorkaur@op.pl</li>
              <li>Działamy na terenie całej Polski</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">© {currentYear} PAWBUD. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/70 hover:text-pawbud-yellow transition duration-300">Polityka prywatności</a>
            <a href="#" className="text-white/70 hover:text-pawbud-yellow transition duration-300">Warunki korzystania</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
