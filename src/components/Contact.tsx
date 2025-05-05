
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="kontakt" className="py-20 px-6 sm:px-10 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pawbud-blue mb-4">Kontakt</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Skontaktuj się z nami, aby omówić Twój projekt lub otrzymać bezpłatną wycenę.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-md border-pawbud-blue/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-pawbud-blue">Wyślij wiadomość</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                    <Input id="name" placeholder="Twoje imię i nazwisko" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input id="email" type="email" placeholder="Twój adres email" className="w-full" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Temat</label>
                  <Input id="subject" placeholder="Temat wiadomości" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                  <Textarea id="message" placeholder="Twoja wiadomość" className="w-full min-h-[150px]" />
                </div>
                
                <Button type="submit" className="w-full bg-pawbud-blue hover:bg-pawbud-darkBlue text-white">
                  Wyślij wiadomość
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8 flex items-center">
              <Building2 className="h-12 w-12 text-pawbud-yellow mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-pawbud-blue">PAWBUD</h3>
                <p className="text-gray-600">Profesjonalne usługi budowlane</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Dane kontaktowe</h4>
                <p className="text-gray-600">
                  <strong>Właściciel:</strong> Paweł Kiedrowski
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> trevorkaur@op.pl
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Obszar działania</h4>
                <p className="text-gray-600">
                  Działamy na terenie całej Polski.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Godziny pracy</h4>
                <p className="text-gray-600">
                  Poniedziałek - Piątek: 8:00 - 18:00<br />
                  Sobota: 9:00 - 14:00
                </p>
              </div>
              
              <div className="pt-4">
                <Button className="bg-pawbud-yellow text-pawbud-darkBlue hover:bg-pawbud-lightYellow">
                  <a href="mailto:trevorkaur@op.pl">Napisz do nas</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
