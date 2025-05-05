
import React from 'react';
import { Building } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="o-nas" className="py-16 px-6 sm:px-10 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-pawbud-blue mb-6">O Nas</h2>
            
            <p className="text-gray-700 mb-6">
              PAWBUD to firma budowlana z bogatym doświadczeniem w branży budowlanej na terenie Polski. 
              Specjalizujemy się w kompleksowej realizacji projektów budowlanych, 
              pokryciach dachowych, tynkowaniu, malowaniu oraz robotach instalacyjnych i wykończeniowych.
            </p>
            
            <p className="text-gray-700 mb-6">
              Nasze usługi charakteryzują się najwyższą jakością wykonania, terminowością oraz indywidualnym 
              podejściem do każdego klienta.
            </p>
            
            <div className="flex items-center pt-4">
              <div className="mr-4">
                <Building className="h-10 w-10 text-pawbud-yellow" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Paweł Kiedrowski</h3>
                <p className="text-gray-600">Właściciel firmy PAWBUD</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 bg-pawbud-blue rounded-full absolute -top-4 -left-4 opacity-10"></div>
              <div className="w-64 h-64 md:w-72 md:h-72 bg-pawbud-yellow rounded-full absolute -bottom-4 -right-4 opacity-10"></div>
              <div className="bg-gradient-to-br from-pawbud-blue to-pawbud-darkBlue rounded-2xl p-1 relative z-10">
                <div className="bg-white p-6 rounded-xl flex flex-col items-center">
                  <Building className="h-14 w-14 text-pawbud-yellow mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-pawbud-blue">PAWBUD</h3>
                  <p className="text-center text-gray-600">
                    Jakość, terminowość i zadowolenie klienta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
