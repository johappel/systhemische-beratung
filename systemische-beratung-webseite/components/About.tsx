import React from 'react';

const Card: React.FC<{ imgSrc: string; title: string; quote: string; }> = ({ imgSrc, title, quote }) => (
  <div className="rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 bg-section-2 text-fg-section-2">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="font-heading text-xl font-bold mb-2 text-fg-section-2">{title}</h3>
            <p className="italic">"{quote}"</p>
        </div>
    </div>
);

const About: React.FC = () => {
  return (
  <section id="ueber-mich" className="py-20 bg-section-1 text-fg-section-1">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl font-bold mb-4">Über mich</h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg">
          Als Pfarrerin und systemische Beraterin kenne ich die Herausforderungen von Seelsorge, Bildung und Jugendarbeit. Ich sehe nicht Probleme – sondern verborgene Ressourcen in Systemen. Gemeinsam finden wir Wege, die nachhaltig wirken.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
            <Card 
                imgSrc="images/jugendarbeit.jpeg"
                title="Jugendarbeit"
                quote="Systemisch denken heißt: Nicht 'warum', sondern 'wozu' fragen."
            />
            <Card 
                imgSrc="images/schulseelsorgerin.jpeg"
                title="Schulseelsorge"
                quote="Meine Erfahrung: In jedem Konflikt steckt ein verborgenes Geschenk."
            />
            <Card 
                imgSrc="images/referentin.jpeg"
                title="Seminargespräch"
                quote="Wir schauen auf Muster – nicht auf Schuld. Niemand bleibt allein im Regen."
            />
        </div>
  <p className="mt-12 text-sm opacity-80">
          15+ Jahre Seelsorge | Ausbildung IFS (Integrative Systemische Therapie) | DGSF-zertifiziert
        </p>
      </div>
    </section>
  );
};

export default About;