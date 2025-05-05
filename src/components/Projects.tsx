
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Budowa domu jednorodzinnego",
      category: "Realizacja projektu budowlanego",
      imageIndex: 1
    },
    {
      title: "Modernizacja dachu",
      category: "Pokrycia dachowe",
      imageIndex: 2
    },
    {
      title: "Wykończenie wnętrza",
      category: "Roboty wykończeniowe",
      imageIndex: 3
    },
    {
      title: "Remont mieszkania",
      category: "Tynkowanie i malowanie",
      imageIndex: 4
    }
  ];

  return (
    <section id="realizacje" className="py-20 px-6 sm:px-10 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pawbud-blue mb-4">Nasze Realizacje</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Poznaj wybrane projekty zrealizowane przez naszą firmę. Każda realizacja potwierdza nasze doświadczenie i profesjonalizm.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-pawbud-blue/20 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-pawbud-blue/10 flex items-center justify-center animate-float">
                    <div className="w-12 h-12 rounded-full bg-pawbud-yellow/20 flex items-center justify-center">
                      <Construction className="h-6 w-6 text-pawbud-blue" />
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-pawbud-blue/10">Projekt {project.imageIndex}</div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-pawbud-blue font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600">
                  Profesjonalna realizacja z wykorzystaniem najwyższej jakości materiałów i nowoczesnych technologii.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Avoid importing and export the component
import { Construction } from 'lucide-react';
export default Projects;
