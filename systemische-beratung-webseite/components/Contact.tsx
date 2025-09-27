import React from 'react';
import { ThemeSwitcher } from './ThemeProvider';

const Contact: React.FC = () => {
  const handleDownload = () => {
    alert("Hier würde der Download des PDFs '3 Fragen für erste Klarheit' starten.");
  };

  return (
  <footer id="kontakt" className="py-16 bg-footer text-fg-footer">
      <div className="container mx-auto px-6 text-center">
  <h2 className="font-heading text-4xl font-bold mb-4">Bereit für den ersten Schritt?</h2>
        <p className="max-w-xl mx-auto mb-8">
          Vermutlich passt es: Freitags biete ich Termine bis 20 Uhr an. Schicken Sie mir eine Nachricht und wir finden einen Weg.
        </p>
        <button
          className="font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg bg-button text-fg-button hover:brightness-110"
          onClick={() => window.location.href = 'mailto:anna-maria.plischke@ekkw.de'}
        >
          Lassen Sie uns reden
        </button>

        <div className="mt-16 border-t pt-8 border-fg-footer/20">
          <h3 className="font-heading text-xl mb-4">Ein Geschenk für Sie</h3>
          <p className="mb-4">Starten Sie Ihre Reflexion mit drei einfachen, aber kraftvollen Fragen.</p>
          <button
            onClick={handleDownload}
            className="underline transition-colors hover:opacity-80"
          >
            "3 Fragen für erste Klarheit" herunterladen (PDF)
          </button>
        </div>

        <div className="mt-8 text-xs opacity-60">
            <p>&copy; {new Date().getFullYear()} Systemische Beratung. Alle Rechte vorbehalten.</p>
        </div>

        <div className="mt-6">
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Contact;