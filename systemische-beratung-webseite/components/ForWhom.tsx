import React from 'react';

interface PostcardProps {
  imgSrc: string;
  altText: string;
  quote: string;
}

const Postcard: React.FC<PostcardProps> = ({ imgSrc, altText, quote }) => {
    return (
        <div className="bg-white p-4 rounded-md shadow-xl transform rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-transform duration-300 w-full max-w-sm">
            <img src={imgSrc} alt={altText} className="w-full h-56 object-cover rounded-sm" />
            <div className="mt-4 border-t pt-4 text-center">
                <p className="font-body text-lg italic text-dunkelgruen">"{quote}"</p>
            </div>
        </div>
    );
};

const ForWhom: React.FC = () => {
  return (
    <section id="fuer-wen" className="py-20 bg-hellgruen">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl font-bold mb-4">Für wen?</h2>
        <p className="max-w-3xl mx-auto mb-16 text-lg">
          Menschen im Raum von Kirche, Schule & Jugendarbeit, die systemische Impulse für komplexe Herausforderungen suchen – ohne schnelle Lösungen, dafür mit Raum für Entfaltung.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16">
          <Postcard 
            imgSrc="images/ausgelaugt.png" 
            altText="Jugendmitarbeiter" 
            quote="Ich fühle mich ausgelaugt!" 
          />
          <Postcard 
            imgSrc="images/leer.png" 
            altText="Pfarrer vor leerer Kirche" 
            quote="Die Kirche schrumpft – was nun?" 
          />
          <Postcard 
            imgSrc="images/brennt.png" 
            altText="Streit und Chaos im Team" 
            quote="Die Hütte brennt!" 
          />
        </div>
        <p className="mt-16 font-heading text-2xl text-orange">
          Gemeinsam finden wir die verborgenen Stellschrauben in Ihrem System.
        </p>
      </div>
    </section>
  );
};

export default ForWhom;