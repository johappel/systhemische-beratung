import React from 'react';
import Header from './systemische-beratung-webseite/components/Header';
import Hero from './systemische-beratung-webseite/components/Hero';
import About from './systemische-beratung-webseite/components/About';
import ForWhom from './systemische-beratung-webseite/components/ForWhom';
import Approach from './systemische-beratung-webseite/components/Approach';
import Process from './systemische-beratung-webseite/components/Process';
import Contact from './systemische-beratung-webseite/components/Contact';
import WaveDivider from './systemische-beratung-webseite/components/WaveDivider';
import { ThemeProvider } from './systemische-beratung-webseite/components/ThemeProvider';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <WaveDivider color="fill-hellgruen" bgColor="bg-helllila" />
          <About />
          <WaveDivider color="fill-helllila" bgColor="bg-hellgruen" reversed={true} />
          <ForWhom />
          <WaveDivider color="fill-hellgruen" bgColor="bg-dunkelblau" />
          <Approach />
          <WaveDivider color="fill-dunkelblau" bgColor="bg-helllila" reversed={true} />
          <Process />
          <WaveDivider color="fill-helllila" bgColor="bg-dunkelblau" />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;