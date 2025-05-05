
import React from 'react';
import { Hammer, Paintbrush, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <Card className="border border-pawbud-blue/10 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
    <CardHeader className="pb-2">
      <div className="mb-4 bg-pawbud-blue/10 p-3 rounded-full w-fit">
        {icon}
      </div>
      <CardTitle className="text-xl font-bold text-pawbud-blue">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <Hammer className="h-12 w-12 text-pawbud-blue" />,
      title: "Pokrycia dachowe",
      description: "Profesjonalne wykonanie różnego rodzaju pokryć dachowych z wykorzystaniem najwyższej jakości materiałów."
    },
    {
      icon: <Paintbrush className="h-12 w-12 text-pawbud-blue" />,
      title: "Tynkowanie i malowanie",
      description: "Usługi tynkarskie i malarskie wykonywane z dbałością o detale. Oferujemy szeroki wybór wykończeń."
    },
    {
      icon: <Wrench className="h-12 w-12 text-pawbud-blue" />,
      title: "Roboty instalacyjne i wykończeniowe",
      description: "Kompleksowe wykonanie instalacji oraz prac wykończeniowych we wnętrzach."
    }
  ];

  return (
    <section id="uslugi" className="py-16 px-6 sm:px-10 gradient-blue-yellow relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden z-0">
        <div className="absolute top-10 left-10">
          <svg width="180" height="180" viewBox="0 0 100 100">
            <path d="M30,20 L45,20 L45,80 L30,80 Z" fill="#0057B8" />
            <path d="M50,30 L70,30 L70,70 L50,70 Z" fill="#FFD700" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10">
          <svg width="200" height="200" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#0057B8" strokeWidth="3"/>
            <path d="M30,40 L70,40 L70,60 L30,60 Z" fill="#FFD700" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
          <svg width="150" height="150" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="20" fill="#0057B8" />
            <rect x="20" y="45" width="60" height="10" fill="#FFD700" />
            <rect x="20" y="60" width="60" height="20" fill="#0057B8" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pawbud-blue mb-4">Nasze Usługi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferujemy profesjonalne usługi budowlane z gwarancją najwyższej jakości.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
