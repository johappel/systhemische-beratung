import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: `url('/images/matruschka.jpg')` }}>
      <div className="absolute inset-0 bg-dunkelblau opacity-40"></div>
      <div className="relative z-10 p-6">
        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
          Menschen & Systeme verstehen.
        </h1>
        <h2 className="font-body text-3xl md:text-5xl mt-4 drop-shadow-md">
          Lösungen entfalten. Freiheit finden.
        </h2>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hellgruen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;