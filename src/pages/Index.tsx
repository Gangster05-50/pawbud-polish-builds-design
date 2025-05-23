
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Services />
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
