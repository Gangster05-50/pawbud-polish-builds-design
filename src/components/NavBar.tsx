
import React from 'react';
import { Building } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-pawbud-blue py-4 px-6 sm:px-10 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Building className="text-pawbud-yellow h-8 w-8" />
          <span className="font-bold text-white text-2xl">ELEKTROGO</span>
        </div>
        
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#uslugi" className="hover:text-pawbud-yellow transition duration-300">Usługi</a>
          <a href="#o-nas" className="hover:text-pawbud-yellow transition duration-300">O Nas</a>
          <a href="#kontakt" className="hover:text-pawbud-yellow transition duration-300">Kontakt</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
