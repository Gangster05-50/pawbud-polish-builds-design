
import React from 'react';
import { Building, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-pawbud-blue text-white">
      <div className="container mx-auto py-10 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Building className="text-pawbud-yellow h-8 w-8" />
              <span className="font-bold text-white text-2xl">ELEKTROGO</span>
            </div>
            <p className="text-white/80 mb-4">
              Profesjonalne usługi budowlane na terenie całej Polski.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pawbud-yellow">Nawigacja</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><a href="#" className="text-white/80 hover:text-pawbud-yellow transition duration-300">Strona główna</a></li>
              <li><a href="#uslugi" className="text-white/80 hover:text-pawbud-yellow transition duration-300">Usługi</a></li>
              <li><a href="#o-nas" className="text-white/80 hover:text-pawbud-yellow transition duration-300">O nas</a></li>
              <li><a href="#kontakt" className="text-white/80 hover:text-pawbud-yellow transition duration-300">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-pawbud-yellow">Kontakt</h3>
            <ul className="space-y-2 text-white/80">
              <li>SEBASTIAN ZIELIŃSKI</li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+48883956772" className="hover:text-pawbud-yellow transition duration-300">+48 883 956 772</a>
              </li>
              <li>Email: <a href="mailto:mbjpabwjddhtqatf@outlook.com" className="hover:text-pawbud-yellow transition duration-300">mbjpabwjddhtqatf@outlook.com</a></li>
              <li>Działamy na terenie całej Polski</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center md:flex md:justify-between md:items-center">
          <p className="text-white/70">© {currentYear} ELEKTROGO. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
