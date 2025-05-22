
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="kontakt" className="py-20 px-6 sm:px-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pawbud-blue mb-4">Kontakt</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić Twój projekt lub otrzymać bezpłatną wycenę.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-md border-pawbud-blue/10">
            <CardContent className="p-8">
              <div className="flex flex-col items-center mb-8">
                <Building2 className="h-16 w-16 text-pawbud-yellow mb-4" />
                <h3 className="text-2xl font-bold text-pawbud-blue">ELEKTROGO</h3>
                <p className="text-gray-600">Profesjonalne usługi budowlane</p>
              </div>
              
              <div className="grid gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-pawbud-blue">Dane kontaktowe</h4>
                  <p className="text-gray-700">
                    <strong>Właściciel:</strong> SEBASTIAN ZIELIŃSKI
                  </p>
                  <p className="text-gray-700">
                    <strong>Telefon:</strong> <a href="tel:+48883956772" className="text-pawbud-blue hover:underline flex items-center">
                      <Phone className="h-4 w-4 mr-1 inline" />+48 883 956 772
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> <a href="mailto:mbjpabwjddhtqatf@outlook.com" className="text-pawbud-blue hover:underline">mbjpabwjddhtqatf@outlook.com</a>
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-pawbud-blue">Obszar działania</h4>
                  <p className="text-gray-700">
                    Działamy na terenie całej Polski.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-pawbud-blue">Godziny pracy</h4>
                  <p className="text-gray-700">
                    Poniedziałek - Piątek: 8:00 - 18:00<br />
                    Sobota: 9:00 - 14:00
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <a 
                  href="mailto:mbjpabwjddhtqatf@outlook.com" 
                  className="inline-block bg-pawbud-yellow text-pawbud-darkBlue px-6 py-3 rounded-lg font-medium hover:bg-pawbud-lightYellow transition duration-300"
                >
                  Napisz do nas
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
