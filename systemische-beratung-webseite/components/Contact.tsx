import React from 'react';

const Contact: React.FC = () => {
  const handleDownload = () => {
    alert("Hier würde der Download des PDFs '3 Fragen für erste Klarheit' starten.");
  };

  return (
    <footer id="kontakt" className="bg-dunkelblau text-helllila py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-heading text-4xl font-bold mb-4 text-hellgruen">Bereit für den ersten Schritt?</h2>
        <p className="max-w-xl mx-auto mb-8">
          Vermutlich passt es: Freitags biete ich Termine bis 20 Uhr an. Schicken Sie mir eine Nachricht und wir finden einen Weg.
        </p>
        <button
          className="bg-orange text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
          onClick={() => window.location.href = 'mailto:beispiel@email.de'}
        >
          Lassen Sie uns reden
        </button>

        <div className="mt-16 border-t border-helllila/20 pt-8">
          <h3 className="font-heading text-xl text-orange mb-4">Ein Geschenk für Sie</h3>
          <p className="mb-4">Starten Sie Ihre Reflexion mit drei einfachen, aber kraftvollen Fragen.</p>
          <button
            onClick={handleDownload}
            className="text-hellgruen underline hover:text-orange transition-colors"
          >
            "3 Fragen für erste Klarheit" herunterladen (PDF)
          </button>
        </div>

        <div className="mt-8 text-xs text-helllila/60">
            <p>&copy; {new Date().getFullYear()} Systemische Beratung. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;