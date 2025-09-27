import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { title: 'Muster erkennen', description: 'Wir schauen genau hin, welche wiederkehrenden Muster Ihre Situation prägen.', cls:"pattern", image: "images/icons/muster.png" },
    { title: 'Ressourcen heben', description: 'Wir entdecken und aktivieren Ihre verborgenen Stärken und Fähigkeiten.', cls:"lift", image: "images/icons/resourcen-heben.png"},
    { title: 'Lösungen kreieren', description: 'Gemeinsam entwickeln wir passende, umsetzbare und nachhaltige nächste Schritte.', cls:"solution", image: "images/icons/keypuzzle.png"},
    { title: 'Freiheit leben', description: 'Sie gewinnen neue Handlungsspielräume und gestalten Ihre Zukunft selbstbestimmt.', cls:"freedom", image: "images/icons/vogel.png"},
  ];

  return (
   <section id="prozess" className="py-20 bg-section-1 text-fg-section-1">
     <style>
       {`
         .processicon {
           width: 48px;
           height: 48px;
           background-size: contain;
           background-repeat: no-repeat;
           background-position: center;
         }
         .processicon.pattern {
           background-image: url(${steps[0].image});
         }
         .processicon.lift {
           background-image: url(${steps[1].image});
         }
         .processicon.solution {
           background-image: url(${steps[2].image});
         }
         .processicon.freedom {
           background-image: url(${steps[3].image});
         }
         
       `}
     </style>
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl font-bold mb-4">Was machen wir?</h2>
  <p className="font-body text-xl italic mb-16">"Nicht gegen, sondern mit dem Wind segeln."</p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-5 left-0 w-full h-0.5 opacity-30 bg-fg-section-1"></div>
          
          <div className="grid md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="p-4 rounded-full z-10 bg-icon">
                    <div className={`processicon ${step.cls}`}></div>
                </div>
                <h3 className="font-heading text-xl font-bold mt-4 mb-2">{step.title}</h3>
                <p className="opacity-80 text-fg-section-1">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;