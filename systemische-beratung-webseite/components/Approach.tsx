import React, { useState } from 'react';

interface Tool {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const tools: Tool[] = [
  {
    id: 'genogram',
    icon: 'images/icons/genogram.png',
    title: 'Genogramm-Arbeit',
    description: 'Wir visualisieren Beziehungsstrukturen und erkennen Muster, die oft im Verborgenen wirken. Das schafft Klarheit über Herkunft und Zusammenhänge.',
  },
  {
    id: 'circular',
    icon: 'images/icons/circle.png',
    title: 'Zirkuläres Fragen',
    description: 'Durch gezielte Fragen, die die Perspektiven anderer einbeziehen, öffnen wir den Blick für neue Lösungsräume. Der Perspektivwechsel ist der Schlüssel.',
  },
  {
    id: 'resources',
    icon: 'images/icons/compass.png',
    title: 'Ressourcenkompass',
    description: 'Wir lenken den Fokus weg vom Problem und hin zu Ihren Stärken, Fähigkeiten und Erfolgen. Ihre Stärken sind unsere verlässlichen Wegweiser.',
  },
];

const Approach: React.FC = () => {
  const [activeTool, setActiveTool] = useState<Tool>(tools[0]);

  return (
  <section id="ansatz" className="py-20 bg-section-3 text-fg-section-3">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold">Mein systemischer Ansatz</h2>
          <p className="max-w-2xl mx-auto mt-4 opacity-90">
            Meine Werkzeuge sind keine komplizierten Techniken, sondern Einladungen, die Dinge anders zu betrachten.
          </p>
        </div>
  <div className="rounded-lg p-8 md:flex md:space-x-8 bg-section-splitter-1 text-fg-section-splitter-1 m-auto max-w-[600px]">
          <div className="flex justify-center md:flex-col md:justify-start space-x-4 md:space-x-0 md:space-y-4 mb-8 md:mb-0">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool)}
                className={`p-4 rounded-full transition-colors duration-300 tool-button ${activeTool.id === tool.id ? 'bg-fg-section-splitter-1-heading text-fg-section-splitter-1-heading' : 'bg-section-2/20 hover:bg-section-2/40'}`}
                aria-label={tool.title}
                style={{ backgroundImage: `url(${tool.icon})` }}
              >
              </button>
            ))}
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-3xl font-bold mb-4 text-fg-section-splitter-1-heading">{activeTool.title}</h3>
            <p className="font-body text-lg leading-relaxed">{activeTool.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;