
import React from 'react';

interface ProcessStepIconProps {
  step: number;
}

const ProcessStepIcon: React.FC<ProcessStepIconProps> = ({ step }) => {
    let path;
    switch (step) {
        case 1: // Muster erkennen (magnifying glass)
            path = <><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></>;
            break;
        case 2: // Ressourcen heben (plant growing)
            path = <><path d="M3 10h18M3 14h18M9 20v-8m6 8v-8M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" /></>;
            break;
        case 3: // Lösungen kreieren (lightbulb)
            path = <><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></>;
            break;
        case 4: // Freiheit leben (bird)
            path = <><path d="M5.636 18.364a9 9 0 010-12.728M18.364 5.636a9 9 0 010 12.728M12 20V4" /><path d="M12 4a4 4 0 100-8 4 4 0 000 8z" transform="translate(-6 12) rotate(-45)" /><path d="M12 4a4 4 0 100-8 4 4 0 000 8z" transform="translate(6 12) rotate(45)" /></>;
            break;
        default:
            path = <><path d="M5 13l4 4L19 7" /></>;
    }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      {path}
    </svg>
  );
};

export default ProcessStepIcon;
