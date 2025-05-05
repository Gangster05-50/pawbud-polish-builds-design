
import React from 'react';
import { Construction, Paintbrush, Hammer, Wrench } from 'lucide-react';
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
      icon: <Construction className="h-6 w-6 text-pawbud-blue" />,
      title: "Realizacja projektów budowlanych",
      description: "Kompleksowa realizacja projektów budowlanych od podstaw. Zajmujemy się całym procesem, od przygotowania terenu po finalne wykończenie."
    },
    {
      icon: <Hammer className="h-6 w-6 text-pawbud-blue" />,
      title: "Pokrycia dachowe",
      description: "Profesjonalne wykonanie różnego rodzaju pokryć dachowych z wykorzystaniem najwyższej jakości materiałów."
    },
    {
      icon: <Paintbrush className="h-6 w-6 text-pawbud-blue" />,
      title: "Tynkowanie i malowanie",
      description: "Usługi tynkarskie i malarskie wykonywane z dbałością o detale. Oferujemy szeroki wybór wykończeń."
    },
    {
      icon: <Wrench className="h-6 w-6 text-pawbud-blue" />,
      title: "Roboty instalacyjne i wykończeniowe",
      description: "Kompleksowe wykonanie instalacji oraz prac wykończeniowych we wnętrzach."
    }
  ];

  return (
    <section id="uslugi" className="py-16 px-6 sm:px-10 gradient-blue-yellow">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pawbud-blue mb-4">Nasze Usługi</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferujemy szeroki zakres profesjonalnych usług budowlanych.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
